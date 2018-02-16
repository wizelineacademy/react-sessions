import React, { Component } from 'react';
import { findDOMNode } from 'react-dom'
import { TileStyled } from './Tile.styled';

const getRandomIndex = (max) => Math.floor(Math.random() * Math.floor(max));
const createColorObject = (hexColor) => ({ code: hexColor });

const COLORS = [
  createColorObject('#17B9D4'),
  createColorObject('#F3696B'),
  createColorObject('#0F778A'),
  createColorObject('#9FC46B'),
];

const fixedColor = '#D5C7AA';

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      clicked: false,
      color: COLORS[getRandomIndex(COLORS.length + 1)].code,
    }

    this.changeColor = this.changeColor.bind(this);
    this.fixColor = this.fixColor.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.count >= 9) {
          return { count: 0 };
        }
        return { count: prevState.count + 1};
      });
    }, 1500);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  changeColor() {
    const { clicked } = this.state;

    this.setState((prevState) => {
      const newColor = COLORS[1].code;
      const hasDifferentColor = prevState.color !== newColor;
      const shouldChange = hasDifferentColor && !clicked;

      return shouldChange ? { color: newColor } : null;
    });
  }

  fixColor() {
    this.setState((prevState) => {
      if (prevState.clicked) { return null; }

      return {
        clicked: true,
        color: fixedColor,
      };
    });
  }

  render() {
    const { width, height } = this.props;
    const { count, color } = this.state;

    return (
      <TileStyled
        width={width}
        height={height}
        onMouseOut={this.changeColor}
        onClick={this.fixColor}
        color={color}>

        <span>
          {count}
        </span>
        <div>
        </div>

      </TileStyled>
    );
  }
}

export default Tile;
