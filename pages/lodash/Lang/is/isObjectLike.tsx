import type { NextPage } from 'next'
import { isObjectLike, noop } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isObjectLike({})
  console.log(res1)

  const res2 = isObjectLike([1, 2, 3])
  console.log(res2)

  const res3 = isObjectLike(noop)
  console.log(res3)

  const res4 = isObjectLike(null)
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isObjectLike</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
