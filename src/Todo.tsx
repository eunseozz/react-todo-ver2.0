import React from 'react'
import TodoList from './TodoList'
import Button from './Button'
import SampleModal from './SampleModal'

const Todo = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button variants="add" onClick={() => setIsOpen(true)}>
        할 일 추가
      </Button>
      <TodoList />
      {isOpen && <SampleModal />}
    </>
  )
}

export default Todo
