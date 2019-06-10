import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Routes from '../Routes';

import './scss/styles.scss';

class Layout extends React.Component {
  state = {
    showAside: true
  }

  toggleSidebar = () => {
    const { showAside } = this.state;
    this.setState({ showAside: !showAside });
  }

  render() {
    const { showAside } = this.state;

    return(
      <div className="app-wrapper">
        <Header />
        <Aside
          isShow={showAside}
          toggleSidebar={this.toggleSidebar}
        />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default Layout;