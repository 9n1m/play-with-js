import type { NextPage } from 'next'
import { gt } from 'lodash'

function runDemo1() {
  debugger
  const res1 = gt(3, 1)
  console.log(res1)

  const res2 = gt(3, 3)
  console.log(res2)

  const res3 = gt(1, 3)
  console.log(res3)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>gt</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
