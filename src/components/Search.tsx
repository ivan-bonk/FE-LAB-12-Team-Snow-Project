import React from 'react';

type SearchProps<T = any> = {
    name: string;
    type: T;
};

export const Search: React.FC<SearchProps> = props => {
    return (
        <div>
            <h1>Search Page</h1>
        </div>
    );
};
