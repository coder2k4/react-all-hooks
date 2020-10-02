import React, {useEffect, useState} from "react";
import {Card, Container} from "react-bootstrap";

// Кастомный хук на логирование изменений
function useLogger(value) {
    useEffect(() => {
        console.log(value)
    }, [value])
}

const UseOwnHooks = () => {

    const [value, setValue] = useState('')

    useLogger(value)


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
                    <Card.Title>Свой hook</Card.Title>
                    <Card.Text>
                        Чтобы создать свой хук, достаточно создать функцию начинающуюся со слова use...
                    </Card.Text>
                </Card.Body>
            </Card>

            <h3>{value}</h3>
            <input value={value} onChange={(e)=>setValue(e.target.value)}/>
        </Container>
    )
}


export default UseOwnHooks