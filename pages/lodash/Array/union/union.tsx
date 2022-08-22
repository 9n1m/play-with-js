import type { NextPage } from 'next'
import { union } from 'lodash'

function runDemo1() {
  debugger
  const arrays = [[2], [1, 2]]
  const newArray = union(...arrays)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>union</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
