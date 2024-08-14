import React from 'react'

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement>{
  
}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <div className='h-20 flex px-10 items-center bg-card' {...props}>
      <p className=' font-semibold text-xl'>
        CrazyTyping
      </p>
    </div>
  )
}

export default Header;