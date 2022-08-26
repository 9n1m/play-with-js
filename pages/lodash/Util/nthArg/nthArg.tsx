import type { NextPage } from 'next'
import { nthArg } from 'lodash'

function runDemo1() {
  debugger
  var func = nthArg(1)
  const r1 = func('a', 'b', 'c', 'd')
  console.log(r1)

  var func = nthArg(-2)
  const r2 = func('a', 'b', 'c', 'd')
  console.log(r2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>nthArg</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
