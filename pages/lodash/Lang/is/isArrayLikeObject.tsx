import type { NextPage } from 'next'
import { isArrayLikeObject, noop } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isArrayLikeObject([1, 2, 3])
  console.log(res1)

  const res2 = isArrayLikeObject(document.body.children)
  console.log(res2)

  const res3 = isArrayLikeObject('abc')
  console.log(res3)

  const res4 = isArrayLikeObject(noop)
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isArrayLikeObject</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
