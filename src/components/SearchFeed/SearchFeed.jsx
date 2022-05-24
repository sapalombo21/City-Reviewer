import React from "react"
import {List, Button} from "semantic-ui-react"

export default function SearchFeed({cities}) {
    let region = '';
    const cityMap = cities.map((city, idx) => {
        city.countryCode == "US" ? region = "State" : region = "Region"
        return (
            <List.Item key={idx} >
                <List.Header>{city.name}</List.Header>
                Pop: {city.population} - {city.country} - {region}: {city.region}  <Button>Create</Button>
            </List.Item>
        )
    })

    return (
        <List>
            {cityMap}
        </List>
    )
}