import React, { useState } from 'react'

import PortalModal from './PortalModal'
import SampleModal from './SampleModal'
import TodoList from './TodoList'

const Todo = () => {
  const [isModalOpen, isOpen] = useState(false)

  const handleOpen = () => {
    isOpen(true)
  }

  const handleClose = () => {
    isOpen(false)
  }

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <TodoList />
      {isModalOpen && (
        <PortalModal>
          <SampleModal closePop={handleClose} />
        </PortalModal>
      )}
    </>
  )
}

export default Todo
