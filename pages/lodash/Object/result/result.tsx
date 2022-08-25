import type { NextPage } from 'next'
import { constant, result } from 'lodash'

function runDemo1() {
  debugger
  const object = { 'a': [{ 'b': { 'c1': 3, 'c2': constant(4) } }] }

  const res1 = result(object, 'a[0].b.c1')
  console.log(res1)

  const res2 = result(object, 'a[0].b.c2')
  console.log(res2)

  const res3 = result(object, 'a[0].b.c3', 'default')
  console.log(res3)

  const res4 = result(object, 'a[0].b.c3', constant('default'))
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>result</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
