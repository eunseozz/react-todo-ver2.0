import React from "react";

interface SampleModalProps {
  closePop: any;
};

const SampleModal = ({
  closePop
}: SampleModalProps) => {
  return (
    <div>
      <h3>Sample</h3>
      <p>Sample Modal</p>
      <button type="button" onClick={closePop}>닫기</button>
    </div>
  );
};

export default SampleModal;