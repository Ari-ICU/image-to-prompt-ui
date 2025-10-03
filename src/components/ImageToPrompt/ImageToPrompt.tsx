// ./src/components/ImageToPrompt/ImageToPrompt.tsx
'use client';

import { useImageToPrompt } from '@/hooks/useImageToPrompt';
import ImageUploader from './ImageUploader';
import PromptDisplay from './PromptDisplay';
// import { UseImageToPromptReturn } from '@/types/imageToPrompt.type'; // No longer needed for the type pick

export default function ImageToPrompt() {
    const {
        imagePreview,
        prompt,
        analyzing,
        copied,
        handleImageUpload,
        generatePrompt,
        copyToClipboard,
    } = useImageToPrompt(); // 🔥 FIX: Removed the explicit type annotation, letting TypeScript infer the correct array type.

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-8">
            <div className="max-w-4xl mx-auto">
                <ImageUploader
                    imagePreview={imagePreview}
                    onUpload={handleImageUpload}
                    onAnalyze={generatePrompt}
                    analyzing={analyzing}
                />

                {prompt && (
                    <PromptDisplay
                        prompt={prompt}
                        copied={copied}
                        setCopied={copyToClipboard}
                    />
                )}
            </div>
        </div>
    );
}