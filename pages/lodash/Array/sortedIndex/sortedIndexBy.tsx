import type { NextPage } from 'next'
import { sortedIndexBy } from 'lodash'

function runDemo1() {
  debugger
  const array = [{ 'x': 4 }, { 'x': 5 }]
  const newArray = sortedIndexBy(array, { 'x': 4 }, o => o.x)
  console.log(array)
  console.log(newArray)
}

function runDemo2() {
  debugger
  const array = [{ 'x': 4 }, { 'x': 5 }]
  const newArray = sortedIndexBy(array, { 'x': 4 }, 'x')
  console.log(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>sortedIndex</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
