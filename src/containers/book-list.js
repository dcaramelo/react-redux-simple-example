import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBookAction } from '../actions/select-book-action'
import { bindActionCreators } from 'redux'

class BookList extends Component {
    renderList() {
        return this.props.books.map( book => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBookAction }, dispatch)
}

function mapStateToProps(state) {
    return { books: state.books }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)