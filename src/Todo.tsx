import React, { useRef, useState } from 'react'
import TodoList from './TodoList'
import Button from './Button'
import SampleModal from './SampleModal'
import TodoAddForm from './TodoAddForm'

const Todo = () => {
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
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false)
  const itemId = useRef(7)

  const handleOnSubmit = (title: string) => {
    let newItem
    const beforeAddArray = tasks.filter((task) => task.date === getToday())

    if (beforeAddArray.length > 0) {
      newItem = [
        {
          id: itemId.current,
          title: title,
        },
      ]
      const newObj = [...newItem, ...beforeAddArray[0].todo]
      setTask((prev) =>
        prev.map((task) =>
          task.date === getToday()
            ? {
                date: task.date,
                todo: newObj,
              }
            : {
                date: task.date,
                todo: task.todo,
              }
        )
      )
    } else {
      newItem = [
        {
          date: getToday(),
          todo: [
            {
              id: itemId.current,
              title: title,
            },
          ],
        },
      ]
      setTask([...newItem, ...tasks])
    }

    itemId.current += 1
    setIsAddModalOpen(false)
  }

  const getToday = () => {
    var date = new Date()
    var year = date.getFullYear()
    var month = ('0' + (1 + date.getMonth())).slice(-2)
    var day = ('0' + date.getDate()).slice(-2)

    return year + '.' + month + '.' + day
  }

  return (
    <>
      <Button variants="add" onClick={() => setIsAddModalOpen(true)}>
        할 일 추가
      </Button>
      <TodoList tasks={tasks} setTask={setTask} />
      {isAddModalOpen && (
        <SampleModal onClose={() => setIsAddModalOpen(false)}>
          <TodoAddForm onSubmit={handleOnSubmit} />
        </SampleModal>
      )}
    </>
  )
}

export default Todo
