import type { NextPage } from 'next'
import { isNumber, pickBy } from 'lodash'

function runDemo1() {
  debugger
  const object = { 'a': 1, 'b': '2', 'c': 3 }

  const res1 = pickBy(object, isNumber)
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>pickBy</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
