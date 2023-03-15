import React from 'react'
import TodoBtn from './TodoBtn'

interface TodoItemProps {
  //onClickUpdateButton(id: number): void;
  onClickDeleteButton(id: number): void
  id: number
  title: string
}

const TodoItem = ({
  //onClickUpdateButton,
  onClickDeleteButton,
  id,
  title,
}: TodoItemProps) => {
  const handleSaveData = () => {}

  return (
    <>
      <li>
        {title}
        <TodoBtn saveData={handleSaveData} title="수정" value={title} />
        <button type="button" onClick={() => onClickDeleteButton(id)}>
          삭제
        </button>
      </li>
    </>
  )
}

export default TodoItem
