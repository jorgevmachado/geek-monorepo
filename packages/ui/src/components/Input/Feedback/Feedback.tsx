import React from 'react';

import Text from '../../Text';

import './Feedback.scss';

interface FeedbackProps {
    context: 'error' | 'success' | 'attention';
    children?: React.ReactNode;
}

export default function Feedback({ context, children }: FeedbackProps) {
    return (
        <Text
            color={`${context}-80`}
            variant="regular"
            className="feedback">
            {children}
        </Text>
    );
}