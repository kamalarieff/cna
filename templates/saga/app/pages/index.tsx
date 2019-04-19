import React from 'react';
import { connect } from 'react-redux';
import { Component as Home } from '../containers/Home';
import { fetchData } from '../containers/Home/actions';
import { Dispatch } from 'redux';

type Props = {
  dispatch: Dispatch;
  query: {};
};

type State = {};

class Index extends React.Component<Props, State> {
  static async getInitialProps(context) {
    const { store, req, isServer, res, query } = context;

    if (!query.page || isNaN(query.page)) {
      query.page = 1;
    } else {
      query.page = parseInt(query.page);
    }

    return {
      isServer,
      query,
    };
  }

  componentDidMount() {
    const { dispatch, query } = this.props;
    dispatch(fetchData(query));
  }

  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    home: state.home,
  };
};

export default connect(
  mapStateToProps,
  null
)(Index);
