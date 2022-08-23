import type { NextPage } from 'next'
import { curry } from 'lodash'

function runDemo1() {
  const abc = function (a: number, b: number, c: number) {
    return [a, b, c]
  }

  const curried = curry(abc)

  console.log(curried(1)(2)(3))

  console.log(curried(1, 2)(3))

  console.log(curried(1, 2, 3))

  // Curried with placeholders.
  console.log(curried(1)(curry.placeholder, 3)(2))
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>curry</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
