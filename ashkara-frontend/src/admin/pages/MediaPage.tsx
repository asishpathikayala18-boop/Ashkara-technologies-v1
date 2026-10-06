import { useState, useEffect, useCallback, useRef } from "react";
import { Upload, Trash2, Copy, Check, Grid, List, Filter } from "lucide-react";
import toast from "react-hot-toast";
import { mediaApi } from "../services/adminApi";
import { cn } from "../../utils/cn";

const FOLDERS = ["gallery", "banners", "logos", "documents", "temp"];
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function MediaPage() {
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [folder, setFolder] = useState("gallery");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchFiles = useCallback(async () => {
    setLoading(true);
    try {
      const res = await mediaApi.list(folder);
      setFiles(res.data.data || []);
    } catch { toast.error("Failed to load media"); }
    finally { setLoading(false); }
  }, [folder]);

  useEffect(() => { fetchFiles(); }, [fetchFiles]);

  const handleUpload = async (uploadFiles: FileList | null) => {
    if (!uploadFiles || uploadFiles.length === 0) return;
    setUploading(true);
    const uploads = Array.from(uploadFiles);
    let success = 0;
    for (const file of uploads) {
      try {
        await mediaApi.upload(file, folder);
        success++;
      } catch {
        toast.error(`Failed to upload ${file.name}`);
      }
    }
    if (success > 0) toast.success(`${success} file(s) uploaded!`);
    setUploading(false);
    fetchFiles();
  };

  const handleDelete = async (f: any) => {
    if (!confirm(`Delete ${f.filename}?`)) return;
    try {
      await mediaApi.delete(f.folder, f.filename);
      toast.success("File deleted");
      fetchFiles();
    } catch { toast.error("Delete failed"); }
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    toast.success("URL copied!");
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes}B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
  };

  const isImage = (filename: string) => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(filename);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">Media Manager</h1>
          <p className="text-sm text-white/40 mt-0.5">{files.length} files in {folder}/</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setView("grid")} className={cn("size-9 rounded-lg flex items-center justify-center transition-all", view === "grid" ? "bg-cyan-500/10 text-cyan-400" : "text-white/30 hover:text-white hover:bg-white/[0.05]")}><Grid className="size-4" /></button>
          <button onClick={() => setView("list")} className={cn("size-9 rounded-lg flex items-center justify-center transition-all", view === "list" ? "bg-cyan-500/10 text-cyan-400" : "text-white/30 hover:text-white hover:bg-white/[0.05]")}><List className="size-4" /></button>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-xl disabled:opacity-60 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            <Upload className="size-4" />
            {uploading ? "Uploading..." : "Upload"}
          </button>
          <input ref={fileInputRef} type="file" multiple accept="image/*" className="hidden" onChange={(e) => handleUpload(e.target.files)} />
        </div>
      </div>

      {/* Folder Tabs */}
      <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-xl p-1">
        {FOLDERS.map((f) => (
          <button key={f} onClick={() => setFolder(f)}
            className={cn("px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all", folder === f ? "bg-cyan-500/20 text-cyan-400" : "text-white/40 hover:text-white")}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Drop Zone */}
      <div
        className={cn("border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer", isDragging ? "border-cyan-400 bg-cyan-500/5" : "border-white/10 hover:border-white/20 hover:bg-white/[0.02]")}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleUpload(e.dataTransfer.files); }}
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className="size-8 mx-auto mb-3 text-white/20" />
        <p className="text-sm text-white/40">Drag & drop images here, or click to browse</p>
        <p className="text-xs text-white/20 mt-1">JPG, PNG, WebP, SVG, GIF — Max 10MB</p>
      </div>

      {/* File Grid/List */}
      {loading ? (
        <div className="flex items-center justify-center h-48"><div className="size-8 border-2 border-white/10 border-t-cyan-400 rounded-full animate-spin" /></div>
      ) : files.length === 0 ? (
        <div className="text-center py-12 text-white/30 text-sm">No files in {folder}/ yet</div>
      ) : view === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {files.map((file) => (
            <div key={file.filename} className="group relative bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/10 transition-all transition duration-base ease-premium">
              {/* Preview */}
              <div className="aspect-square bg-black/20 flex items-center justify-center overflow-hidden">
                {isImage(file.filename) ? (
                  <img src={file.url} alt={file.filename} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 transition duration-base ease-premium" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                ) : (
                  <div className="text-white/20 text-xs font-mono">{file.filename.split(".").pop()?.toUpperCase()}</div>
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 transition duration-base ease-premium">
                <button onClick={() => handleCopyUrl(file.url)} className="size-8 rounded-lg bg-white/10 hover:bg-cyan-500/20 flex items-center justify-center text-white hover:text-cyan-400 transition-all transition duration-base ease-premium" title="Copy URL">
                  {copiedUrl === file.url ? <Check className="size-4" /> : <Copy className="size-4" />}
                </button>
                <button onClick={() => handleDelete(file)} className="size-8 rounded-lg bg-white/10 hover:bg-red-500/20 flex items-center justify-center text-white hover:text-red-400 transition-all transition duration-base ease-premium" title="Delete"><Trash2 className="size-4" /></button>
              </div>

              <div className="px-2 py-2 border-t border-white/[0.06]">
                <p className="text-xs text-white/60 truncate">{file.filename}</p>
                <p className="text-[10px] text-white/30 mt-0.5">{formatSize(file.size)}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden">
          {files.map((file, i) => (
            <div key={file.filename} className={cn("flex items-center gap-4 px-5 py-3 group hover:bg-white/[0.02] transition-colors", i !== 0 && "border-t border-white/[0.04]")}>
              <div className="size-10 rounded-lg overflow-hidden bg-white/[0.05] shrink-0 flex items-center justify-center">
                {isImage(file.filename) ? (
                  <img src={file.url} alt={file.filename} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                ) : (
                  <span className="text-white/30 text-[10px] font-mono">{file.filename.split(".").pop()}</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white/70 truncate">{file.filename}</p>
                <p className="text-xs text-white/30">{formatSize(file.size)}</p>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transition duration-base ease-premium">
                <button onClick={() => handleCopyUrl(file.url)} className="size-7 rounded-lg hover:bg-cyan-500/10 flex items-center justify-center text-white/30 hover:text-cyan-400 transition-all transition duration-base ease-premium">
                  {copiedUrl === file.url ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                </button>
                <button onClick={() => handleDelete(file)} className="size-7 rounded-lg hover:bg-red-500/10 flex items-center justify-center text-white/30 hover:text-red-400 transition-all transition duration-base ease-premium"><Trash2 className="size-3.5" /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
