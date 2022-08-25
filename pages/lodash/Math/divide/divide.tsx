import type { NextPage } from 'next'
import { divide } from 'lodash'

function runDemo1() {
  debugger
  const res1 = divide(6, 4)
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>divide</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
