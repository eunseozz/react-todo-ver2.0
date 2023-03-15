import React, { useState } from 'react'
import ModalDimd from './ModalDimd'
import PortalModal from './PortalModal'

interface Props {
  saveData(): void
  closePop(): void
  title: string
  value?: string
}

const SampleModal = ({ saveData, closePop, title, value = '' }: Props) => {
  const [inputText, setInputText] = useState(value)

  const inputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }
  
  return (
    <PortalModal>
      <div className="popup-wrap">
        <button type="button" className="popup-close" onClick={onClose}>
          X
        </button>
        <h3 className="popup-title">{title}하기</h3>
        <form action="post">
          <input
            type="text"
            className="popup-input"
            placeholder="내용을 입력해주세요."
            value={inputText}
            onChange={(e) => inputTextChange(e)}
          />
          <button
            type="button"
            className="btn-type-01"
            onSubmit={() => saveData()}
          >
            저장
          </button>
        </form>
      </div>
      <ModalDimd onClose={onClose} />
    </PortalModal>
  )
}

export default SampleModal
