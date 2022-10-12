import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {GetByName} from "../actions"
import styled from "../estilos/search.module.css"
import avion from "./imagenes/avion.png"

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("")


    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(GetByName(name))
    }

  return (
    <div className={styled.padre}>

      <div className={styled.container_search}>

        <input type="text" placeholder='Search' onChange={handleInputChange} className={styled.input}/>
        <button type='submit' onClick={handleSubmit} className={styled.btn}>
            <img src={avion} className={styled.avion} alt="" />
        </button>
        </div>

    </div>
  )
}
