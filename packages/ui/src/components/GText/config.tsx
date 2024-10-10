import React from 'react';

import { type IFormattedText, TReplaceTextFlag } from './interface';

const formattingRegex = /(_.*?_)|(\*.*?\*)|(\++?\++)/g;

const replaceTagsRegex = /<(.*?)>(.*?)<\/\1>/g;

function getReplaceTextFlag(text: string) {
    return text.includes('++') ? '++' : undefined;
}

function splitParagraphs(text: string) {
    return text.split(/(?:\r\n){2,}/g) || [];
}

function applyTextFormatting(text: string) {
    switch (text[0]) {
        case '_':
            return <em key="_">{applyTextFormatting(text.substring(1, text.length - 1))}</em>;
        case '*':
            return <strong key="*">{applyTextFormatting(text.substring(1, text.length - 1))}</strong>;
        case '+':
            if (text[1] === '+') { return text; }
            return <span key="+"><br/>{applyTextFormatting(text.substring(1, text.length - 1))}<br/></span>;
        default:
            return text;
    }
}

function replaceTextBetween(texts: Array<string | React.JSX.Element>) {
    return texts.map((text, index) => {
        if (typeof text === 'string' && text.match(replaceTagsRegex)) {
            const value = text.replace(replaceTagsRegex, '$2');
            const className = text.replace(replaceTagsRegex, '$1');
            return <span key={`${text}-${index}`} className={className}>{value}</span>;
        }
        return text;
    });
}

function applyTextReplacementToTag(text: string, replaceTextFlag?: TReplaceTextFlag) {
    if (text !== replaceTextFlag) { return text; }
    const key = Math.random().toString();
    switch (replaceTextFlag) {
        case '++':
            return <br key={key}/>;
        default:
            return text;
    }
}

function replaceText(formattedTexts: Array<string | React.JSX.Element>, replaceTextFlag?: TReplaceTextFlag) {
    if (!replaceTextFlag) {
        return {
            cleaned: formattedTexts,
            replaced: undefined,
        };
    }

    return {
        cleaned: formattedTexts.map((text) => {
            if (text === replaceTextFlag) {
                return text.replaceAll(replaceTextFlag, '');
            }
            return text;
        }),
        replaced: formattedTexts.map((text) => {
            if (typeof text === 'string') {
                return applyTextReplacementToTag(text, replaceTextFlag);
            }
            return text;
        }),
    };
}

export function formatText(text: string): IFormattedText | undefined {
    const replaceTextFlag = getReplaceTextFlag(text);
    return splitParagraphs(text).map((paragraph) => {
        const formattedTexts = paragraph
            .split(formattingRegex)
            .filter(n => n)
            .map((str) => applyTextFormatting(str));

        const textReplacedBetween = replaceTextBetween(formattedTexts);
        return replaceText(textReplacedBetween, replaceTextFlag);
    })[0];
}

export function isReactNode(value: any): boolean {
    return (
        React.isValidElement(value)
        || (Array.isArray(value) && value.every(isReactNode))
    );
}