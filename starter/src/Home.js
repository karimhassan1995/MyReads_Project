import {Link} from "react-router-dom"
import Shelf from "./Shelf"
import PropTypes from "prop-types"

const Home = ({deleteShelfOfBook, chosenNewShelf, changeDetailsOfBook, currentlyReading, wantToRead, read}) => {

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf
                        deleteShelf={deleteShelfOfBook}
                        changeShelf={chosenNewShelf}
                        changeDetailsOfBook={changeDetailsOfBook}
                        books={currentlyReading}
                        title = "Currently Reading"
                        stateOfBook="currentlyReading"/>
                    <Shelf
                        deleteShelf={deleteShelfOfBook}
                        changeShelf={chosenNewShelf}
                        changeDetailsOfBook={changeDetailsOfBook}
                        books={wantToRead}
                        title = "Want To Read"
                        stateOfBook="wantToRead"/>
                    <Shelf
                        deleteShelf={deleteShelfOfBook}
                        changeShelf={chosenNewShelf}
                        changeDetailsOfBook={changeDetailsOfBook}
                        books={read}
                        title = "Read"
                        stateOfBook="read"/>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}

Home.propTypes = {
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired,
    deleteShelfOfBook: PropTypes.func.isRequired,
    chosenNewShelf: PropTypes.func.isRequired,
};

export default Home;