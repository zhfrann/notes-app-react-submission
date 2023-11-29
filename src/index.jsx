import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import CreateNote from './components/CreateNoteForm'
import { getInitialData } from './utils/notes'
import './style/style.css'
import NotesList from './components/NotesList'
import ArchiveList from './components/ArchiveList'
import FindNote from './components/FindNote'

class NotesAppContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getInitialData(),
            showNotes: getInitialData(),
            newNotes: {
                id: +new Date(),
                title: '',
                body: '',
                archived: false,
                createdAt: new Date().toISOString()
            },
            findNote: ''
        }

        this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this)
        this.onCreateNotesHandler = this.onCreateNotesHandler.bind(this)
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this)
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this)
        this.onChangeArchivedHandler = this.onChangeArchivedHandler.bind(this)
    }

    onTitleChangeHandler = (event) => {
        const inputLength = event.target.value.length
        const remainingAmount = 50 - inputLength

        if (remainingAmount < 1) {
            event.target.disabled = true
        }

        this.setState((prevState) => {
            return {
                newNotes: {
                    ...prevState.newNotes,
                    title: event.target.value
                }
            }
        })
    }

    onBodyChangeHandler = (event) => {
        this.setState((prevState) => {
            return {
                newNotes: {
                    ...prevState.newNotes,
                    body: event.target.value
                }
            }
        })
    }

    onCreateNotesHandler = (event) => {
        event.preventDefault()

        this.setState((prevState) => {
            return {
                newNotes: {
                    ...prevState.newNotes,
                    id: +new Date(),
                    archived: false,
                }
            }
        })

        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    { ...this.state.newNotes }
                ],
                showNotes: [
                    ...prevState.showNotes,
                    { ...this.state.newNotes }
                ]
            }
        })

        this.setState(() => {
            document.getElementById('title').disabled = false
            return {
                newNotes: {
                    id: +new Date(),
                    title: '',
                    body: '',
                    archived: false,
                    createdAt: new Date().toISOString()
                }
            }
        })
    }

    onDeleteNotesHandler = (id) => {
        this.setState((prevState) => {
            return {
                showNotes: prevState.showNotes.filter((note) => note.id !== id)
            }
        })
    }

    onChangeArchivedHandler = (id) => {
        const noteToChange = this.state.notes.find((note) => note.id === id)
        noteToChange.archived = !noteToChange.archived

        this.setState((prevState) => {
            return {
                showNotes: prevState.showNotes.map((note) => note.id === id ? noteToChange : note)
            }
        })
    }

    onChangeFindNoteHandler = (event) => {
        this.setState(() => {
            const notesCopied = this.state.notes.slice()

            if (event.target.value.length < 1) {
                return {
                    findNote: '',
                    showNotes: notesCopied
                }
            }

            return {
                findNote: event.target.value,
                showNotes: notesCopied.filter((note) => note.title.toLowerCase().includes(this.state.findNote.toLowerCase()))
            }
        })
    }

    render() {
        return (
            <div className=''>
                <section className='header-input'>
                    <div className='container'>
                        <Header />
                        <CreateNote createNoteHandler={this.onCreateNotesHandler}
                            newNote={this.state.newNotes}
                            titleChangeHandler={this.onTitleChangeHandler}
                            bodyChangeHandler={this.onBodyChangeHandler}
                        />
                        <FindNote findNote={this.state.findNote} changeFindNoteHandler={this.onChangeFindNoteHandler} />
                    </div>
                </section>
                <section className='notes'>
                    <div className='container'>
                        <NotesList notes={this.state.showNotes} notesFiltered={this.state.notesFiltered} deleteNoteHandler={this.onDeleteNotesHandler} changeArchiveHandler={this.onChangeArchivedHandler} />
                        <ArchiveList notes={this.state.showNotes} notesFiltered={this.state.notesFiltered} deleteNoteHandler={this.onDeleteNotesHandler} changeArchiveHandler={this.onChangeArchivedHandler} />
                    </div>
                </section>
            </div>
        )
    }
}

const root = createRoot(document.getElementById('root'))
root.render(<NotesAppContainer />)