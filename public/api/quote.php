<?php

declare(strict_types=1);

/*
 * Ayric — Quote Request Telegram Endpoint
 *
 * Flow:
 * Browser form → PHP → Telegram Bot API → Admin
 *
 * IMPORTANT:
 * Never put the Telegram bot token in the frontend.
 * Replace the two values below on the server.
 */

const BOT_TOKEN = 'PASTE_YOUR_BOT_TOKEN_HERE';
const ADMIN_CHAT_ID = 'PASTE_YOUR_ADMIN_CHAT_ID_HERE';

header('Content-Type: application/json; charset=utf-8');

function respond(bool $success, string $message, int $statusCode = 200): never
{
    http_response_code($statusCode);

    echo json_encode(
        [
            'success' => $success,
            'message' => $message,
        ],
        JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
    );

    exit;
}

/*
 * Only accept POST requests.
 */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'درخواست نامعتبر است.', 405);
}

/*
 * Basic configuration check.
 */
if (
    BOT_TOKEN === 'PASTE_YOUR_BOT_TOKEN_HERE' ||
    ADMIN_CHAT_ID === 'PASTE_YOUR_ADMIN_CHAT_ID_HERE'
) {
    respond(false, 'سرویس ارسال درخواست هنوز تنظیم نشده است.', 500);
}

/*
 * Read and sanitize form values.
 */
$name = trim((string) ($_POST['name'] ?? ''));
$phone = trim((string) ($_POST['phone'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$projectType = trim((string) ($_POST['projectType'] ?? ''));
$quantity = trim((string) ($_POST['quantity'] ?? ''));
$dimensions = trim((string) ($_POST['dimensions'] ?? ''));
$material = trim((string) ($_POST['material'] ?? ''));
$deadline = trim((string) ($_POST['deadline'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));

/*
 * Required fields.
 */
if ($name === '' || $phone === '' || $projectType === '') {
    respond(false, 'لطفاً اطلاعات الزامی را کامل کنید.', 422);
}

/*
 * Basic length limits.
 * These also help prevent unnecessarily large Telegram messages.
 */
$limits = [
    'name' => 150,
    'phone' => 50,
    'email' => 150,
    'projectType' => 100,
    'quantity' => 100,
    'dimensions' => 150,
    'material' => 200,
    'deadline' => 150,
    'message' => 2000,
];

$values = [
    'name' => $name,
    'phone' => $phone,
    'email' => $email,
    'projectType' => $projectType,
    'quantity' => $quantity,
    'dimensions' => $dimensions,
    'material' => $material,
    'deadline' => $deadline,
    'message' => $message,
];

foreach ($values as $field => $value) {
    if (mb_strlen($value, 'UTF-8') > $limits[$field]) {
        respond(false, 'یکی از اطلاعات واردشده بیش از حد مجاز طولانی است.', 422);
    }
}

/*
 * Validate email only when provided.
 */
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'فرمت ایمیل صحیح نیست.', 422);
}

/*
 * Prevent Telegram Markdown formatting from being
 * accidentally triggered by user-entered text.
 *
 * We use HTML parse mode below, so escape HTML characters.
 */
function escapeTelegramHtml(string $value): string
{
    return htmlspecialchars(
        $value,
        ENT_QUOTES | ENT_SUBSTITUTE,
        'UTF-8'
    );
}

$nameTelegram = escapeTelegramHtml($name);
$phoneTelegram = escapeTelegramHtml($phone);
$emailTelegram = $email !== ''
    ? escapeTelegramHtml($email)
    : 'ثبت نشده';

$projectTypeTelegram = escapeTelegramHtml($projectType);
$quantityTelegram = $quantity !== ''
    ? escapeTelegramHtml($quantity)
    : 'ثبت نشده';

$dimensionsTelegram = $dimensions !== ''
    ? escapeTelegramHtml($dimensions)
    : 'ثبت نشده';

$materialTelegram = $material !== ''
    ? escapeTelegramHtml($material)
    : 'ثبت نشده';

$deadlineTelegram = $deadline !== ''
    ? escapeTelegramHtml($deadline)
    : 'ثبت نشده';

$messageTelegram = $message !== ''
    ? escapeTelegramHtml($message)
    : 'توضیحی ثبت نشده';

/*
 * Build Telegram message.
 */
$telegramMessage =
    "🔔 <b>درخواست جدید استعلام قیمت</b>\n\n" .

    "👤 <b>نام:</b> {$nameTelegram}\n" .
    "📞 <b>شماره تماس:</b> {$phoneTelegram}\n" .
    "✉️ <b>ایمیل:</b> {$emailTelegram}\n\n" .

    "📦 <b>نوع پروژه:</b> {$projectTypeTelegram}\n" .
    "🔢 <b>تعداد:</b> {$quantityTelegram}\n" .
    "📐 <b>ابعاد:</b> {$dimensionsTelegram}\n" .
    "🧵 <b>متریال:</b> {$materialTelegram}\n" .
    "⏱ <b>زمان مورد نیاز:</b> {$deadlineTelegram}\n\n" .

    "📝 <b>توضیحات:</b>\n{$messageTelegram}\n\n" .

    "━━━━━━━━━━━━━━\n" .
    "🌐 <b>آیریک | استعلام قیمت</b>";

/*
 * Telegram API endpoint.
 */
$telegramUrl =
    'https://api.telegram.org/bot' .
    BOT_TOKEN .
    '/sendMessage';

/*
 * Request payload.
 */
$payload = [
    'chat_id' => ADMIN_CHAT_ID,
    'text' => $telegramMessage,
    'parse_mode' => 'HTML',
    'disable_web_page_preview' => true,
];

/*
 * Send request using cURL.
 */
$ch = curl_init($telegramUrl);

if ($ch === false) {
    respond(false, 'خطایی در ارتباط با سرویس ارسال رخ داد.', 500);
}

curl_setopt_array(
    $ch,
    [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query($payload),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 10,
        CURLOPT_TIMEOUT => 20,
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/x-www-form-urlencoded',
        ],
    ]
);

$response = curl_exec($ch);
$curlError = curl_error($ch);
$httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

/*
 * cURL/network error.
 */
if ($response === false || $curlError !== '') {
    respond(false, 'ارتباط با سرویس ارسال برقرار نشد. لطفاً دوباره تلاش کنید.', 502);
}

/*
 * Decode Telegram response.
 */
$result = json_decode($response, true);

/*
 * Unexpected response.
 */
if (!is_array($result)) {
    respond(false, 'پاسخ نامعتبر از سرویس ارسال دریافت شد.', 502);
}

/*
 * Telegram API returned an error.
 */
if (
    $httpCode < 200 ||
    $httpCode >= 300 ||
    empty($result['ok'])
) {
    respond(false, 'ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید.', 502);
}

/*
 * Success.
 */
respond(
    true,
    'درخواست شما با موفقیت ارسال شد.'
);
