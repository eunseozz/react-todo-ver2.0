import React, { useState } from 'react'

interface Props {
  title: string
  onSubmit(): void
}

const TodoUpdateForm = ({ title, onSubmit }: Props) => {
  const [inputText, setInputText] = useState(title)

  const inputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  return (
    <>
      <h3 className="popup-title">수정하기</h3>
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
          className="btn-type-01 green"
          onSubmit={() => onSubmit}
        >
          저장
        </button>
      </form>
    </>
  )
}

export default TodoUpdateForm
