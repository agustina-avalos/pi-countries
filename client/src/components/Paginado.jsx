import React from 'react'

import styled from "../estilos/paginado.module.css"


export default function Paginado({countryPerPage,allCountries, paginado}) {
    const pageNum = []
    for(let i =1; i<=Math.ceil(allCountries/countryPerPage); i++){
        pageNum.push(i)
    }

    return(
        <nav className={styled.nav}>
            <ul className={styled.paginado}>
                {
                    pageNum &&
                    pageNum.map(n =>(
                        <div className={styled.contenedor_paginado}>
                            <li className={styled.numpaginado} key={n}>
                                <a onClick={()=>paginado(n)}> {n} </a>
                            </li>
                        </div>
                    ))
                }
            </ul>
        </nav>
    )
}
