import type { NextPage } from 'next'
import { isFunction } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isFunction(isFunction)
  console.log(res1)

  const res2 = isFunction(/abc/)
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isFunction</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
