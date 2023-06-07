import React from 'react'

type Props = {
  params: {
    id: string
  }
}

const page = ({ params: { id } }: Props) => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <h1>Single Project page {id}</h1>
    </main>
  )
}

export default page
