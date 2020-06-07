import React, { Component } from "react";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbArray: undefined,
      currentPhoto: undefined,
    };
  }

  componentDidMount() {
    let imgAr = this.props.thumbArray.map((item) => {
      return (
        <div
          className="thumb-wrapper"
          key={this.props.thumbArray.indexOf(item)}
        >
          <img
            id={item}
            src={`/images/${this.props.folder}/${item}.png`}
            className="thumb"
            onClick={this.handleThumb}
            alt={item}
          />
        </div>
      );
    });
    this.setState({
      thumbArray: imgAr,
      currentPhoto: this.props.currentPhoto,
    });
  }

  handleThumb = (e) => {
    this.setState({
      currentPhoto: `/images/${this.props.folder}/${e.target.id.split("-")[0]}.png`
    })
  }

  render() {
    return (
      <div className="carousel">
        <div className="display-photo-wrapper">
          <img
            src={this.state.currentPhoto}
            className="display-photo"
            alt={this.state.currentPhoto}
          />
        </div>
        <div className="carousel-scroll">
          <div className="scroll-div horizontal-scroll">
            {this.state.thumbArray}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
