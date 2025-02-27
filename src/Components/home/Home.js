import React from 'react';
import {Link} from "react-router-dom";


export default class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>Test</h1>
                <Link to="/le-concept">Le concept</Link>
            </div>
        )
    }
}