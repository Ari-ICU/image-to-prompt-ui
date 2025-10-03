// src/services/imageToPromptService.ts
import { ENDPOINTS } from '@/services/api/apiUrl';
import { GeneratePromptResponse } from '@/types/imageToPrompt.type';

export class ImageToPromptService {
    // Upload image and get generated prompt
    static async generatePrompt(image: File): Promise<GeneratePromptResponse> {
        const formData = new FormData();
        formData.append('image', image);

        const response = await fetch(ENDPOINTS.GENERATE_PROMPT, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to generate prompt');
        }

        const data: GeneratePromptResponse = await response.json();
        return data;
    }
}
