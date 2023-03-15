import React from 'react'
import TodoBtn from './TodoBtn'
import TodoList from './TodoList'

const Todo = () => {
  const handleSaveData = () => {}

  return (
    <>
      <TodoBtn
        onSubmit={handleSaveData}
        title="할 일 추가"
        btnType="추가"
        btnStyle="btn-type-01 gray"
      />
      <TodoList />
    </>
  )
}

export default Todo
