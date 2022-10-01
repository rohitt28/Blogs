import React from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

import tagsdata from "../../admin-config/tagslist.yml";
import { kebabCase } from "lodash";
import { Link, graphql } from "gatsby";

import "../../sass/category.sass";

const TagsPage = ({ data }) => {
  return (
    <Layout>
      <section className="section">
        <Helmet title={`Categories | ${data.site.siteMetadata.title}`} />
        <div className="category-list-container mt-5">
          <h1>Categories</h1>
          <div className="category-list mt-4">
            {tagsdata.tagslist.map((tag) => (
              <Link
                to={"/categories/" + kebabCase(tag.name)}
                style={{
                  backgroundImage: `url('${tag.image}')`,
                }}
                className="category-list-category"
              >
                <h1 className="category-heading">{tag.name}</h1>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TagsPage;

export const categoriesListQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

// const TagsPage = ({
//   data: {
//     allMarkdownRemark: { group },
//     site: {
//       siteMetadata: { title },
//     },
//   },
// }) => (
//   <Layout>
//     <section className="section">
//       <Helmet title={`Tags | ${title}`} />
//       <div className="container content">
//         <div className="columns">
//           <div
//             className="column is-10 is-offset-1 mt-5 mb-3"
//             style={{ marginBottom: "6rem" }}
//           >
//             <h1 className="title is-size-2 is-bold-light">Categories</h1>
//             <ul className="taglist ml-3">
//               {group.map((tag) => (
//                 <li key={tag.fieldValue}>
//                   <Link to={`/categories/${kebabCase(tag.fieldValue)}/`}>
//                     {tag.fieldValue} ({tag.totalCount})
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   </Layout>
// );

// export default TagsPage;

// export const tagPageQuery = graphql`
//   query TagsQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(limit: 1000) {
//       group(field: frontmatter___tags) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `;
