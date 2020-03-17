import React from 'react';

type ComparisonProps<T = any> = {
    name: string;
    type: T;
};

export const Comparison: React.FC<ComparisonProps> = props => {
    return (
        <div>
            <h1>Comparison Page</h1>
        </div>
    );
};
