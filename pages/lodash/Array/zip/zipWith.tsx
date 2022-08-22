import type { NextPage } from 'next'
import { zipWith } from 'lodash'

function runDemo1() {
  debugger
  const arrays = [[1, 2], [10, 20], [100, 200]]
  const newArray = zipWith(...arrays, (a, b, c) => a + b + c)
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>zipWith</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
