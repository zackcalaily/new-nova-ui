import React, { Component } from 'react';

import Subhub from './subhub/Subjub';

class HubContainer extends Component {
   
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h2 className="mb-4">{this.props.name}</h2> 

                {this.props.subhubs.map(subhub => <Subhub key={subhub.id} name={subhub.name} links={subhub.links} />)}
            </>
        )
    }
}

export default HubContainer;