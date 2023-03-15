import React, { useState } from 'react'
import SampleModal from './SampleModal'

interface TodoBtnProps {
  saveData(id?: number): void
  btnType: string
  title: string
  value?: string
  id?: number
}

const TodoBtn = ({
  saveData,
  btnType,
  title,
  value = '',
  id,
}: TodoBtnProps) => {
  const [isModalOpen, isOpen] = useState(false)

  const handleOpen = () => {
    isOpen(true)
  }

  const handleClose = () => {
    isOpen(false)
  }

  return (
    <>
      {btnType === '삭제' ? (
        <button type="button" onClick={() => saveData(id)}>
          {title}
        </button>
      ) : (
        <button type="button" onClick={handleOpen}>
          {title}
        </button>
      )}

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
