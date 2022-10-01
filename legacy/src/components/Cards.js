import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";

import { TimelineLite, Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/cards.sass";
import "../sass/sections.sass";

gsap.registerPlugin(ScrollTrigger);

export default function Cards({ data }) {
  let textContentHeader = useRef(null);
  let textContentDesc = useRef(null);
  let cardImage = useRef(null);
  let cardAnimation = useRef(null);
  let ribbonAnimation = useRef(null);

  let tl = new TimelineLite();
  let t2 = new TimelineLite();

  const max = 3;

  useEffect(() => {
    tl.from(textContentHeader, 2, {
      autoAlpha: "0",
      y: 200,
      delay: 1,
      scrollTrigger: { trigger: textContentDesc },
    })
      .from(textContentDesc, 3, {
        autoAlpha: "0",
        y: 100,
      })
      .from(ribbonAnimation, 0.5, {
        autoAlpha: "0",
        x: -50,
        ease: Power3.easeOut,
      });
    t2.from(cardAnimation, 2, { y: 500, ease: Power3.easeOut }, 0.2);
    gsap.from(
      cardImage,
      3,
      {
        filter: "grayscale(100%)",
        // autoAlpha: "0",
        scale: 0.95,
        delay: 1,
      },
      0
    );
  });
  return (
    <Container>
      {data.edges
        .filter((e) => e.node.frontmatter.featuredpost === true)
        .map((e) => (
          <div
            className="featured-card"
            style={{
              margin: "1em 0",
            }}
            ref={(el) => (cardAnimation = el)}
          >
            <div className="featured-card-grid">
              <div className="featured-content">
                <div className="overlay-ribbon">
                  <span className="ribbon" ref={(el) => (ribbonAnimation = el)}>
                    Featured
                  </span>
                </div>
                <h1 ref={(el) => (textContentHeader = el)} className="mt-1">
                  <a href={e.node.fields.slug}>{e.node.frontmatter.title}</a>
                </h1>
                <div ref={(el) => (textContentDesc = el)} className="trigger">
                  {/* Badges for tags */}
                  <div className="tags mb-2">
                    {e.node.frontmatter.tags.map((tag, index) => {
                      if (index < max) {
                        return (
                          <span
                            className="badge badge-pill badge-success mr-2"
                            style={{ fontSize: "0.8em" }}
                          >
                            {tag}
                          </span>
                        );
                      } else {
                        return <span></span>;
                      }
                    })}
                  </div>
                  <p>{e.node.frontmatter.description}</p>
                  <p>{e.node.frontmatter.author}</p>
                </div>
              </div>
              <div
                className="featured-image-holder"
                ref={(el) => (cardImage = el)}
              >
                <img
                  src={"/img/" + e.node.frontmatter.featuredimage.relativePath}
                  alt={e.node.frontmatter.title}
                />
              </div>
            </div>
          </div>
        ))}
    </Container>
  );
}
