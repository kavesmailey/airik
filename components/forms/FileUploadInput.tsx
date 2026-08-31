"use client";

import { useRef, useState } from "react";

interface FileUploadInputProps {
  id: string;
  label?: string;
  accept?: string;
  maxSizeMB?: number;
  onFileChange: (file: File | null) => void;
  error?: string;
}

export default function FileUploadInput({
  id,
  label = "آپلود فایل طراحی (اختیاری)",
  accept = ".jpg,.jpeg,.png,.pdf,.svg",
  maxSizeMB = 10,
  onFileChange,
  error,
}: FileUploadInputProps) {
  const [fileName, setFileName] = useState<string>("");
  const [fileError, setFileError] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setFileName("");
      setFileError("");
      onFileChange(null);
      return;
    }

    // Validate size
    if (file.size > maxSizeMB * 1024 * 1024) {
      setFileName("");
      setFileError(`حجم فایل نباید بیشتر از ${maxSizeMB} مگابایت باشد.`);
      onFileChange(null);
      return;
    }

    setFileName(file.name);
    setFileError("");
    onFileChange(file);
  };

  const handleRemove = () => {
    setFileName("");
    setFileError("");
    onFileChange(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className="block text-sm font-medium"
        style={{ color: "var(--color-text)" }}
      >
        {label}
      </label>
      <div
        className="flex items-center gap-3 rounded-md border p-3"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-surface)",
        }}
      >
        <input
          ref={inputRef}
          type="file"
          id={id}
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="btn-secondary"
          style={{ whiteSpace: "nowrap" }}
        >
          انتخاب فایل
        </button>
        {fileName ? (
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span
              className="text-sm truncate"
              style={{ color: "var(--color-text)" }}
            >
              {fileName}
            </span>
            <button
              type="button"
              onClick={handleRemove}
              className="text-sm"
              style={{ color: "var(--color-text-muted)" }}
              aria-label="حذف فایل"
            >
              حذف
            </button>
          </div>
        ) : (
          <span
            className="text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            فایلی انتخاب نشده است
          </span>
        )}
      </div>
      {(fileError || error) && (
        <p className="text-xs" style={{ color: "var(--color-error, #e74c3c)" }}>
          {fileError || error}
        </p>
      )}
    </div>
  );
}
