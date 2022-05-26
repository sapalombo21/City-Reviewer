import React from "react";
import { List, Button } from "semantic-ui-react";
import * as cityAPI from "../../utils/cityService";
import { useNavigate } from "react-router-dom";

export default function SearchFeed({ cities }) {
  const navigate = useNavigate();
  async function create(city) {
    console.log(city, "this is data being passed to button");
    city.geoDBId = city.id; // adds the id to the data being passed to be used later
    console.log(city);
    const data = await cityAPI.create(city);
    console.log(data);
    navigate(`/${city.id}`);
  }
  const cityMap = cities.map((city, idx) => {
    let region = "Region";
    city.countryCode == "US" ? (region = "State") : (region = region);
    city.countryCode == "CA" ? (region = "Province") : (region = region);
    city.countryCode == "JP" ? (region = "Prefecture") : (region = region);
    return (
      <List.Item key={idx}>
        <List.Header>{city.name}</List.Header>
        Pop: {city.population} - {city.country} - {region}: {city.region}{" "}
        <Button onClick={() => create(city)}>Create</Button>
      </List.Item>
    );
  });

  return <List>{cityMap}</List>;
}
