import React, {useReducer} from "react";
import {Card, Container, Button} from "react-bootstrap";
import {counterReducer} from "../reducers/counterReducer";


const UseReducer = () => {

    const [state, dispatch] = useReducer(counterReducer, {
        count: 0
    })

    const inc = () => dispatch({type: 'inc'})
    const dec = () => dispatch({type: 'dec'})

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
                    <Card.Title>useReducer</Card.Title>
                    <Card.Text>
                        Альтернатива для useState. Принимает редюсер типа (state, action) => newState и возвращает
                        текущее состояние в паре с методом dispatch
                    </Card.Text>
                </Card.Body>
            </Card>

            <h3>{state.count}</h3>
            <Button onClick={inc}>+</Button>
            <Button onClick={dec}>-</Button>
        </Container>
    )
}

export default UseReducer