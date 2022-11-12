import "./App.css";                                           
import { useState ,useEffect} from "react";                   
import Search from "./search";  
import CurrentlyReadingBook from "./currentlyReadingBook" 
import WantToReadBook from "./wantToRead"
import Read from "./readbook"
import * as BooksAPI from "./BooksAPI" 


function App() {
  
  const [showSearchPage, setShowSearchpage] = useState(false);   
  
  const [currentlyReading , setcurrentlyReading ] = useState([]);         
  const [wantToRead , setwantToRead] = useState([]);              
  const [read , setRead] = useState([]);    
  
  
  useEffect (() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll(); 
      let r = [res[0],res[1]]
      let w = [res[2],res[3]]
      let k = [res[4],res[5],res[6]]  
      console.log(res)              
      setcurrentlyReading(r)
       setwantToRead(w)
      setRead(k)
    };
    getBooks();                                                 
    }, [])
  

  const chosenNewShelf = (event, book) => {
    const selectedOption = event.target.value
    changeShelfOfBook(selectedOption,book)
  }

  const deleteShelfOfBook =(currentShelf,book) => {
    if(currentShelf === "currentlyReading")
    setcurrentlyReading(currentlyReading.filter((d) => d.id !== book.id))
    else if (currentShelf === "wantToRead")
    setwantToRead(wantToRead.filter((d) => d.id !== book.id))
    else if (currentShelf === "read")
    setRead(read.filter((d) => d.id !== book.id))

  } 

  const changeShelfOfBook = (event ,book)=>{

    if (event === 'currentlyReading')
    setcurrentlyReading([...currentlyReading, book])
    else if (event === 'wantToRead')
    setwantToRead([...wantToRead, book])
    else if(event === 'read')
    setRead([...read , book])

  }


  

  return (
    <div className="app">
      {showSearchPage ? (                                             
        <Search showP={showSearchPage} setshowP={setShowSearchpage}  changeShelf={chosenNewShelf}/>
      ) : (
       
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
                              <CurrentlyReadingBook  currentlyreadingbooks={book} deleteShelf={deleteShelfOfBook}  changeShelf={chosenNewShelf}/>
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
                        <li  key={book.id}>
                            <WantToReadBook wanttoreadbooks={book} deleteShelf={deleteShelfOfBook}  changeShelf={chosenNewShelf}/>
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
                            <Read readbooks={book} deleteShelf={deleteShelfOfBook}  changeShelf={chosenNewShelf}/>
                        </li>
                    ))
                  }   
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App ;
