import "./App.css";                                           
import { useState ,useEffect} from "react";                   
import Search from "./search";
import {Route , Routes} from "react-router-dom"
import * as BooksAPI from "./BooksAPI" 
import Shelves from "./Shelves";  


function App() {
    
  
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
    changeShelfOfBook(selectedOption, book)
  }
  

  const deleteShelfOfBook =(currentShelf, book) => {
    if(currentShelf === "currentlyReading"  )
      setcurrentlyReading(currentlyReading.filter((d) => d.id !== book.id))
    else if (currentShelf === "wantToRead" )
      setwantToRead(wantToRead.filter((d) => d.id !== book.id))
    else if (currentShelf === "read" )
      setRead(read.filter((d) => d.id !== book.id))
  } 

  const changeShelfOfBook = (targetShelf ,book)=>{
    if (targetShelf === 'currentlyReading' )
      setcurrentlyReading([...currentlyReading, book])
    else if (targetShelf === 'wantToRead' )
      setwantToRead([...wantToRead, book])
    else if(targetShelf === 'read')
      setRead([...read , book])
  }

  return (                                    
    <Routes>
        <Route exact path="/search" element={                                 
            <Search  changeShelf={chosenNewShelf} currentlyReadingarray={currentlyReading}  wantToReadarray={wantToRead} readarray={read} />
        }/>
        <Route path="/" element={
            <Shelves deleteShelfOfBook={deleteShelfOfBook} chosenNewShelf={chosenNewShelf} currentlyReading={currentlyReading} wantToRead={wantToRead} read={read}   />
        }/>
    </Routes>      
  );
}

export default App ;
