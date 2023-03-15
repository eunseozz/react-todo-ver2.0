import React, { useState } from 'react'
import SampleModal from './SampleModal'

interface TodoBtnProps {
  onSubmit(id?: number): void
  btnType: '추가' | '수정' | '삭제'
  title: string
  value?: string
  id?: number
  btnStyle: string
}

const TodoBtn = ({
  onSubmit,
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
        <button type="button" className={btnStyle} onClick={() => onSubmit(id)}>
          {title}
        </button>
      ) : (
        <button type="button" className={btnStyle} onClick={handleOpen}>
          {title}
        </button>
      )}

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
