import React from "react"
import {List} from "semantic-ui-react"

export default function SearchFeed({cities}) {
    let region = '';
    const cityMap = cities.map((city, idx) => {
        city.countryCode == "US" ? region = "State" : region = "Region"
        return (
            <List.Item >
                <List.Header>{city.name}</List.Header>
                Pop: {city.population} - {city.country} - {region}: {city.region}
            </List.Item>
        )
    })

    return (
        <List>
            {cityMap}
        </List>
    )
}