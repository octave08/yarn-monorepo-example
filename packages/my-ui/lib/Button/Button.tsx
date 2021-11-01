import React from 'react'

interface Props {
  onClick: () => void
  children: React.ReactNode
}

const Button: React.FC<Props> = ({ onClick, children, ...rest }: Props) => {
  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
