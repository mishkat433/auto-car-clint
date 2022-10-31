import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>page NOt found {error.message}</h1>
        </div>
    );
};

export default NotFound;