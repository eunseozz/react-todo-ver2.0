import React, { useState } from 'react'
import SampleModal from './SampleModal'

interface TodoBtnProps {
  saveData(id?: number): void
  btnType: '추가' | '수정' | '삭제'
  title: string
  value?: string
  id?: number
  btnStyle: string
}

const TodoBtn = ({
  saveData,
  btnType,
  title,
  value = '',
  id,
  btnStyle,
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
        <button type="button" className={btnStyle} onClick={() => saveData(id)}>
          {title}
        </button>
      ) : (
        <button type="button" className={btnStyle} onClick={handleOpen}>
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
