import React, { Component } from 'react'


class PrintWelcome extends Component {
    render() {
        return (
            <div>
                <h2>Print Destroyer<br />
                    <small>Cut. Paste. Destroy.</small>
                </h2>
                <img src={require('./Logo.jpg')} alt="Print Destroyer Logo" />
            </div>
        );
    }
}

export default PrintWelcome;