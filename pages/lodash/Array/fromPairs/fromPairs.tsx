import type { NextPage } from 'next'
import { fromPairs } from 'lodash'

function runDemo1() {
  debugger
  const array = [['a', 1], ['b', 2]]
  const newArray = fromPairs(array)
  console.log(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>fromPairs</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
