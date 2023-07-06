import React, { useState } from 'react'
import TodoGroup from './TodoGroup'

const TodoList = () => {
  const [tasks, setTask] = useState([
    {
      date: '2023.03.07',
      todo: [
        {
          id: 1,
          title: '밥먹기',
        },
        {
          id: 2,
          title: '운동하기',
        },
      ],
    },
    {
      date: '2023.03.06',
      todo: [
        {
          id: 3,
          title: '친구만나기',
        },
      ],
    },
    {
      date: '2023.03.05',
      todo: [
        {
          id: 4,
          title: '공부하기',
        },
        {
          id: 5,
          title: '식단짜기',
        },
        {
          id: 6,
          title: '여행가기',
        },
      ],
    },
  ])

  const handleClickDeleteButton = (id: number) => {
    setTask((prev) =>
      prev
        .map(({ date, todo }) => ({
          date,
          todo: todo.filter((item) => item.id !== id),
        }))
        .filter((item) => item.todo.length !== 0)
    )
  }

  const handleClickUpdateButton = (id: number, title: string) => {
    setTask((prev) =>
      prev.map(({ date, todo }) => ({
        date,
        todo: todo.map((item) =>
          item.id === id ? { ...item, title: title } : item
        ),
      }))
    )
  }

  return (
    <ul className="todo-wrap">
      {tasks.map((task) => (
        <TodoGroup
          key={task.date}
          date={task.date}
          todo={task.todo}
          onClickUpdateButton={handleClickUpdateButton}
          onClickDeleteButton={handleClickDeleteButton}
        />
      ))}
    </ul>
  )
}

export default TodoList
