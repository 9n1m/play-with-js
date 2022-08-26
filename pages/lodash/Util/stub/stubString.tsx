import type { NextPage } from 'next'
import { stubString, times } from 'lodash'

function runDemo1() {
  debugger
  const arrays = times(2, stubString)

  console.log(arrays)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>stubString</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
