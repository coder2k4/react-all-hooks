import React, {createContext, useState} from "react";
import {Button, Card, Container} from "react-bootstrap";
import CustomAlert from "../components/Alert";


export const AlertContext = React.createContext(undefined)

const UseContext = () => {

    const [alert, setAlert] = useState(false)


    return (
        <Container>
            <AlertContext.Provider value={alert}>
                <Card
                    bg='dark'
                    text='white'
                    style={{width: '100%'}}
                    className="my-5"
                >
                    <Card.Header>React Hook</Card.Header>
                    <Card.Body>
                        <Card.Title>useContext</Card.Title>
                        <Card.Text>
                            Принимает объект контекста (значение, возвращённое из React.createContext и возвращает
                            текущее значение контекста для этого контекста. Текущее значение контекста определяется
                            пропом value ближайшего MyContext.Provider над вызывающим компонентом в дереве.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <CustomAlert close={() => {
                    setAlert(false)
                }}/>
                <Button onClick={() => setAlert(prevState => !prevState)}>Call alert!</Button>
            </AlertContext.Provider>
        </Container>
)
}


export default UseContext