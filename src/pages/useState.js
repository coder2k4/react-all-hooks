import React, {useState} from "react";
import {Button, Card, Container} from "react-bootstrap";

// Множественный вызов функции
function calcState() {
    console.log('I calculate state')
    return 0
}

const UseState = () => {

    //const [count, setCount] = useState(0)
    //const [count, setCount] = useState(calcState()) // Множественный вызов функции из-за ререндера
    const [count, setCount] = useState(() => calcState()) // Функция помогает оптимизировать многократный вывод

    // Разница стейта с объектами
    const [count2, setCount2] = useState({
        title: 'Счетчик',
        date: new Date()
    })


    function increment() {
        setCount(count + 1)
    }

    // Добавить сразу 2
    function increment2() {
        setCount((prevState) => prevState + 1)
        setCount((prevState) => prevState + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    // Работа с объектами
    function changeTitle() {
        setCount2({...count2, title: 'New title'})
        console.log('change title')
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
                        <Card.Title>useState</Card.Title>
                        <Card.Text>
                            Возвращает значение с состоянием и функцию для его обновления.
                            (массив - кортеж заранее определенных элементов, 1 элемент - значение, 2 функция).
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div><span className="text-primary pr-3 display-4">{count}</span></div>
                <Button variant="success" onClick={increment}>+</Button>{' '}
                <Button variant="success" onClick={increment2}>+2</Button>{' '}
                <Button variant="primary" onClick={decrement}>-</Button>{' '}
            </Container>
            <Container>
                <h2 className="pt-3">Counter 2:</h2>
                <pre>{JSON.stringify(count2, null, 2)}</pre>
                <Button variant="success" onClick={changeTitle}>Change TITLE</Button>{' '}
            </Container>
        </>
    )
}

export default UseState