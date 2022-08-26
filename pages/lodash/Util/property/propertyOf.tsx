import type { NextPage } from 'next'
import { map, propertyOf } from 'lodash'

function runDemo1() {
  debugger
  const array = [0, 1, 2],
    object = { 'a': array, 'b': array, 'c': array }

  const r1 = map(['a[2]', 'c[0]'], propertyOf(object))
  console.log(r1)

  const r2 = map([['a', '2'], ['c', '0']], propertyOf(object))
  console.log(r2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>propertyOf</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
