import React from 'react'
import type { NextPage } from 'next'
import { stubObject, times } from 'lodash'

function runDemo1() {
  debugger
  const objects = times(2, stubObject)

  console.log(objects)

  console.log(objects[0] === objects[1])
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>stubObject</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
