import React, { useState } from "react";
import PortalModal from "./PortalModal";
import SampleModal from "./SampleModal";
import TodoList from "./TodoList";

const Todo = () => {
    const [modalOpened, setModalOpened] = useState(false);
    
    const handleOpen = () => {
        setModalOpened(true);
    };
    
    const handleClose = () => {
        setModalOpened(false);
    }; 

    return (
        <>
            <button onClick={handleOpen}>Open Modal</button>
            <TodoList />
            {modalOpened && (
                <PortalModal>
                    <SampleModal closePop={handleClose}/>
                </PortalModal>
            )}            
        </>
    );
}

export default Todo;