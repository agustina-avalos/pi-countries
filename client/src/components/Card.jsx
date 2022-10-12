import React from "react";
import sty from "../estilos/card.module.css"


export default function Card({img, name, continente}){
    
    return(
       
        <div className={sty.card}>
            <h2 className={sty.card_name}>{name}</h2>
            <img className={sty.card_img} src={img} alt="not found"/>
            <h3 className={sty.card_cont}>{continente} </h3>
        </div>
        
    )

}