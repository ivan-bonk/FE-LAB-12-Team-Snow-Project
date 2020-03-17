import React from 'react';

type ResultProps<T = any> = {
    name: string;
    type: T;
};
export const Result: React.FC<ResultProps> = props => {
    return (
        <div>
            <h1>Result Page</h1>
        </div>
    );
};
