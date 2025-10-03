import { Upload, Wand2 } from 'lucide-react';

interface ImageUploaderProps {
    imagePreview: string | null;
    onUpload: (file: File) => void;
    onAnalyze: () => void;
    analyzing: boolean;
}

export default function ImageUploader({
    imagePreview,
    onUpload,
    onAnalyze,
    analyzing,
}: ImageUploaderProps) {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            {!imagePreview ? (
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition-all duration-300">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-12 h-12 text-gray-400 mb-3" />
                        <p className="mb-2 text-sm text-gray-600">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                    <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => e.target.files && onUpload(e.target.files[0])}
                    />
                </label>
            ) : (
                <div className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden">
                        <img
                            src={imagePreview}
                            alt="Uploaded preview"
                            className="w-full h-auto max-h-96 object-contain bg-gray-100"
                        />
                    </div>
                    <div className="flex gap-3">
                        <label className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors text-center">
                            Upload Different Image
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => e.target.files && onUpload(e.target.files[0])}
                            />
                        </label>
                        <button
                            onClick={onAnalyze}
                            disabled={analyzing}
                            className="flex-1 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            <Wand2 className={`w-5 h-5 ${analyzing ? 'animate-spin' : ''}`} />
                            {analyzing ? 'Analyzing...' : 'Generate Prompt'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
