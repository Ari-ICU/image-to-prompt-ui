// PromptDisplay.tsx
import React from 'react';
import { GeneratePromptResponse, VisualElement } from '@/types/imageToPrompt.type'

interface PromptDisplayProps {
    prompt: GeneratePromptResponse[];
    copied: boolean;
    setCopied: () => void;
}

// 2. Define the union type using the imported VisualElement
type VisualElementItem = VisualElement | string;

export default function PromptDisplay({ prompt, copied, setCopied }: PromptDisplayProps) {
    return (
        <div className="space-y-6">
            {prompt.map((p, idx) => {
                // The fix for the nested object remains correct
                const promptData = p.prompt;

                return (
                    <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Generated Prompt
                            </h2>
                            <button
                                onClick={setCopied}
                                className={`px-4 py-2 rounded-full font-semibold transition-colors flex items-center gap-2 ${copied
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                            >
                                {copied ? '✅ Copied!' : '📋 Copy'}
                            </button>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-auto">
                            <h3 className="text-lg text-gray-700 font-semibold mb-2">{promptData.title}</h3>
                            <p className="mb-4 italic text-gray-700">{promptData.concept}</p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                {promptData.visual_elements.map((el: VisualElementItem, i: number) => (
                                    <li key={i}>
                                        {/* 🔥 FIX: Added typeof check to ensure 'el' is an object before using 'in' */}
                                        {typeof el === 'object' && el !== null && 'element_type' in el ? (
                                            <>
                                                <span className="font-semibold">{el.element_type}: </span>
                                                <span>{el.description}</span>
                                            </>
                                        ) : (
                                            // The type is correctly narrowed to 'string' here
                                            <span>{el}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}