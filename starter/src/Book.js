import PropTypes from "prop-types"
import { Link } from "react-router-dom"


const Book = ({book, changeShelf, changeDetailsOfBook}) => {

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
                        value={book.shelf || 'none'}
                        onChange={(e) => changeShelf(e, book)}>
                        <option value="moveTo" disabled>
                            Move to...
                        </option>
                        <option
                            value="currentlyReading"
                           >
                            Currently Reading
                        </option>
                        <option
                            value="wantToRead"
                           >Want to Read</option>
                        <option
                            value="read"
                          >Read</option>
                        <option
                            value="none"
                        >None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors?.join(', ')}</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired,
};

export default Book;