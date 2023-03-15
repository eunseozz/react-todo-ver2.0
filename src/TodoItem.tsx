import React from 'react'
import TodoBtn from './TodoBtn'

interface TodoItemProps {
  onClickDeleteButton(id: number): void
  id: number
  title: string
}

const TodoItem = ({ onClickDeleteButton, id, title }: TodoItemProps) => {
  const handleSaveData = () => {}

  return (
    <>
      <li>
        <p>{title}</p>
        <div className="btn-wrap">
          <TodoBtn
            saveData={handleSaveData}
            title="수정"
            value={title}
            btnType="수정"
          />
          <TodoBtn
            saveData={onClickDeleteButton}
            id={id}
            title="삭제"
            btnType="삭제"
          />
        </div>
      </li>
    </>
  )
}

export default TodoItem
