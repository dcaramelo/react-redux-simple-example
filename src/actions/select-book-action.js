export function selectBookAction(book) {
    console.log(book)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}