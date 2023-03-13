import React from "react";

interface TodoItemProps {
    //onClickUpdateButton(id: number): void;
    onClickDeleteButton(id: number): void;
    id: number,
    title: string
};

const TodoItem = ({
    //onClickUpdateButton,
    onClickDeleteButton,
    id,
    title
}: TodoItemProps) => {
    return (
        <>
           <li>
            {title}
            {/* <button type="button" onClick={(id) => onClickUpdateButton}>수정</button> */}
            <button type="button" onClick={() => onClickDeleteButton(id)}>삭제</button>
           </li>
        </>
    );
}

export default TodoItem;