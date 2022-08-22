import type { NextPage } from 'next'
import { xor } from 'lodash'

function runDemo1() {
  debugger
  const newArray = xor([2, 1], [2, 3])
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>xor</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
