import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div className="contentBox">
        <h4>Experience</h4>
        <div className="infoBox">
          <p>
            <strong>Frontend Developer</strong>
            <br></br>
            <strong>
              <a
                className="hyperlink"
                href="https://coletiv.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coletiv
              </a>
            </strong>
            <br></br>
            Frontend Developer at{" "}
            <a
              className="linkPage"
              href="https://coletiv.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coletiv
            </a>
            , digital studio working with several international partners.
            Currently working as a Web Developer using{" "}
            <span className="blackText">ReactJS</span> and
            <span className="blackText"> Gatsby</span>!<br></br>
            <span className="year">February 2020 - Present</span>
          </p>
          <br></br>
          <p>
            <strong>Web Developer & Web Designer</strong>
            <br></br>
            <strong>
              <a
                className="hyperlink"
                href="https://antisocial.agency"
                target="_blank"
                rel="noopener noreferrer"
              >
                antisocial
              </a>
            </strong>
            <br></br>
            Sole web developer for{" "}
            <a
              className="linkPage"
              href="https://antisocial.agency"
              target="_blank"
              rel="noopener noreferrer"
            >
              antisocial
            </a>
            , a branding and marketing company. Since I started in April I
            developed several websites (mostly using WordPress and WooCommerce)
            such as{" "}
            <a
              className="linkPage"
              href="https://lojakitchenaid.pt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Loja KitchenAid
            </a>
            ,{" "}
            <a
              className="linkPage"
              href="https://lojalaurastar.pt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Loja Laurastar
            </a>{" "}
            and{" "}
            <a
              className="linkPage"
              href="https://october.gallery"
              target="_blank"
              rel="noopener noreferrer"
            >
              October Gallery
            </a>
            .<br></br>I also create content for social media of the brands we
            work with and I partially coordinate the team creatively.
            <br></br>
            <span className="year">April 2019 - February 2020</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Experience;
