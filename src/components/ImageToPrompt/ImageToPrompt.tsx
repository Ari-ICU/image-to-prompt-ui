'use client';

import { useImageToPrompt } from '@/hooks/useImageToPrompt';
import ImageUploader from './ImageUploader';
import PromptDisplay from './PromptDisplay';

export default function ImageToPrompt() {
    const {
        imagePreview,
        prompt,
        analyzing,
        copied,
        handleImageUpload,
        generatePrompt,
        copyToClipboard,
    } = useImageToPrompt();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <header className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-purple-700 mb-2">
                        AI Image-to-Prompt Generator
                    </h1>
                    <p className="text-lg text-gray-600">
                        Upload an image and get a creative AI art prompt instantly!
                    </p>
                </header>

                {/* Image Uploader */}
                <ImageUploader
                    imagePreview={imagePreview}
                    onUpload={handleImageUpload}
                    onAnalyze={generatePrompt}
                    analyzing={analyzing}
                />

                {/* Display AI-generated Prompt */}
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
