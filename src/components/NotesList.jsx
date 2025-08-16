'use client'

import notelist from "../assets/notelist.png";
import user from "../assets/user-icon.png";
import "../styles/noteslist.css";

export default function NotesList() {
  const notes = [
    {
      id: 1,
      type: 'Note',
      status: 'To Do',
      content: 'Lorem dolore sit et auto cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
      user: 'John Doe',
      date: 'Jul 12, 2023, 11:54 am',
      associations: 1
    },
    {
      id: 2,
      type: 'Note',
      status: 'To Do',
      content: 'Lorem dolore sit et auto cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
      user: 'John Doe',
      date: 'Jul 12, 2023, 11:54 am',
      associations: 1
    },
    {
      id: 3,
      type: 'Note',
      status: 'To Do',
      content: 'Lorem dolore sit et auto cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
      user: 'John Doe',
      date: 'Jul 12, 2023, 11:54 am',
      associations: 1
    }
  ];

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <div className="note-row">
            <div className="note-main">
              <div className="note-header">
                <span className="note-icon-wrap">
                  <img src={notelist} alt="icon" className="notelist-icon" />
                </span>
                <span className="note-type">{note.type}</span>
                <span className="note-status">{note.status}</span>
              </div>

              <p className="note-content">{note.content}</p>

              <span className="note-assoc">
                {note.associations} Association(s)
              </span>

              <div className="note-meta">
                <div className="note-user">
                  <span className="user-icon"><img src={user} alt="icon" width={15} /></span>
                  <span className="note-userlist">{note.user}</span>
                </div>
                <span className="note-date">{note.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
