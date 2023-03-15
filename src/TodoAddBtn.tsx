import React, { useState } from 'react'
import PortalModal from './PortalModal'
import SampleModal from './SampleModal'

const TodoAddBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpen = () => {
    setIsModalOpen(true)
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }
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
