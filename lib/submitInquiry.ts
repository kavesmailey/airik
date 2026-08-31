/**
 * Abstract submission layer.
 *
 * Replace the body of this function with an actual API call, Netlify Forms,
 * Supabase, Telegram, email, or any other backend.
 *
 * The function receives the form data as a plain object.
 * It should return a Promise<{ success: boolean; message?: string }>.
 *
 * Currently it simulates a network delay and always succeeds.
 * This is for demonstration purposes only — no data is actually sent anywhere.
 */

export interface InquiryFormData {
  name: string;
  phone: string;
  service: string;
  productType?: string;
  quantity?: string;
  description: string;
  file?: File | null;
  // Honeypot field, should be empty for real users
  company?: string;
}

export async function submitInquiry(
  data: InquiryFormData
): Promise<{ success: boolean; message?: string }> {
  // TODO: Connect to your preferred backend.
  // Examples:
  // - Netlify Forms: POST to "/" with form-data
  // - Supabase: insert into table
  // - Email service
  // - Telegram bot API
  // - Custom API endpoint

  // Simulate network request
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // For now, always return success.
  // In a real implementation, you would return the result of the actual request.
  return { success: true };
}
