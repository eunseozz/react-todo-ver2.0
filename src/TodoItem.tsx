import React from 'react'
import TodoBtn from './TodoBtn'
import Button from './Button'
import SampleModal from './SampleModal'

interface TodoItemProps {
  onClickDeleteButton(id: number): void
  id: number
  title: string
}

const TodoItem = ({ onClickDeleteButton, id, title }: TodoItemProps) => {
  const handleOnSubmit = () => {}

  const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false)

  return (
    <>
      <li>
        <p>{title}</p>
        <div className="btn-wrap">
          <Button variants="update" onClick={() => setIsUpdateModalOpen(true)}>
            수정
          </Button>
          <Button variants="delete" onClick={() => {}}>
            삭제
          </Button>
        </div>
      </li>
      {isUpdateModalOpen && (
        <SampleModal>
          <form>
            <input />
          </form>
        </SampleModal>
      )}
    </>
  )
}

export default TodoItem
