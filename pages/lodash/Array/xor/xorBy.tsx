import type { NextPage } from 'next'
import { xorBy } from 'lodash'

function runDemo1() {
  debugger
  const arrays = [[2.1, 1.2], [2.3, 3.4]]
  const newArray = xorBy(arrays[0], arrays[1], Math.floor)
  console.log(newArray)
}

function runDemo2() {
  debugger
  const arrays = [[{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }]]
  const newArray = xorBy(arrays[0], arrays[1], 'x')
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>xorBy</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
