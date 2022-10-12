const initialState = {
    countries: [],
    copycountries:[],
    activities : [],
    countryDetail :[]

}

function rootReducer(state= initialState,action){
    switch(action.type){
        case "GET_COUNTRIES":
        return{
            ...state,
            countries: action.payload,
            copycountries : action.payload
        }
        case "GET_ACTIVITY":
            return{
                ...state,
                activities: action.payload,
            }

        case "GET_BYNAME":
            return{
                ...state,
                countries:action.payload
            }


        case "POST_ACTIVITY":
            return{
                ...state
            }

        case "BY_ACTIVITY":
            const allCountry = state.copycountries;
            const filterActivity = action.payload === "All" ? allCountry :
            allCountry.filter(f => f.activities.find((el)=>el.name.toLowerCase() === action.payload))
            return{
                ...state,
                countries: filterActivity
            }

        case "BY_CONTINENT":
            const allcontinent = state.copycountries;
            const filterContinent = action.payload==="All" ? allcontinent : 
            allcontinent.filter(e=> e.continente === action.payload);
            return{
                ...state,
                countries : filterContinent
            }
        case "BY_ORDER":
            let OrderCountries = action.payload === "AtoZ" ? 
            state.countries.sort(function(a,b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1;
                }
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return -1
                }
                return 0;
            }):
            state.countries.sort(function (a, b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return -1;
                }
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return 1
                }
                return 0;

            })
            return{
                ...state,
                countries : OrderCountries
            }

        case "BY_POPULATION":
            const filterBYpopu = action.payload === "Max" ? 
            state.countries.sort(function(a,b){
                if(a.population  > b.population){
                    return 1

                }
                if(a.population  < b.population){
                    return -1
                }
                return 0;

            }):
            state.countries.sort(function(a,b){
                if(a.population  > b.population){
                    return -1

                }
                if(a.population  < b.population){
                    return 1
                }
                return 0;
            })
            return{
            ...state,
            countries:filterBYpopu

        }
        case "GET_DETAIL":
            return{
                ...state,
                countryDetail: action.payload
            }


        default: {
            return state;
        }
    }

}


export default rootReducer;