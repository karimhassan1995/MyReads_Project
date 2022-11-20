import "./App.css";
import {useState, useEffect} from "react";
import Search from "./Search";
import {Route, Routes} from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import Home from "./Home";
import NotFound from "./NotFound"
import BookDetails from "./BookDetails";

function App() {

    const [currentlyReading,setcurrentlyReading] = useState([]);
    const [wantToRead,setwantToRead] = useState([]);
    const [read,setRead] = useState([]);

    const [detailsOfBook , setDetailsOfBook] = useState({});
    const changeDetailsOfBook = (book) =>{
    console.log(book)
      setDetailsOfBook(book);
    }

    useEffect(() => {
        const getBooks = async() => {
            const res = await BooksAPI.getAll();
            setcurrentlyReading([res[0], res[1]])
            setwantToRead([res[2], res[3]])
            setRead( [res[4], res[5], res[6]])
        };
        getBooks();
    }, [])

    const chosenNewShelf = (event, book) => {
        const selectedOption = event.target.value
        changeShelfOfBook(selectedOption, book)
    }

    const deleteShelfOfBook = (currentShelf, book) => {
        if (currentShelf === "currentlyReading") 
            setcurrentlyReading(currentlyReading.filter((d) => d.id !== book.id))
        else if (currentShelf === "wantToRead") 
            setwantToRead(wantToRead.filter((d) => d.id !== book.id))
        else if (currentShelf === "read") 
            setRead(read.filter((d) => d.id !== book.id))
    }

    const changeShelfOfBook = (targetShelf, book) => {
        deleteShelfOfBook(book.shelf, book)
        if (targetShelf === 'currentlyReading'){ 
            setcurrentlyReading([...currentlyReading, book])
         }
        else if (targetShelf === 'wantToRead'){
            setwantToRead([...wantToRead, book])
        }
        else if (targetShelf === 'read'){
            setRead([...read, book])
        }
        book.shelf = targetShelf
    }

    return (
        <Routes>
            <Route
                exact
                path="/search"
                element={
                  < Search changeShelf = { chosenNewShelf }
                           currentlyReadingarray = {currentlyReading}
                           wantToReadarray = {wantToRead}
                           readarray = {read}/>
                }/>
            <Route
                path="/"
                element={
                  < Home chosenNewShelf = { chosenNewShelf }
                         changeDetailsOfBook = {changeDetailsOfBook}
                         currentlyReading = { currentlyReading }
                         wantToRead = { wantToRead }
                         read = { read } />
                }/>
            <Route
                path="/books/:id"
                element={
                  < BookDetails book={detailsOfBook}/>
                }/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
