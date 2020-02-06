import React from 'react';

export default class AddFolder extends React.Component {
    state = {
        folderName: {value: ''}
    };

    setFolderName = (folderName) => {
        
    }

    postFolder = (folderName) => {
        fetch('http://localhost:9090/folders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: {
                "name": folderName
            }
        })
    }

    render() {
        return (
            <form>

                <input type="text"></input>
            </form>
        )
    }

}