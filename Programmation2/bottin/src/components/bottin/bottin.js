import React from 'react';
import Row from 'react-bootstrap/Row';

import Vader from "../../img/Vader.jpg";
import {Usages} from "../usages/usages";


const tabUsages = [
  {
    src: Vader,
    alt: "Vador",
    title: "Vador"
  },
  {
    src: Vader,
    alt: "Vador",
    title: "Vador"
  },
  {
    src: Vader,
    alt: "Vador",
    title: "Vador"
  },
  {
    src: Vader,
    alt: "Vador",
    title: "Vador"
  },
  {
    src: Vader,
    alt: "Vador",
    title: "Vador"
  },
  {
    src: Vader,
    alt: "Vador",
    title: "Vador"
  },

];

export class Bottin extends React.Component {
    render() {
      return (
        <>
          <Row>{this.AfficherUsages()}</Row>
        </>
      );
    }

    AfficherUsages(){
      return tabUsages.map((element, i) => (
        <Usages 
          key={"usages"+i}
          src={element.src}
          alt={element.alt}
          title={element.title}
        ></Usages>
      ));
    }
  }