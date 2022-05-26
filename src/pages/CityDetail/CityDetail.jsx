import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as cityAPI from "../../utils/cityService";
import CityCard from "../../components/CityCard/CityCard";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import * as reviewAPI from "../../utils/reviewsService";
import ReviewFeed from "../../components/ReviewFeed/ReviewFeed";
import { Grid } from "semantic-ui-react";

export default function CityDetail(props) {
  const { geoDBId } = useParams();
  const [city, setCity] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  async function getCity() {
    try {
      const data = await cityAPI.detail(geoDBId);
      console.log(data, "city detail page.");
      setCity(data.city);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }
  useEffect(() => {
    getCity();
  }, [loading]);

  async function handleAddReview(review) {
    try {
      setLoading(true);
      const data = await reviewAPI.create(city._id, review);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <Grid divided='vertically' centered>
      <Grid.Row centered>
        <Grid.Column>
          <h1>This is the header</h1>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row verticalAlign="middle" centered columns={2}>
        <Grid.Column style={{maxWidth: 450}}>
            <CityCard city={city}/>
        </Grid.Column>
        <Grid.Column style={{maxWidth: 450}}>
          <ReviewForm handleAddReview={handleAddReview} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <ReviewFeed reviews={city.reviews} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
