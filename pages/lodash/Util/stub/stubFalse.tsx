import type { NextPage } from 'next'
import { stubFalse, times } from 'lodash'

function runDemo1() {
  debugger
  const arrays = times(2, stubFalse)

  console.log(arrays)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>stubFalse</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
