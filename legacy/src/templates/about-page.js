import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Col, Row } from "reactstrap";
import { Download } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section pt-2">
              <h1
                className="title is-size-3 has-text-weight-bold is-bold-light"
                style={{ fontSize: "2.5em", textAlign: "center" }}
              >
                <u>{title}</u>
              </h1>
              <div className="pt-3">
                <Row>
                  <Col sm="12" md="4">
                    <div style={{ margin: "auto", width: "60%" }}>
                      <img src="/img/logoCodecell.jpg" alt="logo" />
                    </div>
                  </Col>
                  <Col sm="12" md="8">
                    <div className="alignmentAbout">
                      <PageContent className="content" content={content} />
                    </div>
                  </Col>
                </Row>
                <Row className=" mt-3">
                  <Col sm="12" md="8">
                    <p className="alignmentAbout">
                      <p>
                        Interested in tech? Have a knack for writing? Want your
                        voice to be heard? We'd like to to see what you have in
                        store for us.
                      </p>{" "}
                      <p>
                        {" "}
                        Submit your articles here to blogs.kjscecodecell.com and
                        stand a chance for your blog to be featured on our
                        website! Every month CodeCell will be selecting the best
                        submissions and publishing them on this website. Hit the
                        "Submit" button to get started.
                      </p>
                    </p>
                  </Col>
                  <Col sm="4">
                    <a
                      href="https://forms.gle/2U6zvUJQ4gthuGGu5"
                      className="m-auto pb-4"
                    >
                      <div className="btn btn-lg btn-primary">
                        {" "}
                        Submit your blog Here <Download />{" "}
                      </div>
                    </a>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
