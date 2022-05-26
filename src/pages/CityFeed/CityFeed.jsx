import React, { useState, useEffect } from "react";
import * as cityAPI from "../../utils/cityService";
import CityCard from "../../components/CityCard/CityCard";
import { Card, Grid } from "semantic-ui-react";
import PageHeader from "../../components/Header/Header";

export default function CityFeed({ user, handleLogout }) {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState("");
  async function getCities() {
    try {
      const data = await cityAPI.getAll();
      console.log(data, "these are the currently created cities");
      setCities([...data.cities]);
    } catch (err) {
      console.log(err.message, " this is the error");
      setError(err.message);
    }
  }

  useEffect(() => {
    getCities();
    console.log(cities, "this is the cities");
  }, []);
  const cityMap = cities.map((city, idx) => {
    return <CityCard key={idx} city={city} feed={true}/>;
  });
  if (cities) {
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <PageHeader handleLogout={handleLogout} user={user} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{maxWidth: 750}}>
            <Card.Group itemsPerRow={4} stackable>
              {cityMap}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  return <h1>No cities found</h1>;
}
