import type { NextPage } from 'next'
import { constant, map, methodOf, times } from 'lodash'

function runDemo1() {
  debugger
  const array = times(3, constant),
    object = { 'a': array, 'b': array, 'c': array }

  const r1 = map(['a[2]', 'c[0]'], methodOf(object))
  console.log(r1)

  const r2 = map([['a', '2'], ['c', '0']], methodOf(object))
  console.log(r2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>methodOf</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
