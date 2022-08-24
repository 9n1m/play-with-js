import type { NextPage } from 'next'
import { lte } from 'lodash'

function runDemo1() {
  debugger
  const res1 = lte(1, 3)
  console.log(res1)

  const res2 = lte(3, 3)
  console.log(res2)

  const res3 = lte(3, 1)
  console.log(res3)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>lte</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
