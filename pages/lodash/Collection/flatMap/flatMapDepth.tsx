import type { NextPage } from 'next'
import { flatMapDepth } from 'lodash'

function runDemo1() {
  debugger
  function duplicate(n: number) {
    return [[[n, n]]]
  }

  const flattenedArray = flatMapDepth([1, 2], duplicate, 2)
  console.log(flattenedArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>flatMapDepth</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
