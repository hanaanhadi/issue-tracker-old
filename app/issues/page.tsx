import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssuesPage = () => {
  return (
    <div>
      <div>
        <Button><Link href="/issues/new">New Issue</Link></Button>
      </div>
    </div>
  )
}

export default IssuesPage
