import React, { useState, useEffect } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import * as cityAPI from "../../utils/cityService";
import SearchFeed from "../../components/SearchFeed/SearchFeed";
import SearchForm from "../../components/SearchForm/SearchForm";
import PageHeader from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader"

export default function CitySearch({ user, handleLogout }) {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  async function doSearch() {
    try {
      setLoading(true);
      const results = await cityAPI.search(query);
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
  }, [query]); // hopefully will show the data immediatly

  function handleSubmit(q) {
    console.log("submit pressed");
    setQuery(q);
    // doSearch();
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <PageHeader user={user} handleLogout={handleLogout} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1} centered verticalAlign="middle">
        <Grid.Column width={12}>
          <SearchForm handleSubmit={handleSubmit} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1} centered verticalAlign="middle">
        <Grid.Column width={12}>
          <SearchFeed cities={search} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
