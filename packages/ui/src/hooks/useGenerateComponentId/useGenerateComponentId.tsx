import { useMemo } from 'react';

// TODO retornar para encontrar uma forma melhor de gerar
export default function useGenerateComponentId(text: string): string {
    return useMemo(
        () => text.toLowerCase().replace(/\s/g, '_'),
        [text]
    );
}