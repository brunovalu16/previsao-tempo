
// Aqui está a Api

export async function Api(city) {
    const APIKEY = 'e3d21089b3522f2c56a78c95678b68ee';

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