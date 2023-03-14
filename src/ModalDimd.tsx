import React from 'react'

interface ModalDimdProps {
  closePop: any
}

const SampleModal = ({ closePop }: ModalDimdProps) => {
  return <div className="popup-dimd" onClick={closePop}></div>
}

export default SampleModal
