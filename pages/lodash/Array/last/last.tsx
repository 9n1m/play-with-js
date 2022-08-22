import type { NextPage } from 'next'
import { last } from 'lodash'

function runDemo1() {
  debugger
  const array = [1, 2, 3]
  const newArray = last(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>last</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
