import type { NextPage } from 'next'
import { chunk } from 'lodash'

function runDemo1() {
  debugger
  const array = ['a', 'b', 'c', 'd']
  const newArray = chunk(array, 2)
  console.log(newArray)
}

function runDemo2() {
  debugger
  const array = ['a', 'b', 'c', 'd']
  const newArray = chunk(array, 3)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>chunk</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
