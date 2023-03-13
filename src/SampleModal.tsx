import React from "react";

interface SampleModalProps {
  closePop: any;
};

const SampleModal = ({
  closePop
}: SampleModalProps) => {
  return (
    <div className="popup-wrap">
        <button type="button" className="popup-close" onClick={closePop}>X</button>
        <h3 className="popup-title">추가하기</h3>
        <input type="text" className="popup-input" placeholder="내용을 입력해주세요." />
        <button type="button" className="popup-btn">저장</button>
    </div>
  );
};

export default SampleModal;