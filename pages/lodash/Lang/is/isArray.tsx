import type { NextPage } from 'next'
import { isArray, noop } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isArray([1, 2, 3])
  console.log(res1)

  const res2 = isArray(document.body.children)
  console.log(res2)

  const res3 = isArray('abc')
  console.log(res3)

  const res4 = isArray(noop)
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isArray</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
