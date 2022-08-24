import type { NextPage } from 'next'
import { overArgs } from 'lodash'

function runDemo1() {
  function doubled(n: number) {
    return n * 2
  }

  function square(n: number) {
    return n * n
  }

  const func = overArgs(function (x, y) {
    return [x, y]
  }, [square, doubled])

  console.log(func(9, 3))
  console.log(func(10, 5))
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>overArgs</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
