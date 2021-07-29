import * as React from "react";
import * as ReactDOM from "react-dom";

let contentBoxStyle = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
};

let headStyle = {
    height: '2.5rem',
    width: '100%',
    border: '1px solid #f0f0f0',
    fontSize: '1rem',
    lineHeight: '2.5rem',
    paddingLeft: '2rem',
    fontWeight:'550',
}

let bodyStyle = {
    border: '1px solid #f0f0f0',
    minHeight: '600px',
}

export class ContentBox extends React.Component {
    constructor(props) {
        super();
        this.state = {
            title: props.title
        }
    }
    render() {
        return (
            <div style={contentBoxStyle}>
                <div style={headStyle}>
                    {this.state.title}
                </div>
                <div style={bodyStyle}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}