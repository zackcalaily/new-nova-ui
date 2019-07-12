import React, { Component } from 'react';
import { createClient } from 'contentful';

import Hubs from './components/sidebar/Hubs';

import logo from './assets/images/logo.png';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            hubs: [],
        }
    }

    componentDidMount() {
        const client = createClient({
            space: 'xvzndjt1dzag',
            accessToken: 'XljpL8cZoRCi-wEIK6bkptYDqymuCkDa7NOO-B3d3jM',
            host: 'preview.contentful.com',
        });

        client.getEntry('JEMGgHm5Idl1YLTeVVhFF', { include: 5 })
            .then(entry => this.extractHubs(entry));
    }

    extractHubs(entry) {
        const name = entry.fields.name;
        const hubs = entry.fields.hubs.map(hub => {
            return {
                name: hub.fields.name,
                icon: hub.fields.icons[0].fields.file.url,
                icon_selected: hub.fields.icons[1].fields.file.url,
                id: hub.sys.id
            };
        });

        this.setState({
            name: name,
            hubs: hubs
        });
    }

    render() {
        return (
            <div id="wrapper">
                <ul className="navbar-nav bg-secondary sidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                        <img src={logo} alt="Nova" />
                    </a>

                    <hr className="sidebar-divider" />

                    <Hubs name={this.state.name} hubs={this.state.hubs} />
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
                            <h2 className="mb-4">Dashboard</h2>


                            <div className="row subhubs mb-4">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">Digital TV</h3>

                                            <ul>
                                                <li><a href="#" className="card-link">Activate or Migrate an Account</a></li>
                                                <li><a href="#" className="card-link">Billing & Online Billing</a></li>
                                                <li><a href="#" className="card-link">Channel Lineups</a></li>
                                                <li><a href="#" className="card-link">Installation & Technician Appointments</a></li>
                                                <li><a href="#" className="card-link">Offers</a></li>
                                                <li><a href="#" className="card-link">Packages & Value Added Services</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">Home Monitoring</h3>

                                            <ul>
                                                <li><a href="#" className="card-link">Appointments, Tickets & Outages</a></li>
                                                <li><a href="#" className="card-link">Change Account Info</a></li>
                                                <li><a href="#" className="card-link">Move Requests</a></li>
                                                <li><a href="#" className="card-link">Packages</a></li>
                                                <li><a href="#" className="card-link">Prices & Specs</a></li>
                                                <li><a href="#" className="card-link">Troubleshoot Equipment</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">Home Phone</h3>

                                            <ul>
                                                <li><a href="#" className="card-link">Add-Ons</a></li>
                                                <li><a href="#" className="card-link">Cancel, Move or Suspend Service</a></li>
                                                <li><a href="#" className="card-link">Change Account Info</a></li>
                                                <li><a href="#" className="card-link">Offers</a></li>
                                                <li><a href="#" className="card-link">Plans</a></li>
                                                <li><a href="#" className="card-link">Returns & Exchanges</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row subhubs mb-4">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">Ignite TV</h3>

                                            <ul>
                                                <li><a href="#" className="card-link">Activate or Migrate an Account</a></li>
                                                <li><a href="#" className="card-link">Add or Remove Content</a></li>
                                                <li><a href="#" className="card-link">Channel Lineups & Exchanges</a></li>
                                                <li><a href="#" className="card-link">Features & Apps</a></li>
                                                <li><a href="#" className="card-link">Offers</a></li>
                                                <li><a href="#" className="card-link">Packages</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-8">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">Wireless</h3>

                                            <div className="row mx-0">
                                                <ul className="col-lg-6">
                                                    <li><a href="#" className="card-link">Activate Account or Add-a-Line</a></li>
                                                    <li><a href="#" className="card-link">Add-Ons & Value Packs</a></li>
                                                    <li><a href="#" className="card-link">Change Plan</a></li>
                                                    <li><a href="#" className="card-link">Charges & Credits</a></li>
                                                    <li><a href="#" className="card-link">Data Add-Ons</a></li>
                                                    <li><a href="#" className="card-link">Offers - Postpaid</a></li>
                                                </ul>

                                                <ul className="col-lg-6">
                                                    <li><a href="#" className="card-link">Payments, Refunds & Arrangements</a></li>
                                                    <li><a href="#" className="card-link">Phones & Pricing</a></li>
                                                    <li><a href="#" className="card-link">Plans - Shared</a></li>
                                                    <li><a href="#" className="card-link">Save on Data & Control Data on Devices</a></li>
                                                    <li><a href="#" className="card-link">Travel Outside Canada</a></li>
                                                    <li><a href="#" className="card-link">Troubleshoot Service Issues</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row subhubs">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">Internet</h3>

                                            <ul>
                                                <li><a href="#" className="card-link">Activate an Account</a></li>
                                                <li><a href="#" className="card-link">Change Package</a></li>
                                                <li><a href="#" className="card-link">Installations & Technician Appointments</a></li>
                                                <li><a href="#" className="card-link">Offers</a></li>
                                                <li><a href="#" className="card-link">Packages & Add-Ons</a></li>
                                                <li><a href="#" className="card-link">Self-Installation, Modem & Wi-Fi Setup</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-8 d-flex flex-column">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <a className="nav-link active">Top News</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link">My Popular Articles</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link">Trending Articles</a>
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div className="tab-pane show active">
                                            <ul>
                                                <li><a href="#">Introducing Rogers Infinite - Unlimited Wireless Data Plans for Infinite Possibilities</a></li>
                                                <li><a href="#">4K VOD Content is Available on Ignite TV</a></li>
                                                <li><a href="#">Phase 1 of the Rogers Home Phone (RHP) Rate Increase is Effective June 24, 2019</a></li>
                                                <li><a href="#">Ignite WiFi Hub Puts Customers With Ignite TV in Command of their WiFi</a></li>
                                                <hr className="mt-4" />
                                                <li><a href="#">View all Top news</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
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