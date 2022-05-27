import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as cityAPI from "../../utils/cityService";
import Loader from "../../components/Loader/Loader";
import SearchFeed from "../../components/SearchFeed/SearchFeed";
import {Grid} from "semantic-ui-react"
import PageHeader from "../../components/Header/Header"

export default function CityNearby({user, handleLogout}) {
  const [ cities, setCities ] = useState([]);
  const [ error, setError ]= useState("");
  const  [loading, setLoading]  = useState(true);
  const {geoDBId}= useParams();

  async function getNearby() {
    try {
      console.log("GET NEARBY CALLED");
      setLoading(true);
      console.log(geoDBId);
      const cities = await cityAPI.getNearby(geoDBId);
      console.log(cities);
      setLoading(false);
      setCities(cities.data);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  }
  useEffect(() => {
    getNearby();
  }, []);
  if (loading) return <Loader />;
  if (error) return <h1>{error}</h1>;
  return (
    <Grid centered>
    <Grid.Row>
      <Grid.Column>
        <PageHeader user={user} handleLogout={handleLogout} />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={1} centered verticalAlign="middle">
      <Grid.Column width={12}>
        <SearchFeed cities={cities} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  )
}
