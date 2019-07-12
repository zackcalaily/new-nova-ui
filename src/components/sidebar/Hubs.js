import React, { Component } from 'react';

import Hub from './Hub';

class Hubs extends Component {
    
    render() {
        console.log('hubs', this.props.hubs);
        return (
            <>
                <div className="sidebar-heading">
                    {this.props.name}
                </div>

                {this.props.hubs.map(hub => <Hub key={hub.id} name={hub.name} icon={hub.icon} iconSelected={hub.icon_selected} id={hub.id} />)}
            </>
        );
    }

}

export default Hubs;