import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    return (
      <div>Book Detail!</div>
    );
  }
}

function mapStateToProps(state) {
  ruturn {
    book: state.activeBook
  };
}

export defaulat connect(mapStateToProps)(BookDetail);
