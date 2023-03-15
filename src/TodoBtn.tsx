import React, { useState } from 'react'
import SampleModal from './SampleModal'

interface TodoBtnProps {
  onSubmit(): void
  title: string
  value?: string
}

const TodoBtn = ({ saveData, title, value = '' }: TodoBtnProps) => {
  const [isModalOpen, isOpen] = useState(false)

  const handleOpen = () => {
    isOpen(true)
  }

  const handleClose = () => {
    isOpen(false)
  }

  return (
    <>
      <button onClick={handleOpen}>{title}</button>
      {isModalOpen && (
        <SampleModal
          onSubmit={onSubmit}
          title={title}
          value={value}
          onClose={handleClose}
        />
      )}
    </>
  )
}

export default TodoBtn
