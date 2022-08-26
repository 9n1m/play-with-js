import type { NextPage } from 'next'
import { overEvery } from 'lodash'

function runDemo1() {
  debugger
  const func = overEvery([Boolean, isFinite])

  // @ts-ignore
  const r1 = func('1')
  console.log(r1)

  // @ts-ignore
  const r2 = func(null)
  console.log(r2)

  const r3 = func(NaN)
  console.log(r3)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>overEvery</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
