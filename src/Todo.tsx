import React from 'react'
import TodoBtn from './TodoBtn'
import TodoList from './TodoList'

const Todo = () => {
  const handleSaveData = () => {}

  return (
    <>
      <TodoBtn onSubmit={handleSaveData} title="추가" />
      <TodoList />
    </>
  )
}

export default Todo
