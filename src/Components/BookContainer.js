import '../book-card.css'
import '../book-container.css'
import { useState, useEffect } from "react"





function BookContainer(props) {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=fiction&key=AIzaSyBsTz6hDDSfNbg5GTFXQWax-JENyj_sQP0')
            .then((res) => res.json())
            .then((json) => {
                setBooks(json.items)
            })
            .catch(console.error)
    }, [])

    
    console.log(`books consolelog: ${books.items}`)
    
    return (
        <section className="book-container">

            {books.map((book) => {
                return (
                        <div className="book-card">
                            <h2 className='book-title'>book title</h2>
                            <p className='author'>Author</p>
                            {/* <img src={thumbnail} alt=""/> */}
                            <img src='https://books.google.com/books/content?id=1M0Y2RYqffIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
                                alt="book image" />
                        </div>

                )

            })}
    </section>
    )
}
    


export default BookContainer