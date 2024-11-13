import React from 'react';

export type TReplaceTextFlag = '++';

export interface IFormattedText {
    cleaned: Array<string | React.JSX.Element>;
    replaced?: Array<string | React.JSX.Element>;
}