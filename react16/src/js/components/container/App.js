import React, { Component } from 'react';
import MenuItemList from '../presentational/MenuItemList';
import Menu from '../presentational/Menu';
import Container from '../presentational/Container';
import Header from '../presentational/Header';
import styled from 'styled-components';

const contentMap = {
  'fragments': <Container title="Fragments">Fragments example</Container>,
  'custom attributes': <Container title="Custom attributes">Custom attributes example</Container>,
  'portals': <Container title="Portals">Portal example</Container>,
  'error boundaries': <Container title="Error boundaries">Error boundaries example</Container>,
};

const sections = [
  'fragments',
  'custom attributes',
  'portals',
  'error boundaries',
];

const Wrapper = styled.div`
  display: flex;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentSection: sections[0] };
    this.onMenuItemClicked = this.onMenuItemClicked.bind(this);
  }


  onMenuItemClicked(currentSection) {
    const changeSection = (prevState) => {
      if (prevState.currentSection === currentSection) {
        return null;
      }

      return { currentSection };
    }

    this.setState(changeSection);
  }

  render() {
    const { currentSection } = this.state;

    return (
      <div>
        <Header />
        <Wrapper>
          <div>
            <Menu items={sections} onClick={this.onMenuItemClicked} active={currentSection} />
          </div>
          {contentMap[this.state.currentSection]}
        </Wrapper>
      </div>
    );
  }
}

export default App;
