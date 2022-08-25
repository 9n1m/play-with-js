import type { NextPage } from 'next'
import { sum } from 'lodash'

function runDemo1() {
  debugger
  const res1 = sum([4, 2, 8, 6])
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>sum</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
