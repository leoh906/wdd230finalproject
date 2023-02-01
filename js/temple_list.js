let jsonURL = 'https://leoh906.github.io/wdd230finalproject/json_folder/temples.json'

async function getTemples(jsonURL) {

    const response = await fetch(jsonURL);
    console.log(response);

    if(response.ok) {
        const jsResponse = await response.json()
        console.log(jsResponse)
    }


}

getTemples()




