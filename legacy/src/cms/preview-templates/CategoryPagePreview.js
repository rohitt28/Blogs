import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import { Container } from "reactstrap";
// import PropTypes from 'prop-types'

const CategoryPagePreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"]);
  return (
    // <CategoryPageTemplate
    //   content={widgetFor('body')}
    //   description={entry.getIn(['data', 'description'])}
    //   tags={tags && tags.toJS()}
    //   title={entry.getIn(['data', 'title'])}
    // />
    <Layout>
      <section className="section">
        <Container className="content mt-5">
          <h1>Categories</h1>
          <div className="category-list mt-4">
            {/* {tagsdata.tagslist.map((tag) => (
              <Link
                to={"/categories/" + kebabCase(tag.name)}
                style={{
                  backgroundImage: `url('${tag.image}')`,
                }}
                className="category-list-category"
              >
                <h1>{entry.getIn(["data", "tagslist"])}</h1>
                </Link>
            ))} */}
          </div>
          <h1>{entry.getIn(["data", "tagslist"])}</h1>
        </Container>
      </section>
    </Layout>
  );
};

// CategoryPagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   widgetFor: PropTypes.func,
// }

export default CategoryPagePreview;
