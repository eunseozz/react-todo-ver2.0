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

  const saveData = () => {}

  return (
    <>
      <button onClick={handleOpen}>추가</button>
      {isModalOpen && (
        <SampleModal saveData={saveData} title="추가" onClose={handleClose} />
      )}
    </>
  )
}

export default TodoAddBtn
