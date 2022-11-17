const BookDetails = ({book}) => {

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">  
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Details Of Book</h2>
                        <div className="bookshelf-books">
                            <div className="book">
                                <div className="book-top">
                                    <div
                                        className="book-cover"
                                        style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: `url(${book.imageLinks?.thumbnail})`
                                        }}/>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                    <div className="book-description">{book.description}</div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails;