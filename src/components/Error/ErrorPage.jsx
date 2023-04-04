import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error);
    return (
        <div>
            <h3>Oops!</h3>
            <p>Sorry, an unexpected error has occurred</p>
            <p><i>{error.status.Text || error.massage}</i></p>
        </div>
    );
};

export default ErrorPage;