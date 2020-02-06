import React from 'react';

export default class AddFolder extends React.Component {
    state = {
        folderName: {value: ''}
    };

    setFolderName = (folderName) => {
        this.setState({folderName: {value: folderName}});
    };

    // postFolder = (folderName) => {
    //      This code belongs in App.js
    //     fetch('http://localhost:9090/folders', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: {
    //             "name": folderName
    //         }
    //     })
    // }

    render() {
        return (
            <form>
                <label htmlFor="folderName">Folder Name:</label>
                <input id="folderName" type="text" value={this.state.folderName.value} onChange={e => this.setFolderName(e.target.value)}/>
                <button>Add Folder</button>
            </form>
        );
    }

}