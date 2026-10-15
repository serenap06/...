import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./styles.css";

const BlogAuthor = ({author}) => {
if(!author) return null

  return (
    <Row>
      <Col xs={"auto"} className="pe-0">
        <Image className="blog-author" src={author.avatar} roundedCircle />
      </Col>
      <Col>
        <div>di</div>
        <h6>{author.name}</h6>
      </Col>
    </Row>
  );
};

export default BlogAuthor;
