import type { NextPage } from 'next'
import { pullAllBy } from 'lodash'

function runDemo1() {
  debugger
  const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }]
  const newArray = pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x')
  console.log(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>pullAllBy</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
