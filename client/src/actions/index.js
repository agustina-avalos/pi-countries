import axios from "axios"


export function GetCountries(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/countries");
        return dispatch({
            type:"GET_COUNTRIES",
            payload: json.data
        })
    }
}


export function GetCountriesDetail(id){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/countries/${id}`);
        return dispatch({
            type:"GET_DETAIL",
            payload: json.data
        })
    }
}


export function GetByName(name){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/countries?name=${name}`);
        return dispatch({
            type:"GET_BYNAME",
            payload: json.data
        })
    }
}


export function GetActivity(){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/activities`);
        return dispatch({
            type:"GET_ACTIVITY",
            payload: json.data
        })
    }
}


export function PostActivity(payload){
    return async function(dispatch){
        var json = await axios.post(`http://localhost:3001/activities`,payload);
        return json
    }
};



export function ByOrder(payload){
    return{
        type:"BY_ORDER",
        payload
    };
};


export function ByContinent(payload){
    return{
        type:"BY_CONTINENT",
        payload
    };
};


export function ByPopulation(payload){
    return{
        type:"BY_POPULATION",
        payload
    };
};


export function ByActivity(payload){
    return{
        type:"BY_ACTIVITY",
        payload
    };
};