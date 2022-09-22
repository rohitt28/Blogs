import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/sections.sass";
import "../sass/cards.sass";
import { Container } from "reactstrap";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RecentPosts = ({ data }) => {
  const [characterNum, setCNUM] = useState(200);

  let postCards = useRef(null);

  useEffect(() => {
    let theWindow = window !== undefined ? window : null;
    setCNUM(theWindow.innerWidth < 768 ? 80 : 50);
    theWindow.onresize = () => setCNUM(theWindow.innerWidth < 768 ? 80 : 50);

    gsap.from(postCards, 3, {
      autoAlpha: "0",
      delay: "1.5",
      ease: Power3.easeOut,
      y: 100,
      scrollTrigger: {
        trigger: ".trigger",
      },
    });
  }, []);

  const max = 3;

  return (
    <div className="cover">
      <Container>
        <div className="headerPost">Recent Posts</div>
        <div className="underline2"></div>
        <div className="scroll-cards mx-2 trigger">
          {data.edges
            .filter((e) => e.node.frontmatter.templateKey === "blog-post")
            .map((e) => (
              <div className="scroll-card" ref={(el) => (postCards = el)}>
                <Link
                  to={e.node.fields.slug}
                  className="scroll-card-img-holder"
                >
                  <div className="scroll-card-img">
                    <img
                      width="100%"
                      src={
                        e.node.frontmatter.featuredimage != null
                          ? "/img/" +
                            e.node.frontmatter.featuredimage.relativePath
                          : "https://increasify.com.au/wp-content/uploads/2016/08/default-image.png"
                      }
                      alt={e.node.frontmatter.title}
                      className=" topPostImg"
                    />
                  </div>
                </Link>
                <div className="scroll-card-content">
                  <h5>
                    <Link to={e.node.fields.slug}>
                      {e.node.frontmatter.title}
                    </Link>
                  </h5>
                  {/* Badges for tags */}
                  <div class="tags">
                    {e.node.frontmatter.tags.map((tag, index) => {
                      if (index < max) {
                        return (
                          <span
                            className="badge badge-pill badge-success mr-2"
                            style={{ fontSize: "1em" }}
                          >
                            {tag}
                          </span>
                        );
                      } else {
                        return <span></span>;
                      }
                    })}
                  </div>
                  <p className="mt-2">
                    {e.node.frontmatter.description.substring(0, characterNum) +
                      "..."}
                  </p>
                  <p className="text-success scroll-card-author">
                    {e.node.frontmatter.author}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default RecentPosts;
