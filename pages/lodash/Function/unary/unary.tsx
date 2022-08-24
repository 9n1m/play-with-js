import type { NextPage } from 'next'
import { unary, map } from 'lodash'

const runDemo1 = function () {
  const arr = map(['6', '8', '10'], unary(parseInt))
  console.log(arr)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>unary</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
