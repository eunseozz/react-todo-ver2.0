import React, { useState } from 'react'
import SampleModal from './SampleModal'

interface TodoBtnProps {
  saveData(): void
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
          saveData={saveData}
          title={title}
          value={value}
          closePop={handleClose}
        />
      )}
    </>
  )
}

export default TodoBtn
