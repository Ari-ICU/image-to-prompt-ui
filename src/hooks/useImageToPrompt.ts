// useImageToPrompt.ts
import { useState } from 'react';
import { ImageToPromptService } from '@/services/imageToPromptService';
import { UseImageToPromptReturn, GeneratePromptResponse } from '@/types/imageToPrompt.type';

export function useImageToPrompt(): UseImageToPromptReturn {
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [prompt, setPrompt] = useState<GeneratePromptResponse[]>([]);
    const [analyzing, setAnalyzing] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleImageUpload = (file: File) => {
        if (file && file.type.startsWith('image/')) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result as string);
            reader.readAsDataURL(file);
            setPrompt([]);
        }
    };

    const generatePrompt = async () => {
        if (!image) return;
        setAnalyzing(true);
        try {
            const data = await ImageToPromptService.generatePrompt(image);
            // Ensure prompt is always an array
            const formattedPrompt: GeneratePromptResponse[] = Array.isArray(data)
                ? data
                : [data];
            setPrompt(formattedPrompt);
        } catch (error) {
            console.error(error);
            setPrompt([]);
        }
        setAnalyzing(false);
    };

    const copyToClipboard = () => {
        if (!prompt.length) return;
        navigator.clipboard.writeText(JSON.stringify(prompt, null, 2));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return {
        image,
        imagePreview,
        prompt,
        analyzing,
        copied,
        handleImageUpload,
        generatePrompt,
        copyToClipboard,
    };
}
