import React, { useState } from 'react'
import TodoList from './TodoList'
import Button from './Button'
import SampleModal from './SampleModal'
import TodoAddForm from './TodoAddForm'

const Todo = () => {
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false)

  const handleOnSubmit = () => {}

  return (
    <>
      <Button variants="add" onClick={() => setIsAddModalOpen(true)}>
        할 일 추가
      </Button>
      <TodoList />
      {isAddModalOpen && (
        <SampleModal onClose={() => setIsAddModalOpen(false)}>
          <TodoAddForm onSubmit={handleOnSubmit} />
        </SampleModal>
      )}
    </>
  )
}

export default Todo
