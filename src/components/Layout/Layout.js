import React, { Component } from 'react';

import Auxilliary from '../../hoc/Auxilliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        // this.setState( (prevState) => {
        //  return { showSideDrawer: !prevState.showSideDrawer };
        //  });
       this.setState({showSideDrawer: true})
        }

    render() {
        return (
                <Auxilliary>
                <div>
                    <Toolbar
                     drawerToggleClicked={this.sideDrawerToggleHandler}/>
                    <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                    />
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                </Auxilliary>
            );
    }
    };


export default Layout;