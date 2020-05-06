import React from 'react';
import Col from 'react-bootstrap/Col';

export class TvShow extends React.Component{
    render(){
        return(
            <Col className="img-fluide" xs lg="2">
                <img 
                src={this.props.src}
                alt={this.props.alt}
                title={this.props.title}
                width='220 px'
                className="img-fluide"
                />
            </Col>
        )
    }
}