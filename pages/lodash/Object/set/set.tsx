import type { NextPage } from 'next'
import { set } from 'lodash'

function runDemo1() {
  debugger
  const object = { 'a': [{ 'b': { 'c': 3 } }] }

  const res1 = set(object, 'a[0].b.c', 4)
  console.log(object)
  console.log(res1)

  const res2 = set(object, ['x', '0', 'y', 'z'], 5)
  console.log(object)
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>set</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
