import React from "react";

interface TodoItemProps {
    //onClickUpdateButton(id: number): void;
    // onClickDeleteButton(id: number): void;
    id: number,
    title: string
};

const TodoItem = ({
    //onClickUpdateButton,
    // onClickDeleteButton,
    id,
    title
}: TodoItemProps) => {
    return (
        <>
           <li>{title}</li> 
           {/* <button type="button" onClick={(id) => onClickUpdateButton}>수정</button> */}
           {/* <button type="button" onClick={(id) => onClickDeleteButton}>삭제</button> */}
        </>
    );
}

export default TodoItem;