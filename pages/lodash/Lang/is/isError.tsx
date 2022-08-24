import type { NextPage } from 'next'
import { isError } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isError(new Error)
  console.log(res1)

  const res2 = isError(Error)
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isError</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
