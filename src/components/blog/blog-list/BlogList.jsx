import React, { useContext } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";
import { BlogPostContext } from "../../../contexts/BlogPostContext";

const BlogList = () => {
  const { blogPostData, isLoading, error } = useContext(BlogPostContext);

  return (
    <Row>
      {isLoading && (
        <div className="text-center my-5">
          <Spinner animation="grow" variant="success"></Spinner>
          <p className="mt-2">Caricamento in corso...</p>
        </div>
      )}
      {error && !isLoading && <Alert variant="danger">{error}</Alert>}
      {blogPostData.map((post) => (
        <Col
          key={post._id}
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
