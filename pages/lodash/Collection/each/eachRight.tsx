import type { NextPage } from 'next'
import { eachRight } from 'lodash'

function runDemo1() {
  debugger
  const newCollection = eachRight([1, 2], function (value) {
    console.log(value);
  })
  console.log(newCollection)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>eachRight</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
