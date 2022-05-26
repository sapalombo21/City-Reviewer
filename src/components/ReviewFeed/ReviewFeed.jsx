import React from "react";
import { Card, Button, CardContent } from "semantic-ui-react";

export default function ReviewFeed({ reviews, user, handleDeleteReview }) {

  const cards = reviews.map((review, idx) => {
    return (
      <Card key={review._id} raised>
        <Card.Content textAlign="center">
          <Card.Header>{review.username}</Card.Header>
        </Card.Content>
        <Card.Content textAlign="center">{review.review}</Card.Content>
        { review.userId === user._id ? <Card.Content>
          <Button onClick={()=>handleDeleteReview(review._id)}>Delete</Button>
        </Card.Content>: null}
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
