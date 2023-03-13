import React from "react";

interface Props {
  closePop: any;
};

const SampleModal = ({
  closePop
}: Props) => {
  return (
    <div>
      <h3>Sample</h3>
      <p>Sample Modal</p>
      <button type="button" onClick={closePop}>닫기</button>
    </div>
  );
};

export default SampleModal;