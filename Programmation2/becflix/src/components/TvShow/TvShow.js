import React from 'react';
import logo from '../../img/logo.svg';
import Col from 'react-bootstrap/Col';



export class TvShow extends React.Component{
    render(){
        const image = <img src={logo} alt="" title=""/>;

        return(
            <Col className="img-fluide" lg="2">
                {image}
            </Col>
        )
    }
}