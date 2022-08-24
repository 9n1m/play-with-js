import type { NextPage } from 'next'
import { isObject, noop } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isObject({})
  console.log(res1)

  const res2 = isObject([1, 2, 3])
  console.log(res2)

  const res3 = isObject(noop)
  console.log(res3)

  const res4 = isObject(null)
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isObject</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
