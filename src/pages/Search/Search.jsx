import React, { useState, useEffect } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import * as cityAPI from "../../utils/cityService";

export default function CitySearch() {
  const results = cityAPI.search();
  console.log(results)
  return (
    <Grid>
      <Grid.Column width={6}>
        <Search placeholder="Search for Cities..." />
      </Grid.Column>
    </Grid>
  );
}
