import type { NextPage } from 'next'
import { isBoolean } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isBoolean(false)
  console.log(res1)

  const res2 = isBoolean(null)
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isBoolean</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
