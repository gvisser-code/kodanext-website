"use client";

import { useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";

type CVUploadProps = {
  onUpload: (path: string) => void;
  currentFile?: string;
};

export default function CVUpload({ onUpload, currentFile }: CVUploadProps) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    if (!file) return;
    const allowed = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(file.type)) {
      setError("Alleen PDF of DOCX bestanden zijn toegestaan.");
      return;
    }

    setUploading(true);
    setError("");
    const supabase = createClient();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setError("Je bent niet ingelogd."); setUploading(false); return; }

    const ext = file.name.split(".").pop();
    const path = `${user.id}/cv.${ext}`;

    const { error: uploadError } = await supabase.storage.from("cvs").upload(path, file, { upsert: true });
    if (uploadError) { setError("Upload mislukt: " + uploadError.message); setUploading(false); return; }

    await supabase.from("profiles").update({ cv_path: path }).eq("id", user.id);

    onUpload(file.name);
    setUploading(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <div>
      {currentFile ? (
        <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-4 py-3">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-[#1F2937]">{currentFile}</p>
              <p className="text-xs text-green-600">Geüpload</p>
            </div>
          </div>
          <button onClick={() => inputRef.current?.click()} className="text-xs text-[#6B7280] hover:text-[#1F2937] underline">
            Vervangen
          </button>
        </div>
      ) : (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          onClick={() => !uploading && inputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
            dragging ? "border-[#10B981] bg-green-50" : "border-[#E5E7EB] hover:border-[#10B981] hover:bg-green-50"
          }`}
        >
          <svg className="w-10 h-10 text-[#6B7280] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-sm font-medium text-[#1F2937]">{uploading ? "Uploaden..." : "Sleep je CV hierheen"}</p>
          <p className="text-xs text-[#6B7280] mt-1">of klik om te uploaden</p>
          <p className="text-xs text-[#6B7280] mt-2">PDF of DOCX • max 5 MB</p>
        </div>
      )}

      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.docx"
        className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
      />
    </div>
  );
}
