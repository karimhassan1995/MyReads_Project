import Book from "./Book"
import PropTypes from "prop-types"

const Shelf = ({changeShelf, changeDetailsOfBook, books, title}) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ul className="books-grid">
                    {books.map((book) => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                changeShelf={changeShelf}
                                changeDetailsOfBook={changeDetailsOfBook}/>
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
  changeShelf: PropTypes.func.isRequired,
};

export default Shelf;