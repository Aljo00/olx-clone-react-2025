import React from 'react'
import ContentBox from './Contents/ContentBox'

const Content = () => {
  return (
    <div className="px-44">
        <h1 className='text-2xl font-medium mb-4'>Fresh recommendations</h1>
      <div className='flex flex-wrap gap-4'>
      {Array.from({ length: 18 }).map((_, index) => (
        <ContentBox key={index} />
      ))}
      </div>
    </div>
  )
}

export default Content
