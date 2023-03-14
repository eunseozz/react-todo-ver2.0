import React from 'react'
import TodoItem from './TodoItem'

interface TodoGroupProps {
  //onClickUpdateButton(id: number): void;
  onClickDeleteButton(id: number): void
  date: string
  todo: Array<ItemObj>
}

interface ItemObj {
  id: number
  title: string
}

const TodoGroup = ({
  //onClickUpdateButton,
  onClickDeleteButton,
  date,
  todo,
}: TodoGroupProps) => {
  return (
    <li>
      <p>
        <span>{date}</span>
      </p>
      <ul>
        {todo.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            onClickDeleteButton={onClickDeleteButton}
          />
        ))}
      </ul>
    </li>
  )
}

export default TodoGroup
