import React, { Component } from 'react';
import AppBar from '../components/AppBar/AppBar';

class HeaderBar extends Component {
    render() {
        return(
            <div className="App-header">
                <AppBar/>
            </div>
        );
    }
}

export default HeaderBar;