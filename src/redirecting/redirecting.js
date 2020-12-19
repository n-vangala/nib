import React from 'react';
import './redirecting.scss';
import loadingPic from './loading.gif';

class Redirecting extends React.Component {
    render() {
        window.location.href="https://airtable.com/shrSPOe3ijuWcs5L7";
        return (
            <section className="redirectingPage">
                <div className="container">
                    <img src={loadingPic} alt="3 loading dots" />
                    <h1>Redirecting to the check-in page...</h1>
                    <p>Click <a href="https://airtable.com/shrSPOe3ijuWcs5L7">here</a> if you're not redirected.</p>
                </div>
            </section>
        );
    }
}

export default Redirecting;