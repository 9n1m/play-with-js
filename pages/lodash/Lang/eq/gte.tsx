import type { NextPage } from 'next'
import { gte } from 'lodash'

function runDemo1() {
  debugger
  const res1 = gte(3, 1)
  console.log(res1)

  const res2 = gte(3, 3)
  console.log(res2)

  const res3 = gte(1, 3)
  console.log(res3)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>gte</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
