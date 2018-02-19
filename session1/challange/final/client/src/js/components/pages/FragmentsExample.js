import React from 'react';
import Container from '../presentational/Container';
import { FragmentString, FragmentArray } from '../presentational/Fragments';

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
