import type { NextPage } from 'next'
import { unset } from 'lodash'

function runDemo1() {
  debugger
  const object = { 'a': [{ 'b': { 'c': 7 } }] }

  const res1 = unset(object, 'a[0].b.c')
  console.log(object)
  console.log(res1)

  const res2 = unset(object, ['a', '0', 'b', 'c'])
  console.log(object)
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>unset</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
