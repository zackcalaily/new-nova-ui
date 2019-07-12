import React, { Component } from 'react';

import Hub from './Hub';

class Hubs extends Component {
    
    render() {
        return (
            <>
                <div className="sidebar-heading">
                    {this.props.name}
                </div>

                {this.props.hubs.map((hub, index) => <Hub key={hub.id} index={index} onClick={this.props.changeHub} name={hub.name} icon={hub.icon} iconSelected={hub.icon_selected} id={hub.id} />)}
            </>
        );
    }

}

export default Hubs;