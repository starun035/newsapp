import React from 'react';
import loader from './loader.gif'

export class Loader extends React.Component {
    // constructor() {
    //     super();
    // }
    render() {
        return (
        <div className="text-center">
            <img src={loader} alt="Loading..." />
        </div>
        );
    }
    // checking manual upload
}