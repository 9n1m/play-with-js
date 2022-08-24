import type { NextPage } from 'next'
import { isArguments } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isArguments(function () { return arguments }())
  console.log(res1)

  const res2 = isArguments([1, 2, 3])
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isArguments</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
