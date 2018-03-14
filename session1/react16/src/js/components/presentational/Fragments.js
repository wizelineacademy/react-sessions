import React from 'react';

const numberList = [
  <p key={1}>1</p>,
  <p key={2}>2</p>,
  <p key={3}>3</p>,
  <p key={4}>4</p>,
  <p key={5}>5</p>,
];

const FragmentString = ({ text = 'Amigos' }) => `Welcome to React 16 session 1, ${text}!`;

const FragmentArray = () => numberList;

export {
  FragmentArray,
  FragmentString,
};
