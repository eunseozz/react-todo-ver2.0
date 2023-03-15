import React from 'react'
import ModalDimd from './ModalDimd'
import PortalModal from './PortalModal'

interface Props {
  saveData(): void
  closePop(): void
  title: string
}

const SampleModal = ({ saveData, closePop, title }: Props) => {
  return (
    <PortalModal>
      <div className="popup-wrap">
        <button type="button" className="popup-close" onClick={closePop}>
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
            type="submit"
            className="popup-btn"
            onSubmit={() => saveData()}
          >
            저장
          </button>
        </form>
      </div>
      <ModalDimd closePop={closePop} />
    </PortalModal>
  )
}

export default SampleModal
