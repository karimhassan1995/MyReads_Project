import Book from "./Book"
import {Link} from "react-router-dom"

const Shelves =({deleteShelfOfBook ,chosenNewShelf , currentlyReading , wantToRead , read}) => {


    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                <ul className="books-grid">
                    {
                      currentlyReading.map((book) =>(
                          <li  key={book.id}>
                              <Book  book={book} deleteShelf={deleteShelfOfBook}  changeShelf={chosenNewShelf} stateOfBook="currentlyReading"/>
                      </li>
                      )) 
                     }
                 </ul>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {
                    wantToRead.map((book) =>(
                        <li  key={book.id} >
                            <Book  book={book} deleteShelf={deleteShelfOfBook}  changeShelf={chosenNewShelf} stateOfBook='wantToRead'/>
                        </li>
                    ))
                  }   
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ul className="books-grid">
                  {
                    read.map((book) =>(
                        <li  key={book.id}>
                            <Book  book={book} deleteShelf={deleteShelfOfBook}  changeShelf={chosenNewShelf} stateOfBook='read'/>
                         </li>
                   ))
                  }   
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    )
}

export default Shelves ;