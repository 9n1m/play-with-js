import type { NextPage } from 'next'
import { max } from 'lodash'

function runDemo1() {
  debugger
  const res1 = max([4, 2, 8, 6])
  console.log(res1)

  const res2 = max([])
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>max</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
