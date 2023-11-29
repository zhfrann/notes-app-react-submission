/* eslint-disable react/prop-types */
const Note = ({ id, title, body, createdAt, archived, deleteNoteHandler, changeArchiveHandler }) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    const date = new Date(createdAt).toLocaleDateString('id-ID', options)

    return (
        <div className='notes-item'>
            <h3 className='notes-title'>{title}</h3>
            <p className='notes-date'>{date}</p>
            <p className='notes-content'>{body}</p>
            <div className='notes-btn'>
                <button className='notes-btn-delete' onClick={() => deleteNoteHandler(id)}>Hapus</button>
                <button className='notes-btn-archive' onClick={() => changeArchiveHandler(id)}>{archived ? 'Batalkan Arsip' : 'Arsipkan'}</button>
            </div>
        </div>
    )
}

export default Note