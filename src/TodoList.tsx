import React from 'react'
import TodoGroup from './TodoGroup'

interface Props {
  tasks: Array<GroupObj>
  setTask: React.Dispatch<React.SetStateAction<Array<GroupObj>>>
}

interface GroupObj {
  date: string
  todo: Array<ItemObj>
}

interface ItemObj {
  id: number
  title: string
}

const TodoList = ({ tasks, setTask }: Props) => {
  const handleClickDeleteButton = (id: number) => {
    setTask((prev) =>
      prev
        .map((task) => ({
          date: task.date,
          todo: task.todo.filter((item) => item.id !== id),
        }))
        .filter((item) => item.todo.length !== 0)
    )
  }

  return (
    <ul className="todo-wrap">
      {tasks.map((task) => (
        <TodoGroup
          key={task.date}
          date={task.date}
          todo={task.todo}
          //onClickUpdateButton={handleClickUpdateButton}
          onClickDeleteButton={handleClickDeleteButton}
        />
      ))}
    </ul>
  )
}

export default TodoList
