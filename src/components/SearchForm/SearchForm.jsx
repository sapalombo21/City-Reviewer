import React, { useState } from "react";
import { Input, Grid, Header, Segment, Form, Button } from "semantic-ui-react";

export default function SearchForm(props) {
  const [query, setQuery] = useState("");
  

  // pass in handleSubmit from Search page to then call the API service
  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(query);
    setQuery("");
  }

  function handleChange(e) {
    const tempQuery = e.target.value;
    setQuery(tempQuery);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="query">Search for city:</label>
      <Input value={query} onChange={handleChange}/>
      <Button type="submit" value="Find city">Find City</Button>
    </Form>
  );
}
