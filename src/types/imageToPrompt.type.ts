// src/types/imageToPrompt.type.ts

export interface VisualElement {
    element_type: string;
    description: string;
}


export interface GeneratePromptResponse {
    prompt: {
        title: string;
        concept: string;
        visual_elements: VisualElement[];
    };
}

export interface UseImageToPromptReturn {
    image: File | null;
    imagePreview: string | null;
    prompt: GeneratePromptResponse[];
    analyzing: boolean;
    copied: boolean;
    handleImageUpload: (file: File) => void;
    generatePrompt: () => Promise<void>;
    copyToClipboard: () => void;
}
