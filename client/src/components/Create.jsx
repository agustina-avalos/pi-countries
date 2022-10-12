import React , {useEffect,useState} from 'react'
import {Link, Navigation,useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { GetCountries, GetActivity, PostActivity,  } from '../actions'
import style from "../estilos/create.module.css"



function validate(input) {
    let errors = {}
    if(input.name===""){
        errors.name= "Obligatory field name"
    }
    if(input.difficulty <=0 || input.difficulty>=6){
        errors.difficulty= "Obligatory field from 1 to 5"
    }
    if(input.time<=0 || input.time>=61){
        errors.time= "required field from 1 to 60"
    }
    return errors
}

export default function Create() {
     const dispatch = useDispatch(); 
     const countries = useSelector((state)=> state.countries) 
     const navigation = useNavigate()
     const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        name : "",
        difficulty:"",
        time:"",
        season:'',
        idCountry:[]
    })
    
    useEffect(()=>{
        dispatch(GetCountries())
    }, [dispatch])
 
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }

   const handleCoutry= (id)=>{
        setInput({
            ...input,
            idCountry: [...input.idCountry, id.target.value]
        }) 
   }

   const handleSeason=(e)=>{
       setInput({
           ...input,
           season: e.target.value
       })
   }

   const handleDifficulty=(e)=>{
        setInput({
            ...input,
            difficulty: e.target.value
        })
        setErrors(validate({
            ...input,
            difficulty: e.target.value
        }))
    }   

    const handleTime=(e)=>{
        setInput({
            ...input,
            time: e.target.value
        })
        setErrors(validate({
            ...input,
            time: e.target.value
        }))
    }


    function handleDelete(e) {
        setInput({
            ...input,
            idCountry: input.idCountry.filter(c => c !== e)
        })
    }


    const handleSubmit= (e)=>{
        e.preventDefault()
        if((!input.name) || (input.difficulty<=0 || input.difficulty>=6) || (input.time <= 0 || input.time>=61)){
            alert("incomplete required field")
        }else{
        dispatch(PostActivity(input))
        alert("Activity created successfully")
        setInput({
        name : '',
        difficulty:"",
        time:"",
        season:'',
        idCountry:[]
        })

        navigation("/home")
        }
    }

    const season = ['Winter', 'Spring', 'Autumn', 'Summer'];

  return (
    <div className={style.padre}>

         <Link to="/home">
            <button className={style.btn}>Back</button>
        </Link> 

        <h1 className={style.title}>Create your tourist activity!</h1>


        <form onSubmit={handleSubmit} className={style.padreform}>

            <div className={style.padrename}>
                <label>Name of the activity</label>
                <input type="text" value={input.name} name="name" onChange={(e)=>handleChange(e)}/> 
                {
                        errors.name && (
                            <p className={style.error}>{errors.name}</p>
                        )
                    }
            </div> 



             <div className={style.padrediffi}>
                <label>Difficulty</label>
                <input type="number" value={input.difficulty} name="difficulty" onChange={handleDifficulty} /> 
                {
                        errors.difficulty && (
                            <p className={style.error}>{errors.difficulty}</p>
                        )
                    }
            </div> 



            <div className={style.padretime}>
                <label>Duration</label>
                <input type="number" value={input.time} name="time" onChange={handleTime}/> 
                {
                        errors.time && (
                            <p className={style.error}>{errors.time}</p>
                        )
                    }
            </div> 




             <div>
                <label>Season</label>
                <select onChange={handleSeason}>
                <option value="" hidden>Select Season</option>
                    {
                        season.map(e=> (
                            <option value={e} name="season" > {e}  </option>
                        ))
                    }
                </select>
            </div>



            <div>
                <label>Countries</label>
                <select onChange={handleCoutry}>
                    <option value="" hidden>Select country</option>
                    {
                        countries.map(c=> (
                            <option value={c.id} name="countries" key={c.id}> {c.name}  </option>
                        ))
                    }
                </select>
            </div>

             <div className={style.iditem}>
                <ul>
                    <li>{input.idCountry.map(i =>
                        <div>
                            {i}
                            <button onClick={() => handleDelete(i)} type="button" className={style.btneliminar}>X</button>
                        </div>)}
                    </li>
                </ul>
            </div> 

            <div>
                {

                    ((input.name!="") && (input.difficulty>0 && input.difficulty<6) && (input.time > 0 && input.time<61))?
                    <button type='submit' className={style.btncreate}> Create </button>:
                    <button type='submit' className={style.btncreate}> Incomplete required field </button>
                }
            </div>
        </form>
    </div>
  )
}
