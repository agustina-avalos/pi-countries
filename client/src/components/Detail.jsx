import React ,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {GetCountriesDetail} from "../actions/index"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import styled from "../estilos/detail.module.css"


export default function Detail(props) {
    const dispatch = useDispatch();
    const {id} = useParams()
    const mydetail = useSelector((state)=> state.countryDetail)

    useEffect(()=>{
        dispatch(GetCountriesDetail(id))

    },[dispatch])
    

  return (
    <div className={styled.padre}>


        <div className={styled.padrename}>
            <h1>{mydetail.name}</h1>
        </div>

        <div className={styled.padreimg}>
            <img src={mydetail.img} alt="" />
        </div>

        <div className={styled.padreinfo}>

        <div className={styled.padrecon}>
            <h3>Continent: {mydetail.continente}</h3>
        </div>

        <div pclassName={styled.padrecapital}>
            <h3>Capital: {mydetail.capital}</h3>
        </div>

        <div className={styled.padresubregion}>
            <h4>Subregion: {mydetail.subregion}</h4>
        </div>

        <div className={styled.padrearea}>
            <h4>Area: {mydetail.area}</h4>
        </div>

        <div className={styled.padrepopulation}> 
            <h4>Population: {mydetail.population}</h4>
        </div>

        </div>

        


       <div className={styled.padreactivities}>
            <h3>Activities</h3>
            {
             mydetail.activities?.length > 0 ? mydetail.activities?.map(e => {
                return (
                    <div key={e.id}>
                        <p>Name: {e.name}</p>
                        <p>Difficulty: {e.difficulty}</p>
                        <p>Duration: {e.time}</p>
                        <p>Season: {e.season}</p>
                        <hr></hr>
                    </div>
                )
            })
                : <p>Without activities</p>}

            
        </div> 


    </div>
   
  )
}
