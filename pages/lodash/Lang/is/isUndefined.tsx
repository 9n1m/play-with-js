import type { NextPage } from 'next'
import { isUndefined } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isUndefined(void 0)
  console.log(res1)

  const res2 = isUndefined(null)
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isUndefined</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
