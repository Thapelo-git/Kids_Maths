import React, { Component } from 'react';
import './Stylling.css';

class Profile extends Component {
    state = {  }
    render() { 
        return (
            
        <div className="pageCover">
            <div className="proCover">
                <h2>Contacts Details</h2>
                <ul className="listcon">
                    <li>Phone number:0766465828</li><br/>
                    <li>Physical address :Moletjie Ga-Makgwakgwana 0709</li><br/>
                    <li>Email: chabathapelo1@gmail.com</li><br/>
                    <li>Facebook : Thapelo Chaba</li><br/>
                </ul>
            </div>
        </div> 
         );
    }
}
 
export default Profile;