import React, { useState } from "react";

import { Form, Button, Grid, Segment } from "semantic-ui-react";

export default function ReviewForm(props) {
  const [state, setState] = useState({ review: "" });

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleAddReview(state);
  }

  return (
    <Grid textAlign="center" style={{ height: "25vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Input
              className="form-control"
              name="review"
              value={state.review}
              placeholder="Leave a review for this city"
              onChange={handleChange}
              required
            />
            <Button type="submit" className="btn">
              Add review
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
