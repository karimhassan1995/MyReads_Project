const WantToReadBook = ({wanttoreadbooks ,deleteShelf ,changeShelf}) => {


    return(

        
                <div className="book">
                    <div className="book-top">
                        <div 
                        className="book-cover" 
                        
                        style={{
                        width: 128,
                        height: 193,
                            backgroundImage: `url(${wanttoreadbooks.imageLinks?.thumbnail})` 
                        }}
                        ></div>
                    <div className="book-shelf-changer">
                        <select value="none" onChange={(e) => {
                          
                          deleteShelf("wantToRead",wanttoreadbooks)
                          changeShelf(e, wanttoreadbooks)
                          
                          
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
                <div className="book-title">{wanttoreadbooks.title}</div>
                <div className="book-authors">{wanttoreadbooks.autors}</div>
                </div>
            
    )
}

export default WantToReadBook ;