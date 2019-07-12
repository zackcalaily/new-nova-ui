import React, { Component } from 'react';
import { createClient } from 'contentful';

import Hubs from './components/sidebar/Hubs';
import HubContainer from './components/hub-container/HubContainer';

import logo from './assets/images/logo.png';

class App extends Component {
    constructor(props) {
        super(props);

        this.client = createClient({
            space: 'xvzndjt1dzag',
            accessToken: 'XljpL8cZoRCi-wEIK6bkptYDqymuCkDa7NOO-B3d3jM',
            host: 'preview.contentful.com',
        });

        this.state = {
            name: null,
            hubs: [],
            activeHubIndex: 0,
        }        
    }

    componentDidMount() {

        this.client.getEntry('JEMGgHm5Idl1YLTeVVhFF', { include: 5 })
            .then(entry => this.extractHubs(entry));
    }

    extractHubs(entry) {
        const name = entry.fields.name;
        const hubs = entry.fields.hubs.map(hub => {
            return {
                name: hub.fields.name,
                icon: hub.fields.icons[0].fields.file.url,
                icon_selected: hub.fields.icons[1].fields.file.url,
                id: hub.sys.id,
                subhubs: hub.fields.hasOwnProperty('subhubs') ? this.extractSubhubs(hub.fields.subhubs) : [],
            };
        });

        this.setState({
            name: name,
            hubs: hubs,
            activeHubIndex: 0,
        });
    }

    extractSubhubs(subhubs) {
        return subhubs.map(subhub => {
            return {
                id: subhub.sys.id,
                name: subhub.fields.name,
                links: subhub.fields.subhubLinks.map(link => {
                    return {
                        url: link.fields.url,
                        text: link.fields.text,
                    };
                }),
            };
        })
    }

    changeHub = (hubIndex) => {
        this.setState({
            activeHubIndex: hubIndex
        });
    }

    render() {
        if (this.state.hubs.length === 0) {
            return null;
        }

        return (
            <div id="wrapper">
                <ul className="navbar-nav bg-secondary sidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                        <img src={logo} alt="Nova" />
                    </a>

                    <hr className="sidebar-divider" />

                    <Hubs changeHub={this.changeHub} name={this.state.name} hubs={this.state.hubs} />
                </ul>
            
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <button className="btn btn-link d-md-none rounded-circle sidebar-toggle-top">
                                <i className="fa fa-bars" />
                            </button>

                            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for specific terms, questions, Document IDs, etc." />
                                    <div className="input-group-append">
                                        <button className="btn btn-secondary" type="button">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#">
                                        <i className="fa fa-bell fa-fw"></i>
                                        <span className="badge badge-danger badge-counter">3+</span>
                                    </a>
                                </li>

                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#">
                                        <i className="fa fa-bookmark fa-fw"></i>
                                    </a>
                                </li>
                                    
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#">
                                        <span className="mr-2 d-none d-lg-inline welcome-text">Welcome, Zack Calaily</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="container-fluid">
                            <HubContainer name={this.state.hubs[this.state.activeHubIndex].name} subhubs={this.state.hubs[this.state.activeHubIndex].subhubs} />
                        </div>
                    </div>

                    <footer className="sticky-footer">
                        <div className="container-fluid my-auto">
                            <h2>
                                More Tools
                                <i className="fa fa-chevron-up"></i>
                            </h2>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;