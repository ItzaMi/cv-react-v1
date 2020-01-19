import React, { Component } from "react";

class Carrousel extends Component {
  render() {
    const chefs = [
      {
        key: 1,
        title: "woof",
        images: ["hey", "bitcho", "yoyo"]
      },
      {
        key: 2,
        title: "meow",
        images: ["1", "2", "3"]
      }
    ];
    return (
      <div className="contentBox">
        <h4>Slide image</h4>
        {chefs.map((chef, i) => (
          <div key={i}>
            <h4>{chef.title}</h4>
            <div className="infoBox">
              {chef.images.map((text, index) => (
                <ParagraphHere textContent={text} keyHere={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

class ParagraphHere extends React.Component {
  render() {
    if (this.props.keyHere === 0) {
      console.log("hey " + this.props.textContent);
    }

    return (
      <div>
        <p>{this.props.textContent}</p>
      </div>
    );
  }
}

export default Carrousel;
