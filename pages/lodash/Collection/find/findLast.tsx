import type { NextPage } from 'next'
import { findLast } from 'lodash'

function runDemo1() {
  debugger
  const matchedElement = findLast([1, 2, 3, 4], function (n) {
    return n % 2 == 1
  })
  console.log(matchedElement)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>findLast</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
