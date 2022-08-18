import type { NextPage } from 'next'
import { difference } from 'lodash'

function runDemo1() {
  debugger
  const array = [2, 1]
  const newArray = difference(array, [2, 3])
  console.log(array)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>difference</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
