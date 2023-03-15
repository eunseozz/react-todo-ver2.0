import React from 'react'

interface ModalDimdProps {
  onClose: any
}

const SampleModal = ({ onClose }: ModalDimdProps) => {
  return <div className="popup-dimd" onClick={onClose}></div>
}

export default SampleModal
