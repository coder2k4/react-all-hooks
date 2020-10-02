import React, {useEffect, useRef, useState} from "react";
import {Button, Card, Container} from "react-bootstrap";

const UseRef = () => {


    const [counter, setCounter] = useState(0)
    const refCounter = useRef(0)
    const inputRef = useRef()
    const btnRef = useRef()
    const prevCounter = useRef(0)

    useEffect(() => {
        //setCounter(counter + 1) бесконечный ререндер компонента
        refCounter.current++
        console.log(inputRef.current)
    })

    useEffect(() => {
        prevCounter.current = counter
        console.log(prevCounter.current)
    }, [counter])

    function focus() {
        inputRef.current.focus()
    }

    return (
        <>
            <Container>
                <Card
                    bg='dark'
                    text='white'
                    style={{width: '100%'}}
                    className="my-5"
                >
                    <Card.Header>React Hook</Card.Header>
                    <Card.Body>
                        <Card.Title>useRef</Card.Title>
                        <Card.Text>
                            Как и стейт инициализирует не значение, а объект. Позволяет избежать бесконечного ререндер
                            компонента. При изменении не вызывает ререндер компонента.
                            Может получать ссылки на DOM элементы. Часто используются чтобы задавать фокус на элементы.
                            Так же используется для получения предыдущего State.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div>Счетчик: <strong>{refCounter.current}</strong></div>
                <div>Текущее: <strong>{counter}</strong></div>
                <div>Прошлое: <strong>{prevCounter.current}</strong></div>
                <input type="text" ref={inputRef} onChange={e => setCounter(e.target.value)} value={counter}/>
                <Button ref={btnRef} onClick={focus} className="ml-2">Focus Input plz</Button>
            </Container>
        </>
    )
}

export default UseRef