import {useState, useEffect} from "react";
import * as BooksAPI from "./BooksAPI"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import Book from "./Book"

const Search = ({changeShelf, currentlyReadingarray, wantToReadarray, readarray}) => {/*1*/

    const [searchedQuery,
        setSearchedQuery] = useState("");

    const updateSearchedQuery = (event) => {
        setSearchedQuery(event.target.value);
    }

    const [searchedBooks,
        setsearchedBooks] = useState([])

    useEffect(() => {
        BooksAPI
            .search(searchedQuery, 10)
            .then((res) => {
                if (res === undefined || res.error) 
                    res = []
                    setsearchedBooks(res);
            });
    }, [searchedQuery])

    const concatenatedarray = currentlyReadingarray.concat(wantToReadarray).concat(readarray);
  

    for(let i = 0; i < searchedBooks.length; i++) {
        const foundBook = concatenatedarray.find((b)=> b.id === searchedBooks[i].id);
       if (foundBook) {
           searchedBooks[i].shelf = foundBook.shelf ;
       }
    }

    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title, author, or ISBN"
                            value={searchedQuery}
                            onChange={ updateSearchedQuery }/>
                    </div>
                </div>
            </div>
            <ul className="books-grid">
                {searchedBooks.map((book) => (
                    <li key={book.id}>
                     <Book  changeShelf={changeShelf} book={book} />
                    </li>
                ))
}
            </ul>

        </div>
    );
}

Search.propTypes = {
    currentlyReadingarray: PropTypes.array.isRequired,
    wantToReadarray: PropTypes.array.isRequired,
    readarray: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
};

export default Search;