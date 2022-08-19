import type { NextPage } from 'next'
import { intersectionBy } from 'lodash'

function runDemo1() {
  debugger
  const arrays = [[2.1, 1.2], [4.3, 2.4]]
  const newArray = intersectionBy(...arrays, Math.floor)
  console.log(arrays)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>intersectionBy</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
