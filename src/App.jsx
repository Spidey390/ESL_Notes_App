import { useState } from 'react'
import './App.css'

function App() {
  const [NoteTitle, setNoteTitle] = useState('');
  const [NoteContent, setNoteContent] = useState('');
  const [notes, setNotes] = useState([]);

  function handlesubmission(e) {
    e.preventDefault();
    if (!NoteTitle || !NoteContent) {
      alert("Fill all Inputs, Input fields cannot be empty");
    } else {
      setNotes([{ title: NoteTitle, content: NoteContent },...notes]);
      alert("Notes Added Successfully");
    }
  }
  return (
    <>
      <div>
        <h2>React Notes App</h2>
        <form onSubmit={handlesubmission}>
          <input type="text" placeholder='Type Your Notes Title Here' value={NoteTitle} onChange={(e) => setNoteTitle(e.target.value)} required/><br />
          <input type="textarea" placeholder='Type Your Notes' value={NoteContent} onChange={(e) => setNoteContent(e.target.value)} required/><br />
          <button type='submit' onSubmit={handlesubmission} >Add Notes</button>
        </form>
        <div>
          <h3>Notes:</h3>
          {notes.map((note, result) => (
            <div id={result} >
              <h4>{note.title}</h4>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App