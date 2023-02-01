let jsonURL = 'https://leoh906.github.io/wdd230finalproject/json_folder/temples.json'

async function getTemples(jsonURL) {

    const responseItem = await fetch(jsonURL);
    console.log(responseItem)


    if(responseItem.ok) {
        const jsResponse = await responseItem.json()
        console.log(jsResponse)
        const templeDirectory = jsResponse['temples']
        // To get the values of the object, use the format: templeDirectory._

        templeDirectory.forEach(element => {
            let container = document.createElement('div')
            let templeImage =document.createElement('img')
            let firstText = document.createElement('p')
            let secondText = document.createElement('p')
            let thirdText = document.createElement('p')
            let firstButton = document.createElement('button')
            let secondButton = document.createElement('button')
            let thirdButton = document.createElement('button')
    
            container.setAttribute('id',container)
            container.appendChild(templeImage)
            templeImage.setAttribute('src',element.picture)




        })

      






    }


}

getTemples(jsonURL)




