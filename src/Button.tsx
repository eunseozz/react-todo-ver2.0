import React from 'react'

interface Props {
  variants: 'add' | 'update' | 'update-save' | 'delete'
  onClick?: React.MouseEventHandler
  className?: string
}

const clsx = (classNames: string[]) => classNames.join(' ')

const Button = ({
  children,
  variants,
  onClick,
  className,
}: React.PropsWithChildren<Props>) => {
  const buttonStyle = () => {
    switch (variants) {
      case 'add':
        return 'btn-type-01 gray'
      case 'update':
        return 'btn-type-02 yellow'
      case 'update-save':
        return 'btn-type-01 green'
      case 'delete':
        return 'btn-type-02 gray'
    }
  }

  return (
    <button
      className={clsx([buttonStyle(), className ?? ''])}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button
