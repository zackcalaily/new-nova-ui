import React, { Component } from 'react';

class Subhub extends Component {
    render() {
        return (
            <div className="col-lg-4 mb-4">
                <div className="card h-100">
                    <div className="card-body">
                        <h3 className="card-title">{this.props.name}</h3>

                        <ul>
                            {this.props.links.map((link, index) => (<li key={index}><a href={link.url} className="card-link">{link.text}</a></li>))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Subhub;