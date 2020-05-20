import React from 'react';
import Col from 'react-bootstrap/Col';

export class TvShow extends React.Component{
    constructor(props){
        super(props);

        this.state ={hovered: false}; 
    }

    render(){
        return(
            <Col className="img-fluide" xs lg="2">
                <img 
                src={this.props.src}
                alt={this.props.alt}
                title={this.props.title}
                onMouseOver = {() => this.setState({hovered:true})}
                onMouseOut = {() => this.setState({hovered:false})}
                style={{
                    transform: `${
                        this.state.hovered ? 'scale(1.5,1.5)' : 'scale(1,1)'
                    }`
                }}  
                width='220 px'
                className="img-fluide"
                />
            </Col>
        )
    }
}