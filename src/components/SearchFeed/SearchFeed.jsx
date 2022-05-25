import React from "react"
import {List, Button} from "semantic-ui-react"
import * as cityAPI from "../../utils/cityService"

export default function SearchFeed({cities}) {
    async function create(city) {
        console.log(city, "this is data being passed to button")
        const formData = new FormData();
        for (let fieldName in city) {
            console.log(fieldName, "field name in city")
            console.log(city[fieldName], "data for field ", fieldName)
            formData.append(fieldName, city[fieldName]);
        }
        for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
        cityAPI.create(formData)
    }
    let region = '';
    const cityMap = cities.map((city, idx) => {
        city.countryCode == "US" ? region = "State" : region = "Region"
        return (
            <List.Item key={idx} >
                <List.Header>{city.name}</List.Header>
                Pop: {city.population} - {city.country} - {region}: {city.region}  <Button onClick={()=>create(city)}>Create</Button>
            </List.Item>
        )
    })

    return (
        <List>
            {cityMap}
        </List>
    )
}