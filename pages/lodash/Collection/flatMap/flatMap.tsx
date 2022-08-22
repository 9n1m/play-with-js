import type { NextPage } from 'next'
import { flatMap } from 'lodash'

function runDemo1() {
  debugger
  function duplicate(n: number) {
    return [n, n]
  }

  const flattenedArray = flatMap([1, 2], duplicate)
  console.log(flattenedArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>flatMap</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
