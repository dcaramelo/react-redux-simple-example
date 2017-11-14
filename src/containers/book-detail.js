import React, {Component} from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
    render() {
        let bookDetail = "Not selected book !"
        if (this.props.activeBook) {
            bookDetail = this.props.activeBook.title
        }
        return (
            <div>{bookDetail}</div>
        )
    }
}

function mapStateToProps(state) {
    return { activeBook: state.activeBook }
}

export default connect(mapStateToProps)(BookDetail)
