const { Router } = require("express");
const {Country , Activity} = require ('../db');
const axios = require('axios');
const {Op} = require('sequelize');


const router = Router();

router.get('/', async(req,res) =>{
    const name = req.query.name;

    const countriesTotal = await Country.findAll({include: Activity})

    if(name){
        const nameCountry = await countriesTotal.filter(e=> e.name.toLowerCase().includes(name.toString().toLowerCase()));
        if(nameCountry.length){
            res.status(200).send(nameCountry)
        }else res.status(404).send("el pais no existe")

    }else{
        res.status(200).send(countriesTotal);
    }
  
})


router.get("/:id", async (req,res)=>{
     const {id} = req.params;
        let countryid 
    try{
    if(id.length > 1){
        countryid = await Country.findByPk(id, { include: Activity })
        countryid= {
            name: countryid.name,
            id: countryid.id,
            continente: countryid.continente,
            capital: countryid.capital,
            img:countryid.img,
            subregion:countryid.subregion,
            area: countryid.area,
            population: countryid.population,
            activities: countryid.activities.map((e) => {
                return {
                    id: e.id,
                    name: e.name,
                    difficulty: e.difficulty,
                    time: e.time,
                    season: e.season
                }
            })
        }
        res.status(200).send(countryid)
    }

    }catch(err){
        console.log(err)
    }
    
})

module.exports = router;