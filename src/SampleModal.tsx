import React from 'react'
import ModalDimd from './ModalDimd'
import PortalModal from './PortalModal'

interface Props {
  closePop: any
}

const SampleModal = ({ closePop }: Props) => {
  return (
    <PortalModal>
      <div className="popup-wrap">
        <button type="button" className="popup-close" onClick={closePop}>
          X
        </button>
        <h3 className="popup-title">추가하기</h3>
        <input
          type="text"
          className="popup-input"
          placeholder="내용을 입력해주세요."
        />
        <button type="button" className="popup-btn">
          저장
        </button>
      </div>
      <ModalDimd closePop={closePop} />
    </PortalModal>
  )
}

export default SampleModal
