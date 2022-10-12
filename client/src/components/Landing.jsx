import React from "react";
import {Link} from "react-router-dom"
import styled from "../estilos/landing.module.css"

export default function LandingPage (){
    return (
        <div className={styled.landingpadre}>
            
             {/* <img className="imgfondo" src="" alt="" />   */}
            <h1 className={styled.title}>Welcome to <br></br> Henry Countries </h1>
            <Link to= "/home"> 
                <button className={styled.bttn} >Start!</button>
            </Link>

        </div>
    ) 
}

  