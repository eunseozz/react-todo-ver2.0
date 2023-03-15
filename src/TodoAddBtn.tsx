import React, { useState } from 'react'
import SampleModal from './SampleModal'

const TodoAddBtn = () => {
  const [isModalOpen, isOpen] = useState(false)

  const handleOpen = () => {
    isOpen(true)
  }

  const handleClose = () => {
    isOpen(false)
  }

  const onSubmit = () => {}

  return (
    <>
      <button onClick={handleOpen}>추가</button>
      {isModalOpen && (
        <SampleModal onSubmit={onSubmit} title="추가" onClose={handleClose} />
      )}
    </>
  )
}

export default TodoAddBtn
