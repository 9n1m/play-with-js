import type { NextPage } from 'next'
import { toArray } from 'lodash'

function runDemo1() {
  debugger
  const res1 = toArray({ 'a': 1, 'b': 2 })
  console.log(res1)

  const res2 = toArray('abc')
  console.log(res2)

  const res3 = toArray(1)
  console.log(res3)

  const res4 = toArray(null)
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>toArray</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
