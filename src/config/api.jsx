
// Aqui está a Api

export async function Api(city) {
    const APIKEY = '94cb612f91a5891e05f0436f70dc7de0';

    try{

        //recuperando os dados brutos da Api
        // fetch - recupera dados de uma Api é um arquivo do javascript
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}&lang=pt_br`)
        
        //convertendo os dados da Api para objeto tipo Json.
        const result = await response.json()

        return result
    }

    catch(error){
        console.error(error);

    
    }
}