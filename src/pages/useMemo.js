import React, {useEffect, useMemo, useState} from "react";
import {Button, Card, Container} from "react-bootstrap";

function complexCompute() {
    let i = 0
    console.log('computed')
    while (i < 999999999999) {
        i++
        return 5
    }
}

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [style, setStyle] = useState('black')

    useEffect(() => {
        console.log('Style!')
    }, [style])

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    //const compute = complexCompute()
    const compute = useMemo(() => complexCompute(), [count2]) // Реднерится только когда изменяется счетчик

    return (
        <Container>
            <Card
                bg='dark'
                text='white'
                style={{width: '100%'}}
                className="my-5"
            >
                <Card.Header>React Hook</Card.Header>
                <Card.Body>
                    <Card.Title>useMemo</Card.Title>
                    <Card.Text>
                        Такой же хук, как useCallback, служит для работы со значениями, объектами, а не функциями
                    </Card.Text>
                </Card.Body>
            </Card>
            <h4>Complex computed: {compute}</h4>
            <div><span className="text-primary pr-3 display-4">{count}</span></div>
            <Button variant="success" onClick={increment}>+</Button>{' '}
            <Button variant="primary" onClick={decrement}>-</Button>{' '}
        </Container>
    )
}

export default UseMemo