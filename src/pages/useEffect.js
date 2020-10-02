import React, {useEffect, useState} from "react";
import {Button, Card, Container} from "react-bootstrap";
import {AlertContext} from "./useContext";

const UseEffect = () => {

    const [state, setState] = useState('Users')
    const [data, setData] = useState('Data')

    const [pos, setPos] = useState({x: 0, y: 0})

    // useEffect(()=> {
    //     console.log('useEffect Render')
    // })


    // Зависимость от state
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${state}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [state])


    const mouseMoveHandler = event => {
        setPos({x: event.clientX, y: event.clientY})
    }

    // сработает при первом рендере 1 раз
    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)

        // При удалении компонента, очищаем
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler) //
        }
    }, [])

    return <>
        <Container>
            <Card
                bg='dark'
                text='white'
                style={{width: '100%'}}
                className="my-5"
            >
                <Card.Header>React Hook</Card.Header>
                <Card.Body>
                    <Card.Title>useEffect</Card.Title>
                    <Card.Text>
                        Функция позволяющая работать с жизненным циклом компонентов.
                    </Card.Text>
                </Card.Body>
            </Card>
            <h3>{state}</h3>
            <Button variant="primary" onClick={() => setState('posts')}>posts</Button>{' '}
            <Button variant="primary" onClick={() => setState('comments')}>comments</Button>{' '}
            <Button variant="primary" onClick={() => setState('albums')}>albums</Button>{' '}
            <Button variant="primary" onClick={() => setState('photos')}>photos</Button>{' '}
            <Button variant="primary" onClick={() => setState('todos')}>todos</Button>{' '}

            <pre>
                {JSON.stringify(pos, null, 2)}
            </pre>


            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>


        </Container>
    </>
}


export default UseEffect