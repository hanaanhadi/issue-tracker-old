import { Text } from '@radix-ui/themes'
import React, { PropsWithChildren, ReactNode } from 'react'

interface props {
    children: ReactNode
}

const ErrorMessage = ({children}: PropsWithChildren) => {
  if  (!children) return null;
    return (
    <div>
      <Text color='red' as= "p">{children}</Text>
    </div>
  )
}


export default ErrorMessage
