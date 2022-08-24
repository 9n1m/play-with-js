import type { NextPage } from 'next'
import { isNil } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isNil(null)
  console.log(res1)

  const res2 = isNil(void 0)
  console.log(res2)

  const res3 = isNil(NaN)
  console.log(res3)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isNil</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
