import React, { useState } from 'react'

interface Props {
  onSubmit(title: string): void
}

const TodoAddForm = ({ onSubmit }: Props) => {
  const [inputText, setInputText] = useState('')

  const inputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  return (
    <>
      <h3 className="popup-title">추가하기</h3>
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
          onClick={() => onSubmit(inputText)}
        >
          저장
        </button>
      </form>
    </>
  )
}

export default TodoAddForm
