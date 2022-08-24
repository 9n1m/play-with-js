import type { NextPage } from 'next'
import { isEqual } from 'lodash'

function runDemo1() {
  debugger
  const object = { 'a': 1 }
  const other = { 'a': 1 }

  const res1 = isEqual(object, other)
  console.log(res1)

  const res2 = object === other
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isEqual</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
