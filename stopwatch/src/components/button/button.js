import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <button onClick={this.props.clickHandler} disabled={this.prop.disabled}> {this.props.text}</button >
        )
    }

}


export default Button;