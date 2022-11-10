const Search = ({showP , setshowP ,searchingBooks })=> {


    return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <a
                        className="close-search"
                        onClick={() => setshowP(!showP)}
                        >
                        Close 
                        </a>
                        <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title, author, or ISBN"
                        />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol ></ol>
                    </div>
                </div>
                <ul className="books-grid">
                {
                    searchingBooks.map((book) =>(
                    <li  key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div 
                                className="book-cover" 
                                
                                style={{
                                width: 128,
                                height: 193,
                                    backgroundImage: `url(${book.imageLinks.thumbnail})` 
                                }}
                                ></div>
                            <div className="book-shelf-changer">
                                <select>
                                    <option value="none" disabled>
                                        Move to...
                                    </option>
                                    <option value="currentlyReading">
                                        Currently Reading
                                    </option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                        </div>
                    </li>
                ))
            }
            </ul>
   
        </div>
    );
}  

export default Search ;