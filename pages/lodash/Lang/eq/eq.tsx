import type { NextPage } from 'next'
import { eq } from 'lodash'

function runDemo1() {
  debugger
  const object = { 'a': 1 }
  const other = { 'a': 1 }

  const res1 = eq(object, object)
  console.log(res1)

  const res2 = eq(object, other)
  console.log(res2)

  const res3 = eq('a', 'a')
  console.log(res3)

  const res4 = eq('a', Object('a'))
  console.log(res4)

  const res5 = eq(NaN, NaN)
  console.log(res5)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>eq</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
