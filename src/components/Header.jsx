// Source membuat live clock https://www.educative.io/answers/how-to-create-a-dynamic-digital-clock-in-react
import { useState, useEffect } from "react"

const Header = () => {
    const options = {
        second: 'numeric',
        minute: 'numeric',
        hour: 'numeric',
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }

    const [today, setToday] = useState(new Date().toLocaleString('id-ID', options))

    useEffect(() => {
        const intervalId = setInterval(() => {
            setToday(new Date().toLocaleString('id-ID', options))
        }, 1000)

        return () => clearInterval(intervalId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <header>
            <h1 className='title'>Notes <span className='title-app'>App</span></h1>
            <p className='date'>{today}</p>
        </header>
    )
}

export default Header