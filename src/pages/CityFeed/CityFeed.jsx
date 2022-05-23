import React, { useState, useEffect } from "react";
import * as cityAPI from "../../utils/cityService";

export default function CityFeed() {
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
  if (cities) {
    return <h1>This is the city feed</h1>;
  }
  return <h1>No cities found</h1>
}
