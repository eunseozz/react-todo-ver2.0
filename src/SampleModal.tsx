import React, { useState } from 'react'
import ModalDimd from './ModalDimd'
import PortalModal from './PortalModal'

interface Props {
  onClose(): void
  children: any
}

const SampleModal = ({ onClose, children }: Props) => {
  return (
    <PortalModal>
      <div className="popup-wrap">
        <button type="button" className="popup-close" onClick={onClose}>
          닫기
        </button>
        {children}
      </div>
      <ModalDimd onClose={onClose} />
    </PortalModal>
  )
}

export default SampleModal
