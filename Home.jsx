import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import About from './About';
import Users from './Users';
import Profile from './Profile';
    

class Home extends Component {
    state = {  }
    render() { 
        return ( 
           <Router>
               <div className="homeCover">
                   
                   <nav>
                       <div className="menu-bar">
                       <ul>
                           <li>
                               <Link to="/">Home</Link>
                           </li>
                           <li>
                               <Link to="/About">About</Link>
                           </li>
                           <li>
                           <Link to="/Profile">Profile</Link>
                           </li>
                          <li>
                          <Link to="/Users">Users</Link>
                          </li>
                       </ul>
                       </div>
                   </nav>
                   <Switch>
                    <Route path="/About">
                        <About/>
                    </Route>
                    <Route path="/Profile">
                        <Profile/>
                    </Route>
                    <Route path="/Users">
                        <Users/>
                    </Route>
                   </Switch>
               </div>
           </Router>
         );
    }
}
 
export default Home;