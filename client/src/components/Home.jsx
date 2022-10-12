import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCountries, GetActivity , ByActivity, ByContinent, ByOrder, ByPopulation} from "../actions";
import {Link} from "react-router-dom"
import Card from "./Card"
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import styled from "../estilos/home.module.css"


export default function Home (){
    const dispatch = useDispatch()
    //allcountries esta vacio 
    const allCountries = useSelector((state) => state.countries)
    const allActivities = useSelector((state) => state.activities)
    const [orden , setOrden] = useState("")

    //variables paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [countryPerPage, setCountryPerPage] = useState(9)
    const indexForLastCountry = currentPage * countryPerPage;
    const indexforFirstCountry = indexForLastCountry - countryPerPage;
    const currentCountry = allCountries.slice(indexforFirstCountry, indexForLastCountry)
    
    const paginado = (pageNum) =>{
        setCurrentPage(pageNum)
    }


    //cuando el componente se monta llama a getcountries y 
    //ahi allcountries de no tener nada pasa a tener a los paises
    useEffect(()=>{
        dispatch(GetCountries())
    },[dispatch])


   

    useEffect(()=>{
        dispatch(GetActivity())
    },[dispatch])

    function handleFilterActivity(e){
        e.preventDefault();
        dispatch(ByActivity(e.target.value))
    }

    function handleFilterContinent(e){
        e.preventDefault();
        dispatch(ByContinent(e.target.value))

    }

    function handleFilterOrder(e){
        e.preventDefault();
        dispatch(ByOrder(e.target.value))
        setOrden(e.target.value)
        setCurrentPage(1)

    }

    function handleFilterpopu(e){
        e.preventDefault();
        dispatch(ByPopulation(e.target.value))
        setOrden(e.target.value)
        setCurrentPage(1)

    }



    function handleClickCountries(e){
        e.preventDefault()
        dispatch(GetCountries())
        
    } 


  
     
    return(
        <div className={styled.padre_home}>




                <SearchBar></SearchBar>

                <div className={styled.padre_botones}>
                    <div className={styled.padre_create}>
                    <Link to="/activity">
                        <button className={styled.btn_create}>Create your activity</button>
                    </Link>
                
                    </div>

                    <div className={styled.padre_recargar}>
                     <button onClick={e=>{handleClickCountries(e)}} className={styled.btn_recargar}>
                     Reload countries
                    </button> 
                    </div>

                
            </div>
                

            <div className={styled.padre_filtros}>

                <div>
                    {/* filtrado de poblacion */}
                    <select onChange={handleFilterpopu} className={styled.select}>
                        <option value="Max" key="Max"> Max population </option> 
                        <option value="Min" key="Min"> Min population </option> 
                    </select>
                </div>

                <div>
                    {/* filtrado alfabeticamente */}
                    <select onChange={handleFilterOrder}  className={styled.select}>
                        <option >Alphabetically</option>
                        <option value="AtoZ" key="AtoZ"> A - Z </option> 
                        <option value="ZtoA" key="ZtoA"> Z - A </option> 
                    </select>
                </div>

                <div>
                    {/* filtrado por continente  */}
                    <select onChange={handleFilterContinent}  className={styled.select}>
                        <option value="All"> All Continents </option> 
                        <option value="Africa" key="Africa"> Africa </option> 
                        <option value="Antarctica" key=" Antarctica">Antarctica</option> 
                        <option value="Asia" key="Asia">Asia</option> 
                        <option value="Europe" key="Europe">Europe</option> 
                        <option value="North America" key="North America">North America</option> 
                        <option value="Oceania" key="Oceania">Oceania</option> 
                        <option value="South America" key="South America">South America</option> 
                    </select>
                </div>

              <div>
                    <select  onChange= {handleFilterActivity}  className={styled.select}>

                        <option value="All" key ="All"> All Activities</option>
                        {
                           allActivities.map(e => (
                            <option value={e} key={e}>{e}</option>
                        ))}

                    </select>
                </div>  
            </div>
            



             <div className={styled.countries_div}>
                {
                   currentCountry.map(e=>{
                       return(
                        <Fragment>
                        <Link to={`/home/${e.id}`} className={styled.link}>
                        <Card img={e.img} name={e.name} continente={e.continente} />
                        </Link>
                        </Fragment>
                        ) 
                    })
                }
            </div>
           <div className={styled.divpag}>
           <Paginado
               countryPerPage={countryPerPage}
                 allCountries={allCountries.length}
                 paginado={paginado}
                 />
            </div>

        </div>
    )

}