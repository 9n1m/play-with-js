import type { NextPage } from 'next'
import { take } from 'lodash'

function runDemo1() {
  debugger
  const array = [1, 2, 3]
  const newArray = take(array)
  console.log(newArray)
}

function runDemo2() {
  debugger
  const array = [1, 2, 3]
  const newArray = take(array, 2)
  console.log(newArray)
}

function runDemo3() {
  debugger
  const array = [1, 2, 3]
  const newArray = take(array, 5)
  console.log(newArray)
}

function runDemo4() {
  debugger
  const array = [1, 2, 3]
  const newArray = take(array, 0)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>take</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
        <button className='button is-primary' onClick={() => runDemo3()}>runDemo3</button>
        <button className='button is-primary' onClick={() => runDemo4()}>runDemo4</button>
      </div>
    </>
  )
}

export default Page
