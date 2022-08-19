import type { NextPage } from 'next'
import { fill } from 'lodash'

function runDemo1() {
  debugger
  const array = [1, 2, 3]
  const newArray = fill(array, 'a')
  console.log(array)
  console.log(newArray)
}

function runDemo2() {
  debugger
  const array = Array(3)
  const newArray = fill(array, 2)
  console.log(array)
  console.log(newArray)
}

function runDemo3() {
  debugger
  const array = [4, 6, 8, 10]
  const newArray = fill(array, '*', 1, 3)
  console.log(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>fill</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
        <button className='button is-primary' onClick={() => runDemo3()}>runDemo3</button>
      </div>
    </>
  )
}

export default Page
