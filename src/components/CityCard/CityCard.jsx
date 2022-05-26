import React from "react";
import { Card } from "semantic-ui-react";
export default function CityCard({ city }) {
  let region = 'Region';
  city.countryCode == "US" ? region = "State" : region = region;
  city.countryCode == "CA" ? region = "Province" : region = region;
  city.countryCode == "JP" ? region = "Prefecture" : region = region;
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
