import React, { Component } from 'react';
import Container from '../presentational/Container';
import { FragmentString, FragmentArray } from '../presentational/Fragments';
import { InputStyled, WrapperStyled } from './FragmentsExample.styled';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Amigo' }
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(evt) {
    const { value } = evt.target;
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <WrapperStyled>
        <InputStyled value={value} onChange={this.updateValue} />
        <WrapperStyled>
          <FragmentString text={value}/>
        </WrapperStyled>
      </WrapperStyled>
    );
  }
}

const FragmentsExample = () => {
  const fragmentsComponents = [FragmentString, FragmentArray];

  return (
    <Container title="Fragments">
      <Input />
      <WrapperStyled>
        <FragmentArray />
      </WrapperStyled>
    </Container>
  );
}

export default FragmentsExample;
