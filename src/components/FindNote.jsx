/* eslint-disable react/prop-types */
const FindNote = ({ findNote, changeFindNoteHandler }) => {
    return (
        <input className="find-note" type="text" name="find-note" id="find-note" value={findNote} onChange={changeFindNoteHandler} placeholder="Cari Note" />
    )
}

export default FindNote