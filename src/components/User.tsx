import React from 'react';

type UserProps<T = any> = {
    name: string;
    type: T;
};

export const User: React.FC<UserProps> = props => {
    return (
        <div>
            <h1>User Page</h1>
        </div>
    );
};
