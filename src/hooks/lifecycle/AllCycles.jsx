import React, { useEffect } from 'react';

export const AllCycles = () => {

    useEffect(() => {
        console.log('action when create a component in the DOM');

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`;
            console.log('update of the component');
        }, 1000);

        return () => {
            console.log('action previous to unMount a component on the DOM');
            document.title = 'Stopped time';
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div>
            <h1>WillUnmountHook</h1>
        </div>
    );
}
