import Book from "./Book"
import PropTypes from "prop-types"

const Shelf = ({deleteShelf, changeShelf, changeDetailsOfBook, books, title , stateOfBook}) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ul className="books-grid">
                    {books.map((book) => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                deleteShelf={deleteShelf}
                                changeShelf={changeShelf}
                                changeDetailsOfBook={changeDetailsOfBook}
                                stateOfBook={stateOfBook}/>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  stateOfBook: PropTypes.string.isRequired,
  deleteShelf: PropTypes.func.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default Shelf;