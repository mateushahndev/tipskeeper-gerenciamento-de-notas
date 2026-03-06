import Note from './Note';
import Form from './Form';
import { useState } from 'react';

export default function Main() {

    const [data, setData] = useState({
        title: '',
        content: ''
    })

    const [notes, setNotes] = useState([]);

    function handleChange(e) {

        const {value, name} = e.target;

        setData((datas) => {

            return {
                ...datas,
                [name]: value
            }
        })
    }

    function addNote(e) {

        e.preventDefault();
        setNotes(notes => {

            return [...notes, data];
        })
        
        setData(_ => {

            return {
                title: '',
                content: ''
            }
        })
    }

    function deleteNote(id) {

        setNotes(notes => {

            return notes.filter((note, i) => {
                return i != id
            })
        }) 
    }

    return (
        <main>
            <Form nameContent="content" nameTitle="title" onClick={addNote} onChange={handleChange} titleValue={data.title} contentValue={data.content} />
            <div>
                {notes.map((note, i) => <Note key={i} id={i} title={note.title} content={note.content} onClick={deleteNote} />)}
            </div>
        </main>
    )
}