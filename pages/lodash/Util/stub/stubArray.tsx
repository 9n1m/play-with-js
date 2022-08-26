import type { NextPage } from 'next'
import { stubArray, times } from 'lodash'

function runDemo1() {
  debugger
  const arrays = times(2, stubArray)

  console.log(arrays)

  console.log(arrays[0] === arrays[1])
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>stubArray</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
