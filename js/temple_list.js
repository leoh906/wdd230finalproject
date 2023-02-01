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
            let mainHeading = document.getElementById('temple_body')
            let container = document.createElement('div')
            mainHeading.appendChild(container)
            container.setAttribute('id','temples_container')
            
            let templeHeader = document.createElement('h2')
            let templeImage =document.createElement('img')
            let addressHeader = document.createElement('h3')
            let contactHeader = document.createElement('h3')
            let servicesHeader = document.createElement('h3')
            let servicesBox = document.createElement('div')
            let addressText = document.createElement('p')
            let contactText = document.createElement('p')
            let servicesTable = document.createElement('table')
            let servicesTableHeader = document.createElement('tr')
            let servicesTableContent = document.createElement('tr')
            let serviceH1 = document.createElement('th')
            let serviceH2 = document.createElement('th')
            let serviceH3 = document.createElement('th')
            let clothingBoolean = document.createElement('td')
            let cafeteriaBoolean = document.createElement('td')
            let housingBoolean = document.createElement('td')

         
    
            container.appendChild(templeHeader)
            templeHeader.innerHTML = element.name
            container.appendChild(templeImage)
            templeImage.setAttribute('src',element.picture)
            templeImage.setAttribute('alt',element.name)
            container.appendChild(addressHeader)
            container.appendChild(addressText)
            container.appendChild(contactHeader)
            container.appendChild(contactText)
            container.appendChild(servicesHeader)

            
            container.appendChild(servicesBox)

            addressHeader.innerHTML = "Address"
            addressText.innerHTML = element.address;
            contactText.innerHTML = element.telephone;

            contactHeader.innerHTML = "Contact"
            servicesHeader.innerHTML = "Services"
            servicesBox.appendChild(servicesTable)
            servicesTable.appendChild(servicesTableHeader)
            servicesTable.appendChild(servicesTableContent)
            servicesTableHeader.appendChild(serviceH1)
            servicesTableHeader.appendChild(serviceH2)
            servicesTableHeader.appendChild(serviceH3)
            servicesTableContent.appendChild(clothingBoolean)
            servicesTableContent.appendChild(cafeteriaBoolean)
            servicesTableContent.appendChild(housingBoolean)

            serviceH1.innerHTML = "Clothing Rental"
            serviceH2.innerHTML = "Cafeteria"
            serviceH3.innerHTML = "Patron Housing"
            clothingBoolean.innerHTML = element.services.clothing_rental
            cafeteriaBoolean.innerHTML = element.services.cafeteria
            housingBoolean.innerHTML = element.services.patron_housing
        

            






        })

      






    }


}

getTemples(jsonURL)




