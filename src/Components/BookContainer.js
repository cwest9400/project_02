import '../book-card.css'
import { useState, useEffect } from "react"


function BookContainer(props) {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=fiction&key=AIzaSyBsTz6hDDSfNbg5GTFXQWax-JENyj_sQP0' )
        .then ((res) => res.json())
        .then((json) => {
            setBooks(json)
        })
        .catch(console.error)
    }, [])

    console.log(books)
    
    return (
        <section className="book-container">
            {books.map((book, index) => {
                return (
                    <div className="book-card" key={index}>
                    <p>book title</p>
                    <img src='https://books.google.com/books/content?id=1M0Y2RYqffIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
                    alt ="book image"/>
                </div>
                
                )
            })}
                              

           
       
        
    </section>
          

            )   

    
}

export default BookContainer