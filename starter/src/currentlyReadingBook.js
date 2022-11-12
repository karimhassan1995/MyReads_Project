const CurrentlyReadingBook = ({currentlyreadingbooks ,deleteShelf ,changeShelf}) => {


    return(

        
                <div className="book">
                    <div className="book-top">
                        <div 
                        className="book-cover" 
                        
                        style={{
                        width: 128,
                        height: 193,
                            backgroundImage: `url(${currentlyreadingbooks.imageLinks?.thumbnail})` 
                        }}
                        ></div>
                    <div className="book-shelf-changer">
                        <select value="none" onChange={(e) => {
                          
                          deleteShelf("currentlyReading",currentlyreadingbooks)
                          changeShelf(e, currentlyreadingbooks)
                          
                          
                        } } >
                            <option value="none" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading" >
                                Currently Reading
                            </option>
                            <option value="wantToRead" >Want to Read</option>
                            <option value="read" >Read</option>
                            <option value="none" >None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{currentlyreadingbooks.title}</div>
                <div className="book-authors">{currentlyreadingbooks.autors}</div>
                </div>
            
    )
}

export default CurrentlyReadingBook ;