import type { NextPage } from 'next'
import { intersectionWith, isEqual } from 'lodash'

function runDemo1() {
  debugger
  const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
  const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
  const newArray = intersectionWith(objects, others, isEqual)
  console.log(objects, others)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>intersectionWith</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
