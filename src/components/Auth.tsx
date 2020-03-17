import React from 'react';

type AuthProps<T = any> = {
    name: string;
    type: T;
};

export const Auth: React.FC<AuthProps> = props => {
    return (
        <div>
            <h1>Auth Page</h1>
        </div>
    );
};
