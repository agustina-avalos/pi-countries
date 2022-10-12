const { Router } = require("express");
const {Country , Activity} = require ('../db');
const axios = require('axios');
const {Op} = require('sequelize');

const { route } = require("./getCountries");


const router = Router();

 router.post("/", async(req,res)=>{

    const {name, difficulty,time,season, idCountry} = req.body;


    const createActivity = await Activity.create({
        name,
        difficulty,
        time,
        season,
    })

    await createActivity.setCountries(idCountry)

        let activityWithCountry = await Activity.findOne({
            where: { name: name },
            attributes: {
                exclude: ['updatedAt', 'createdAt'],
            },
            include: {
                model: Country,
                through: {
                    attributes: []
                }
            }
        })
        res.status(200).send(activityWithCountry);

})

router.get("/", async(req,res)=>{
    const activities = await Activity.findAll({include:Country})
    const filterA = activities.map(e => e.name.toLowerCase())
    const total = filterA.filter((item, index) => {
        return filterA.indexOf(item) === index;
    })
    res.json(total)
});

module.exports = router;