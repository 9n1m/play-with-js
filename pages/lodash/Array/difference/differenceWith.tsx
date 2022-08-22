import type { NextPage } from 'next'
import { differenceWith, isEqual } from 'lodash'

function runDemo1() {
  debugger
  const array = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
  const newArray = differenceWith(array, [{ 'x': 1, 'y': 2 }], isEqual)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>differenceWith</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
