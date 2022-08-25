import type { NextPage } from 'next'
import { add, flowRight } from 'lodash'

function runDemo1() {
  debugger
  function square(n: number) {
    return n * n
  }

  const addSquare = flowRight([square, add])

  const res1 = addSquare(1, 2)
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>flowRight</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
