import {useState , useEffect} from "react";  
import * as BooksAPI from "./BooksAPI" 
import {Link} from "react-router-dom"

const Search = ({changeShelf , currentlyReadingarray , wantToReadarray ,readarray})=> {                     /*1*/

    const [searchedBooks , setSearchedBooks ] = useState("");     

    const updateSearchedBooks = (event) => {                                  
        setSearchedBooks(event.target.value.trim());          
    }

    const [showingBooks , setshowingBooks]= useState([])                          

    useEffect (() => {                           
            BooksAPI.search(searchedBooks , 10).then((res) => {          
                if (res == undefined || res.error) res = []              
                setshowingBooks(res);                                    
            });
        }, [searchedBooks])     
        
        const concatenatedarr1 = currentlyReadingarray.concat(wantToReadarray);
        const concatenatedarr2 = concatenatedarr1.concat(readarray);

    return (                    
            <div>
                <div className="search-books">                                                
                    <div className="search-books-bar">                       
                        <Link
                        className="close-search"
                        to="/"                   
                        >
                        Close 
                        </Link>
                        <div className="search-books-input-wrapper">               
                        <input                                                       
                            type="text"
                            placeholder="Search by title, author, or ISBN"
                            value={searchedBooks}                 
                            onChange={updateSearchedBooks}             
                        />
                        </div>   
                    </div>             
                    <div className="search-books-results">   
                        <ol ></ol>
                    </div>
                </div>
                <ul className="books-grid">   
                {
                    showingBooks.map((book) =>(              
                    <li  key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div 
                                className="book-cover" 
                                
                                style={{
                                width: 128,
                                height: 193,
                                    backgroundImage: `url(${book.imageLinks?.thumbnail})` 
                                }}
                                ></div>
                            <div className="book-shelf-changer">
                                <select value="none" onChange={concatenatedarr2.filter((d) => d.id === book.id).length === 0 ?(e) => changeShelf(e, book) : "" } >   
                                    <option value="none" disabled>
                                        Move to...
                                    </option>
                                    <option value="currentlyReading" className={currentlyReadingarray.filter((d) => d.id === book.id).length > 0 ? "backgroundcolor" : "" } >
                                        Currently Reading
                                    </option>
                                    <option value="wantToRead" className={wantToReadarray.filter((d) => d.id === book.id).length > 0 ? "backgroundcolor" : "" } >Want to Read</option>
                                    <option value="read"className={readarray.filter((d) => d.id === book.id).length > 0 ? "backgroundcolor" : ""} >Read</option>
                                    <option value="none" >None</option>
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