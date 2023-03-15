import React, { useState } from 'react'
import SampleModal from './SampleModal'

interface TodoBtnProps {
  saveData(): void
  title: string
}

const TodoBtn = ({ saveData, title }: TodoBtnProps) => {
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
        <SampleModal saveData={saveData} title={title} closePop={handleClose} />
      )}
    </>
  )
}

export default TodoBtn
