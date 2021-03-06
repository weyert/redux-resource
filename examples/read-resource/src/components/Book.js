import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getStatus } from 'redux-resource';

class Book extends Component {
  render() {
    const { state, readBook, bookId } = this.props;
    const readStatus = getStatus(state, 'meta[24].readStatus');
    const book = state.resources[bookId];

    return (
      <div>
        <button onClick={readBook}>Fetch book data</button>
        <br />
        {readStatus.pending && 'Loading book data...'}
        {readStatus.succeeded && (
          <div>
            <h1>{book.title}</h1>
            <div>
              {book.author} - {book.releaseYear}
            </div>
          </div>
        )}
      </div>
    );
  }
}

Book.propTypes = {
  bookId: PropTypes.number.isRequired,
  readBook: PropTypes.func.isRequired,
  state: PropTypes.shape({
    resources: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    requests: PropTypes.object.isRequired,
    lists: PropTypes.object.isRequired
  })
};

export default Book;
