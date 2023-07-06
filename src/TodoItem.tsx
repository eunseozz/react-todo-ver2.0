import React, { useState } from 'react'
import Button from './Button'
import SampleModal from './SampleModal'
import TodoUpdateForm from './TodoUpdateForm'

interface TodoItemProps {
  onClickDeleteButton(id: number): void
  onClickUpdateButton(id: number, title: string): void
  id: number
  title: string
}

const TodoItem = ({
  onClickDeleteButton,
  onClickUpdateButton,
  id,
  title,
}: TodoItemProps) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false)
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
          <TodoUpdateForm
            id={id}
            title={title}
            onSubmit={onClickUpdateButton}
            onClose={() => setIsUpdateModalOpen(false)}
          />
        </SampleModal>
      )}
    </>
  )
}

export default TodoItem
