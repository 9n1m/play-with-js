import type { NextPage } from 'next'
import { flip, toArray } from 'lodash'

function runDemo1() {
  const flipped = flip(function (...args: string[]) {
    return toArray(args)
  })

  const arr = flipped('a', 'b', 'c', 'd')
  console.log(arr)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>flip</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
