import React, {useContext, useState} from "react";

const AlertContext = React.createContext(undefined)

// Сокращаем написание, и убираем привязку к AlertContext в компонентах
export const useAlert = () => {
    return useContext(AlertContext)
}


// Компонет эмулирующий AlertContext.Provider с логикой принадлежищей AlertContext
export const AlertProvider = ({children}) => {

    const [visible, setVisible] = useState(false)

    return (
        <AlertContext.Provider value={{
            visible,
            setVisible
        }}>
            {children}
        </AlertContext.Provider>
    )

}
