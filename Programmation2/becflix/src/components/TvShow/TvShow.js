import React from 'react';
import logo from '../../img/logo.svg';
import Col from 'react-bootstrap/Col';



export class TvShow extends React.Component{
    render(){
        const image = <img src={logo} alt="" title=""/>;

        return(
            <col className="image-fluide" lg="2">
                image
            </col>
        )
    }
}