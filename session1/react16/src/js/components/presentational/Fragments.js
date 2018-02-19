import React from 'react';

const numberList = [
  <p>1</p>,
  <p>2</p>,
  <p>3</p>,
  <p>4</p>,
  <p>5</p>,
];

const FragmentString = ({ text = 'Amigos' }) => `Welcome to React 16 session 1, ${text}!`;

const FragmentArray = () => numberList;

export {
  FragmentArray,
  FragmentString,
};
