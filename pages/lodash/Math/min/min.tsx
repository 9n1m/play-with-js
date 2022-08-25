import type { NextPage } from 'next'
import { min } from 'lodash'

function runDemo1() {
  debugger
  const res1 = min([4, 2, 8, 6])
  console.log(res1)

  const res2 = min([])
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>min</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
