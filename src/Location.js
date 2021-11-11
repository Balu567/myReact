import React from "react";

class Location extends React.Component {
  state = {
    images: [
      "http://placehold.it/120x120&text=image1",
      "http://placehold.it/120x120&text=image2",
      "http://placehold.it/120x120&text=image3",
      "http://placehold.it/120x120&text=image4",
    ],
    idx: 0,
  };
  doIncrement = () => {
    this.setState({ idx: this.state.idx + 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.eluru}</h1>
        <h1>{this.state.andhra}</h1>
        <h1>{this.state.counter}</h1>
        <img src={this.state.images[this.state.idx]} />
        <button onClick={this.doIncrement}>click me</button>
      </div>
    );
  }
}
export default Location;
