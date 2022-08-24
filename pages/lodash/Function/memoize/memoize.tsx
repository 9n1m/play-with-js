import type { NextPage } from 'next'
import { memoize, values } from 'lodash'

function runDemo1() {
  const object = { 'a': 1, 'b': 2 }
  const other = { 'c': 3, 'd': 4 }
  const memoizeValues = memoize(values)

  console.log(memoizeValues(object))
  console.log(memoizeValues(other))

  object.a = 2
  console.log(memoizeValues(object))

  // Modify the result cache.
  memoizeValues.cache.set(object, ['a', 'b'])
  console.log(memoizeValues(object))
}

function runDemo2() {
  const object = { 'a': 1, 'b': 2 }
  const other = { 'c': 3, 'd': 4 }
  const memoizeValues = memoize(values)
  memoize.Cache = WeakMap

  console.log(memoizeValues(object))
  console.log(memoizeValues(other))

  object.a = 2
  console.log(memoizeValues(object))

  // Modify the result cache.
  memoizeValues.cache.set(object, ['a', 'b'])
  console.log(memoizeValues(object))
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>memoize</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
