import type { NextPage } from 'next'
import { ceil } from 'lodash'

function runDemo1() {
  debugger
  const res1 = ceil(4.006)
  console.log(res1)

  const res2 = ceil(6.004, 2)
  console.log(res2)

  const res3 = ceil(6040, -2)
  console.log(res3)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>ceil</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
