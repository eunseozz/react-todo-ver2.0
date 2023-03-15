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

  return (
    <>
      <button onClick={handleOpen}>추가</button>
      {isModalOpen && <SampleModal closePop={handleClose} />}
    </>
  )
}

export default TodoAddBtn
