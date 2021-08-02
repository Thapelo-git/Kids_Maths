import React, { Component } from 'react';
import './Stylling.css';
class Users extends Component {
    state = { 
        Users:[{
            name:'Thapelo',
            surname:'Chaba',
            location:'moletjie',
            age:'12'
        },
        {
            name:'Shaz',
            surname:'seroka',
            location:'polokwane',
            age:'20'
        },
        {
            name:'khomotso',
            surname:'mabotja',
            location:'setlogong',
            age:'26'
        },
        {
            name:'jane',
            surname:'phooko',
            location:'mamehlabe',
            age:'30'
        },
        {
            name:'Dikeledi',
            surname:'matibidi',
            location:'phalaborwa',
            age:'40'
        },
    ]
     };
    render() { 
        return ( <div className="pageCover">
            <div className="user-box">
            <h2>Users</h2>
            
       
        <table>
        {this.state.Users.map((usersList,i)=>{return(

            <tr>
                <td>{i+1}</td>
                <td>{usersList.name}</td>
                <td>{usersList.surname}</td>
                <td>{usersList.location}</td>
                <td>{usersList.age}</td>
            </tr>);
     })}
        </table>
        </div>
        </div>
            );
    }

}
 
export default Users;