/* eslint-disable react/prop-types */
const CreateNote = ({ createNoteHandler, newNote, titleChangeHandler, bodyChangeHandler }) => {
    const inputLength = newNote.title.length
    const remainingAmount = 50 - inputLength

    return (
        <div className='create-note'>
            <h2 className="create-note-title" onSubmit={createNoteHandler}>Buat Catatan</h2>
            <form action='' className='form-note' onSubmit={createNoteHandler}>
                <label className='title-label' htmlFor='title'>Sisa karakter : {remainingAmount}</label>
                <input type='text' id='title' name='title' className='title' placeholder='Judul' value={newNote.title} onChange={titleChangeHandler} required />
                <textarea name='note' id='note' className='note' cols='30' rows='10' placeholder='Isi catatan' value={newNote.body} onChange={bodyChangeHandler} required></textarea>
                <button type='submit' className='btn-submit'>Tambah</button>
            </form>
        </div>
    )
}

export default CreateNote