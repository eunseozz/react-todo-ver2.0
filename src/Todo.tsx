import React from 'react'
import TodoBtn from './TodoBtn'
import TodoList from './TodoList'

const Todo = () => {
  const handleSaveData = () => {}

  return (
    <>
      <TodoBtn saveData={handleSaveData} title="할 일 추가" btnType="add" />
      <TodoList />
    </>
  )
}

export default Todo
