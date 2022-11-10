

const Search = ({showP , setshowP })=> {

    return(
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
        </div>
    );
}  

export default Search ;