/* eslint-disable react/prop-types */
import Note from './Note'

const ArchiveList = ({ notes, deleteNoteHandler, changeArchiveHandler }) => {

    const notesArchived = notes.filter((note) => note.archived)

    return (
        <div className='notes-list archive'>
            <h2 className='notes-list-title'>Catatan Arsip</h2>

            <div className='notes-item-container'>
                {
                    notesArchived.length < 1
                        ? <p>Catatan Kosong</p>
                        : notesArchived.map((note) => {
                            if (note.archived) {
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

export default ArchiveList