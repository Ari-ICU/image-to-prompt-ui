// src/services/api/apiUrl.ts

export const API_URL: string = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const BASE_URL = `${API_URL}/api`;

export const ENDPOINTS = {
    UPLOAD: `${BASE_URL}/upload`,
    GENERATE_PROMPT: `${BASE_URL}/generate-prompt`,
};