import React, { Component } from 'react';
import './Stylling.css';
class About extends Component {
    state = {  }
    render() { 
        return (<div className="pageCover1">
        <div className="resBox">
            
            <div className="boxProfile">
                <h1 className="hedN">Chaba Thapelo</h1>
            </div>
           
        
        <section className="content">
        <div className="half" cellspacing="10px">
            <h2>Qualifications<hr className="line1"/>
            </h2>
            
            <h4>National senior certificate</h4>
            <p>Selamodi secondary school<br/>2011-2015</p>
            <h4>National Diploma Information <br/>Technology</h4>
            <p>Tshwane University of Technology <br/>2016-2019</p>
            <h2>Profile</h2>
            <hr className="line2"/>
            <p>Thapelo is a flexible,posses excellent time keeping skills . 
                I am an self-motivated,responsible and hard working person.
                I am a mature team worker and adaptable to all challenging situations.
                I am able to work well  both in a team environment as 
                well as using own initiative.          </p>
        </div>
        <div className="half">
            <h2>Skills</h2>
            <hr className="line3"/>
            <table  class="table1" cellspacing="2px">
                <tr>
                    <td id="textS"><h5>html</h5></td>
                    <td> <progress max="100" value="40" min="0"></progress>
                    </td>
                </tr>
                <tr>
                    <td id="textS"><h5>css</h5></td>
                    <td> <progress max="100" value="10" min="0"></progress>
                    </td>
                </tr>
                <tr>
                    <td id="textS"><h5>c#</h5></td>
                    <td> <progress max="10" value="2" min="0"></progress>
                    </td>
                </tr>

            </table>
            <h2>Languages</h2>
            <hr className="line4"/>
            <p>Sepedi  English</p>
            <h2 >Interests</h2>
                <hr className="line5"/>
                <ul className="list2">
                    <li>coding</li>
                    <li>Execising</li>
                    <li>Reading</li>
                </ul>
        </div>
        </section>
        </div>
        </div>
          );
    }
}
 
export default About;