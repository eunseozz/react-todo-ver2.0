import React from 'react'
import ModalDimd from './ModalDimd'
import PortalModal from './PortalModal'

interface Props {
  saveData(): void
  onClose(): void
  title: string
}

const SampleModal = ({ saveData, onClose, title }: Props) => {
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
          />
          <button
            type="button"
            className="popup-btn"
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
