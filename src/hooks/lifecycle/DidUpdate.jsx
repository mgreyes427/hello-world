import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidUpdate(){
        console.log('action when update a component to the DOM');
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('action when update a component to the DOM');
    });

    return (
        <div>
            <h1>DidUpdateHook</h1>
        </div>
    );
}
