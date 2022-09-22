import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('action previous to add component to the DOM');
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log('action previous to add component to the DOM');
    }, []);

    return (
        <div>
            <h1>DidMountHook</h1>
        </div>
    );
}
