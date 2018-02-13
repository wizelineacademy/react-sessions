import React from 'react';
import Container from './Container';
import { FragmentString, FragmentArray } from './Fragments';

const FragmentsExample = () => {
  const fragmentsComponents = [FragmentString, FragmentArray];

  return (
    <Container title="Fragments">
      <div>
        <FragmentString />
      </div>
      <div>
        <FragmentArray />
      </div>
    </Container>
  );
}

export default FragmentsExample;
