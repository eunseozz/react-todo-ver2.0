import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface Props {
  onSubmit(title: string): void
}

interface IFormData {
  title: string
}

const TodoAddForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>()

  const onAction = (data: any) => {
    onSubmit(data.title)
  }

  return (
    <>
      <h3 className="popup-title">추가하기</h3>
      <form onSubmit={handleSubmit(onAction)}>
        <input
          className="popup-input"
          {...register('title', {
            required: '내용을 입력해주세요',
            minLength: {
              value: 10,
              message: '10자이상 입력해주세요',
            },
          })}
          placeholder="내용"
        />
        <span className="error-msg">{errors?.title?.message}</span>
        <button type="submit" className="btn-type-01 green">
          저장
        </button>
      </form>
    </>
  )
}

export default TodoAddForm
