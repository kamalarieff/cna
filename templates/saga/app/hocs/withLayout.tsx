import GlobalStyle from '../assets/styles/globalStyles';
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const MainWrapper = styled.main`
  padding: 0 10px 50px 10px;
`;

function withLayout(Child: React.ComponentClass) {

  type Props = {};

  type State = {}
  
  class WrappedComponent extends React.Component<Props, State> {
    render() {
      return (
        <div>
          <Header />
          <MainWrapper>
            <Child {...this.props} />
          </MainWrapper>
          <GlobalStyle />
        </div>
      );
    }
  }
  return WrappedComponent;
}

export default withLayout;
