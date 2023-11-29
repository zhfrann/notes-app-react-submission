/* eslint-disable react/prop-types */
import Note from './Note'

const NotesList = ({ notes, deleteNoteHandler, changeArchiveHandler }) => {

    const notesActive = notes.filter((note) => !note.archived)

    return (
        <div className='notes-list'>
            <h2 className='notes-list-title'>Daftar Catatan</h2>

            <div className='notes-item-container'>
                {

                    notesActive.length < 1
                        ? <p>Catatan kosong</p>
                        : notesActive.map((note) => {
                            if (!note.archived) {
                                return (
                                    <Note key={note.id}
                                        id={note.id}
                                        title={note.title}
                                        createdAt={note.createdAt}
                                        body={note.body}
                                        archived={note.archived}
                                        deleteNoteHandler={deleteNoteHandler}
                                        changeArchiveHandler={changeArchiveHandler}
                                    />
                                )
                            }
                        })
                }
            </div>
        </div>
    )
}

export default NotesList