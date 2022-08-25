import type { NextPage } from 'next'
import _ from 'lodash'

function runDemo1() {
  debugger

  function square(n: number) {
    return n * n;
  }

  const wrapped = _([1, 2, 3])

  // Returns an unwrapped value.
  const res1 = wrapped.reduce(_.add)
  console.log(res1)

  // Returns a wrapped value.
  const squares = wrapped.map(square)

  const res2 = _.isArray(squares)
  console.log(res2)

  const res3 = _.isArray(squares.value())
  console.log(res3)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>_</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
