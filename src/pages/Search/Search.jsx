import React, { useState, useEffect } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import * as cityAPI from "../../utils/cityService";
import SearchFeed from "../../components/SearchFeed/SearchFeed";

export default function CitySearch() {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  async function doSearch() {
    try {
      const results = await cityAPI.search();
      console.log(results, "here are the results");
      setLoading(false);
      setSearch(results.data);
    } catch (err) {
      console.log(err.message, "front end error");
      setError(err.message);
    }
  }
  useEffect(() => {
    doSearch();
  }, []);
  if (error) {
    return <h1>{error}</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Grid>
      <Grid.Column width={6}>
        <Search placeholder="Search for Cities..." />
        <SearchFeed cities={search} />
      </Grid.Column>
    </Grid>
  );
}
