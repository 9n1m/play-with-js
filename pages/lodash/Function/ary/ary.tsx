import type { NextPage } from 'next'
import { ary, map } from 'lodash'

function runDemo1() {
  debugger
  const result1 = map(['6', '8', '10'], parseInt)
  console.log(result1)

  const result2 = map(['6', '8', '10'], ary(parseInt, 1))
  console.log(result2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>ary</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
