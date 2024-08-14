import React from 'react'

export interface TypingTestProps extends React.HTMLAttributes<HTMLDivElement>{
  
}

const TypingTest: React.FC<TypingTestProps> = ({ className,...props }) => {
  return (
    <div {...props} className={' h-full '+className}>
      TypingTest
    </div>
  )
}

export default TypingTest;