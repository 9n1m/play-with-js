import type { NextPage } from 'next'
import { multiply } from 'lodash'

function runDemo1() {
  debugger
  const res1 = multiply(6, 4)
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>multiply</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
