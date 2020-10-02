import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
// Бутсрап стили
import 'bootstrap/dist/css/bootstrap.css'
import UseState from "./pages/useState";
import Header from "./components/Header";
import UseEffect from "./pages/useEffect";
import UseRef from "./pages/useRef";
import UseMemo from "./pages/useMemo";
import UseCallback from "./pages/useCallback";
import UseContext from "./pages/useContext";
import UseReducer from "./pages/useReducer";
import UseOwnHooks from "./pages/useOwnHooks";
import {Table,ListGroup, Card, Container} from "react-bootstrap";

function App() {


    return <>
        <BrowserRouter>
            <Header/>
            <Route path="/" exact render={() => (
                <Container>
                    <Card
                        bg='dark'
                        text='white'
                        style={{width: '100%'}}
                        className="my-5"
                    >
                        <Card.Header>Информацию по Hook'ам Ректа!</Card.Header>
                        <Card.Body>
                            <Card.Title>Все что нужно знать, с примерами.</Card.Title>
                            <Card.Text>
                                <p>Хуки - это особенная функция в React, которая позволяет использовать State,
                                    реагировать
                                    на события жизненного цикла, получать доступ к значениям из контекста и все это не
                                    используя компоненты - классы. Появились в 16.8 (февраль 2019)</p>

                                Две причины, почему добавили хуки:

                                <ListGroup>
                                    <ListGroup.Item variant="dark">1 - ООП. Сложное понимание this. Чтобы не использовать классы.
                                        Упрощение
                                        вхождения.
                                    </ListGroup.Item>
                                    <ListGroup.Item variant="dark">2 - HOC - Компоненты высшего порядка - их использование может сильно
                                        усложнить
                                        процесс разработки, т.к. увеличивает количество компонентов -
                                        оберток</ListGroup.Item>
                                </ListGroup>
                                <p className="mt-3">Хуки нельзя вызывать:</p>
                                <Table striped bordered hover variant="dark">
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>в условии</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>в цикле</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>вне react компонента</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>в классах react компонентов</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            )}/>
            <Route path="/useState" component={UseState}/>
            <Route path="/useEffect" component={UseEffect}/>
            <Route path="/useRef" component={UseRef}/>
            <Route path="/useMemo" component={UseMemo}/>
            <Route path="/useCallback" component={UseCallback}/>
            <Route path="/useContext" component={UseContext}/>
            <Route path="/useReducer" component={UseReducer}/>
            <Route path="/useOwnHooks" component={UseOwnHooks}/>
        </BrowserRouter>
    </>
}

export default App;
