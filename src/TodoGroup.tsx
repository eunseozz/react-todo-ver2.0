import React from "react";

interface TodoGroupProps {
    //onClickUpdateButton(id: number): void;
    //onClickDeleteButton(id: number): void;
    tasks: Array<dateObj>;
};

interface dateObj {
    date: string,
    todo: Array<ItemObj>;
}

interface ItemObj {
    id: number;
    title: string;
}

const TodoGroup = ({
    //onClickUpdateButton,
    //onClickDeleteButton,
    tasks,
}: TodoGroupProps) => {
    return (
        <li>
            {tasks.map(task => 
                <p>{task.date}</p>
                // {task.map(item => 
                //     <TodoItem />
                // )}
            )}
        </li>
    );
}

export default TodoGroup;