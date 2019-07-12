import React, { Component } from 'react';

class Hub extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            active_icon: props.icon,
        };
    }

    onHover = () => {
        this.setState({ active_icon: this.props.iconSelected });
    }

    onBlur = () => {
        this.setState({ active_icon: this.props.icon });
    }

    render() {
        return (
            <li className="nav-item">
                <a className="nav-link" href="#" onMouseOver={this.onHover} onMouseOut={this.onBlur}>
                    <img ref="input" src={this.state.active_icon} width="30" height="30" alt={this.props.name} />
                    <span>{this.props.name}</span>
                </a>
            </li>
        );
    }
}

export default Hub;