import type { NextPage } from 'next'
import { pullAllWith, isEqual } from 'lodash'

function runDemo1() {
  debugger
  const array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }]
  const newArray = pullAllWith(array, [{ 'x': 3, 'y': 4 }], isEqual)
  console.log(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>pullAllWith</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
