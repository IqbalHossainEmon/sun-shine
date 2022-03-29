import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div className="not-found">
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <div className="text-center">
        <h1 className="dance-font text-white">OMG! ERROR 404</h1>
        <h3 className="dance-font text-white text">
          The requested page cannot be found!
        </h3>
        <Button variant="outline-primary">
          <Link className="text-white text-decoration-none" to="/home">
            <FontAwesomeIcon icon={faArrowLeft} />
            Go Back
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
