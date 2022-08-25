import type { NextPage } from 'next'
import { round } from 'lodash'

function runDemo1() {
  debugger
  const res1 = round(4.006)
  console.log(res1)

  const res2 = round(4.006, 2)
  console.log(res2)

  const res3 = round(4060, -2)
  console.log(res3)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>round</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
