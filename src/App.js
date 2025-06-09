import { useState } from "react";
import BookCreate from "./components/BookCreate";


function App ()
{
    const [books, setbooks] = useState([]);
    const createBook = (title) => 
    {
        const updatedBooks = [...books, { id: 123, title} ];
        setbooks(updatedBooks);
    };

    return (
        <div>
            <BookCreate onCreate = {createBook} />
        </div>
    )
}

export default App;