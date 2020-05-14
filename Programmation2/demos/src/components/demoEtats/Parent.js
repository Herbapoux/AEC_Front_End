import React from 'react'; 
import { Enfant } from './Enfant'; 

 
 

export class Parent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { name: 'Patate' }; 
    this.changeName = this.changeName.bind(this);
  } 

  changeName(newName) { 
    this.setState({ name: newName }); 
  } 

  render() { 
    return <Enfant name={this.state.name} onChange={this.changeName}/>
  } 
} 