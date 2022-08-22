import type { NextPage } from 'next'
import { uniqBy } from 'lodash'

function runDemo1() {
  debugger
  const newArray = uniqBy([2.1, 1.2, 2.3], Math.floor)
  console.log(newArray)
}

function runDemo2() {
  debugger
  const newArray = uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x')
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>uniqBy</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
