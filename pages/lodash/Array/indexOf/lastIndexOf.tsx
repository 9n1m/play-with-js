import type { NextPage } from 'next'
import { lastIndexOf } from 'lodash'

function runDemo1() {
  debugger
  const array = [1, 2, 1, 2]
  const newArray = lastIndexOf(array, 2)
  console.log(array)
  console.log(newArray)
}

function runDemo2() {
  debugger
  const array = [1, 2, 1, 2]
  const newArray = lastIndexOf(array, 2, 2)
  console.log(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>lastIndexOf</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
