import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as cityAPI from "../../utils/cityService";
import CityCard from "../../components/CityCard/CityCard"
import ReviewForm from "../../components/ReviewForm/ReviewForm"
import * as reviewAPI from "../../utils/reviewsService"

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
  }, []);

  async function handleAddReview(review) {
    try{
        setLoading(true)
        const data = await reviewAPI.create(city._id, review);
    } catch (err) {
        console.log(err.message)
        setError(err.message)
    }
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <CityCard city={city} />
      <ReviewForm handleAddReview={handleAddReview}/>
    </>
  );
}
