import React, { Suspense } from 'react';
import Row from 'react-bootstrap/Row';
import {TvShow} from "../TvShow/TvShow";

const tabSuspense =[
    {
        src: require("../../img/Suspense/lesinvincibles.jpg"),
        alt: "Les invincibles",
        title: "Les invincibles"
    },
    {
        src: require("../../img/Suspense/19-2.jpg"),
        alt: "19-2",
        title: "19-2"
    },
    {
        src: require("../../img/Suspense/district31.jpg"),
        alt: "District31",
        title: "District31"
    },
    {
        src: require("../../img/Suspense/fugueuse.jpg"),
        alt: "Fugueuse",
        title: "Fugueuse"
    },
    {
        src: require("../../img/Suspense/serienoire.jpg"),
        alt: "Série Noire",
        title: "Série Noire"
    },
    {
        src: require("../../img/Suspense/unite9.jpg"),
        alt: "Unité 9",
        title: "Untié 9"
    },
]

const tabHumour =[
    {
        src: require("../../img/Humour/lanceEtCompte.jpg"),
        alt: "Lance Et Compte",
        title: "Lance Et Compte"
    },
    {
        src: require("../../img/Humour/lapetitevie.jpg"),
        alt: "La petite vie",
        title: "La petite vie"
    },
    {
        src: require("../../img/Humour/lesbeauxmalaises.jpg"),
        alt: "Les beaux malaises",
        title: "Les beaux malaises"
    },
    {
        src: require("../../img/Humour/lesbougon.jpg"),
        alt: "Les Bougon",
        title: "Les Bougon"
    },
    {
        src: require("../../img/Humour/lesboys.jpg"),
        alt: "Les boys",
        title: "Les boys"
    },
    {
        src: require("../../img/Humour/minuitlesoir.jpg"),
        alt: "Minuit le soir",
        title: "Minuit le soir"
    },
]

const tabAmericains =[
    {
        src: require("../../img/SeriesAmericaines/betterCallSaul.jpg"),
        alt: "Better call Saul",
        title: "Better call Saul"
    },
    {
        src: require("../../img/SeriesAmericaines/breakingbad.jpg"),
        alt: "Breaking Bad",
        title: "Breaking Bad"
    },
    {
        src: require("../../img/SeriesAmericaines/dexter.jpg"),
        alt: "Dexter",
        title: "Dexter"
    },
    {
        src: require("../../img/SeriesAmericaines/got.jpg"),
        alt: "Got",
        title: "Got"
    },
    {
        src: require("../../img/SeriesAmericaines/mandalorian.jpg"),
        alt: "Mandalorian",
        title: "Mandalorian"
    },
    {
        src: require("../../img/SeriesAmericaines/vikings.jpg"),
        alt: "Vikings",
        title: "Vikings"
    },
]

export class Categorie extends React.Component{
    render(){  
        return(
            <>
                <Row>
                    <h1>
                        {this.props.categorie}
                    </h1>
                </Row>
                <Row>
                    {this.AfficherCategorie()}
                </Row>
            </>
        )
    }
    AfficherCategorie(){
        if(this.props.categorie ==='Suspense'){
            return(
                tabSuspense.map((element,i)=><TvShow
                                                keys={"Suspense" + i}
                                                src={element.src} 
                                                alt={element.alt} 
                                                title={element.title} 
                                            ></TvShow>)
                ) 

        }
        else  if(this.props.categorie ==='Humour'){
            return(
                tabHumour.map((element,i)=><TvShow
                                                keys={"Humour" + i}
                                                src={element.src} 
                                                alt={element.alt} 
                                                title={element.title} 
                                            ></TvShow>)
                ) 

        }
        else  if(this.props.categorie ==='Séries américaines'){
            return(
                tabAmericains.map((element,i)=><TvShow
                                                keys={"Séries américaines" + i}
                                                src={element.src} 
                                                alt={element.alt} 
                                                title={element.title} 
                                            ></TvShow>)
                ) 

        }
        
    }
}

Categorie.defaultProps = {categorie: 'Suspense'};
