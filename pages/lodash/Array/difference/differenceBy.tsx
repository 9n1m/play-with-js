import type { NextPage } from 'next'
import { differenceBy } from 'lodash'

function runDemo1() {
  debugger
  const array = [2.1, 1.2]
  const newArray = differenceBy(array, [2.3, 3.4], Math.floor)
  console.log(array)
  console.log(newArray)
}

function runDemo2() {
  debugger
  const array = [{ 'x': 2 }, { 'x': 1 }]
  const newArray = differenceBy(array, [{ 'x': 1 }], 'x')
  console.log(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>differenceBy</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
