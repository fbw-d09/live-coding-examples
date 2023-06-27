import { Book } from "../Book/";

import './Books.css';

export const Books = ({ list }) =>
{
    return (
        <ul className="Books">
            {
                list.map((book) => {
                    return <Book key={ book.id } item={ book }/>
                })
            }
        </ul>
    )
}