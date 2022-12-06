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
    const card=({item})=>{
        console.log(item)
    return (
        <section className="book-container">
            {
            item.map((book, index) => {
                // let thumbnail=book.volumeInfo.imageLinks.smallThumbnail;
console.log(item)
                return (
                    <>
                    <div className="book-card">
                    <p>book title</p>
                    {/* <img src={thumbnail} alt=""/> */}
                    <img src='https://books.google.com/books/content?id=1M0Y2RYqffIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
                    alt ="book image"/>
                </div>
                </>
                )
            
            })}
                              

           
       
        
    </section>
          

            )   
        }
    
}

export default BookContainer