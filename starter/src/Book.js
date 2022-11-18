import PropTypes from "prop-types"
import { Link } from "react-router-dom"


const Book = ({book, deleteShelf, changeShelf, changeDetailsOfBook, stateOfBook}) => {

    return (
        <div className="book">
            <div className="book-top">
                <Link to={`/books/${book.id}`} onClick={() => changeDetailsOfBook(book)}>
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks?.thumbnail})`
                        }}/>
                </Link>
                <div className="book-shelf-changer">
                    <select
                        value={stateOfBook}
                        onChange={(e) => {
                            deleteShelf(stateOfBook, book)
                            changeShelf(e, book)
                        }}>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option
                            value="currentlyReading"
                            className={stateOfBook == 'currentlyReading' ? "backgroundcolor" : ""}>
                            Currently Reading
                        </option>
                        <option
                            value="wantToRead"
                            className={stateOfBook == 'wantToRead' ? "backgroundcolor" : ""}>Want to Read</option>
                        <option
                            value="read"
                            className={stateOfBook == 'read' ? "backgroundcolor" : ""}>Read</option>
                        <option
                            value="none"
                            className={stateOfBook == 'none' ? "backgroundcolor" : ""}>None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    stateOfBook: PropTypes.string.isRequired,
    deleteShelf: PropTypes.func.isRequired,
    changeShelf: PropTypes.func.isRequired,
};

export default Book;