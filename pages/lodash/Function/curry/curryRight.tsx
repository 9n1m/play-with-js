import type { NextPage } from 'next'
import { curryRight } from 'lodash'

function runDemo1() {
  const abc = function (a: number, b: number, c: number) {
    return [a, b, c]
  }

  const curried = curryRight(abc)

  console.log(curried(3)(2)(1))

  console.log(curried(2, 3)(1))

  console.log(curried(1, 2, 3))

  // Curried with placeholders.
  console.log(curried(3)(1, curryRight.placeholder)(2))
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>curryRight</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
