import type { NextPage } from 'next'
import { get } from 'lodash'

function runDemo1() {
  debugger
  const object = { 'a': [{ 'b': { 'c': 3 } }] }

  const res1 = get(object, 'a[0].b.c')
  console.log(res1)

  const res2 = get(object, ['a', '0', 'b', 'c'])
  console.log(res2)

  const res3 = get(object, 'a.b.c', 'default')
  console.log(res3)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>get</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
