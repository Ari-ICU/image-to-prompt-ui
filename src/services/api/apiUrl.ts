export const API_URL: string = process.env.NEXT_PUBLIC_API_URL! || 'https://image-to-prompt-backend.onrender.com';

export const BASE_URL = `${API_URL}/api`;

export const ENDPOINTS = {
    UPLOAD: `${BASE_URL}/upload`,
    GENERATE_PROMPT: `${BASE_URL}/generate-prompt`,
};
