import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentWillUnmount(){
        console.log('action previous to unMount a component on the DOM');
    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        return () => {
            console.log('action previous to unMount a component on the DOM');
        };
    }, []);

    return (
        <div>
            <h1>WillUnmountHook</h1>
        </div>
    );
}
