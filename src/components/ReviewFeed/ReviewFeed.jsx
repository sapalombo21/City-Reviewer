import React from "react";
import { Card } from "semantic-ui-react";

export default function ReviewFeed({ reviews }) {
  const cards = reviews.map((review, idx) => {
    return (
      <Card key={review._id} raised>
        <Card.Content textAlign="center">
          <Card.Header>{review.username}</Card.Header>
        </Card.Content>
        <Card.Content textAlign="center">{review.review}</Card.Content>
      </Card>
    );
  });
  if (reviews)
    return (
      <Card.Group itemsPerRow={1} stackable>
        {cards}
      </Card.Group>
    );
  return <h1>No reviews yet</h1>;
}
