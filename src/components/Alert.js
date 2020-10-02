import React, {useContext, useState} from "react";
import {Alert} from "react-bootstrap"
import {AlertContext} from "../pages/useContext";

const CustomAlert = (props) => {

    const alert = useContext(AlertContext)

    if (!alert) return null

    return  <Alert variant="danger" dismissible onClick={props.close}>
                <Alert.Heading>useContext!</Alert.Heading>
                <p>
                    Принимает объект контекста (значение, возвращённое из React.createContext и возвращает текущее значение контекста для
                    этого контекста. Текущее значение контекста определяется зачением value ближайшего MyContext.Provider над вызывающим компонентом в дереве!
                </p>
            </Alert>


}

export default CustomAlert