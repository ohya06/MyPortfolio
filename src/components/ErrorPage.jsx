import React from 'react';
import './ErrorPage.css'; // Assume we have some styles defined here

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>Oops!</h1>
            <p>It looks like the source code took a wrong turn.</p>
            <div className="error-animation">
                {/* You can add an animation or funny image here */}
                <img src="https://example.com/funny-error-image.png" alt="Funny Error" />
            </div>
            <p>Try visiting the <a href="/">homepage</a> or check back later!</p>
        </div>
    );
};

export default ErrorPage;
