import React, { useState } from 'react'
import Button from './Button'

interface Props {
  id: number
  title: string
  onSubmit(id: number, title: string): void
  onClose(): void
}

const TodoUpdateForm = ({ id, title, onSubmit, onClose }: Props) => {
  const [inputText, setInputText] = useState(title)

  const inputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const onAction = () => {
    onClose()
    onSubmit(id, inputText)
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
        <Button variants="update-save" onClick={() => onAction()}>
          저장
        </Button>
      </form>
    </>
  )
}

export default TodoUpdateForm
