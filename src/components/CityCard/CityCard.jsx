import React from "react";
import { Card } from "semantic-ui-react";
export default function CityCard({ city }) {
  let region = '';
  city.countryCode == "US" ? region = "State" : region = "Region";
  return (
    <Card key={city.geoDBId} raised>
      <Card.Content textAlign="center">
        <Card.Header>{city.name}</Card.Header>
      </Card.Content>
      <Card.Content textAlign="center">
          <Card.Description>
              Population: {city.population}
          </Card.Description>
          <Card.Description>Country: {city.country}</Card.Description>
          <Card.Description>{region}: {city.region}</Card.Description>
      </Card.Content>
    </Card>
    
  );
}
