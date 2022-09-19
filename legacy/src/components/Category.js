import React from "react";
import { Link } from "gatsby";
import { CardImg } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/cards.sass";

export default ({ title, img }) => {
  return (
    <div className="category">
      <Link to="/">
        <div className="overlay">{title}</div>
      </Link>
      <CardImg
        width="100%"
        src={img}
        alt="Card image cap"
        className="categoryImg"
      ></CardImg>
    </div>
  );
};
