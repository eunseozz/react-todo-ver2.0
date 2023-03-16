import React, { useState } from 'react'
import Button from './Button'
import SampleModal from './SampleModal'
import TodoUpdateForm from './TodoUpdateForm'

interface TodoItemProps {
  onClickDeleteButton(id: number): void
  id: number
  title: string
}

const TodoItem = ({ onClickDeleteButton, id, title }: TodoItemProps) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false)

  const handleOnSubmit = () => {}

  return (
    <>
      <li>
        <p>{title}</p>
        <div className="btn-wrap">
          <Button variants="update" onClick={() => setIsUpdateModalOpen(true)}>
            수정
          </Button>
          <Button
            variants="delete"
            onClick={() => {
              onClickDeleteButton(id)
            }}
          >
            삭제
          </Button>
        </div>
      </li>
      {isUpdateModalOpen && (
        <SampleModal onClose={() => setIsUpdateModalOpen(false)}>
          <TodoUpdateForm title={title} onSubmit={handleOnSubmit} />
        </SampleModal>
      )}
    </>
  )
}

export default TodoItem
