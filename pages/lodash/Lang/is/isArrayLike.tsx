import type { NextPage } from 'next'
import { isArrayLike, noop } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isArrayLike([1, 2, 3])
  console.log(res1)

  const res2 = isArrayLike(document.body.children)
  console.log(res2)

  const res3 = isArrayLike('abc')
  console.log(res3)

  const res4 = isArrayLike(noop)
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isArrayLike</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
