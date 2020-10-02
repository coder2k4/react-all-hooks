import React, {useCallback, useState} from "react";
import {Button, Card, Container} from "react-bootstrap";
import ItemList from "../components/ItemsList";

const UseCallback = () => {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(0)

    const style = {
        color: colored ? 'darkred' : 'black'
    }


    // Effect called и при смене цвета
    // const generateItems = () => {
    //     return new Array(count).fill('').map((_,i)=>`Элемент №${i+1}`)
    // }


    // Effect called только при смене count
    const generateItems = useCallback(
        () => {
            return new Array(count).fill('').map((_, i) => `Элемент №${i + 1}`)
        }, [count])


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
                    <Card.Title>useCallback</Card.Title>
                    <Card.Text>
                        Cлужит для предотвращения повторных вычислений. Если отслеживаемые параметры не были изменены,
                        возвращает ту же функцию, а не создает новую
                    </Card.Text>
                </Card.Body>
            </Card>

            <h3 style={style}>Количество элементов: {count}</h3>
            <Button variant="success" onClick={() => setCount(prev => prev + 1)}>count</Button>{' '}
            <Button variant="primary" onClick={() => setColored(prev => !prev)}>color</Button>{' '}
            <hr/>
            <ItemList getItems={generateItems}/>

        </Container>
    )
}

export default UseCallback