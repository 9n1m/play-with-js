import type { NextPage } from 'next'
import { update } from 'lodash'

function runDemo1() {
  debugger
  const object = { 'a': [{ 'b': { 'c': 3 } }] }

  const res1 = update(object, 'a[0].b.c', function (n) { return n * n })
  console.log(object)
  console.log(res1)

  const res2 = update(object, 'x[0].y.z', function (n) { return n ? n + 1 : 0 })
  console.log(object)
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>update</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
