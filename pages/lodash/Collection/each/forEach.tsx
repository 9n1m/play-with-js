import type { NextPage } from 'next'
import { forEach } from 'lodash'

function runDemo1() {
  debugger
  const newCollection = forEach([1, 2], function (value) {
    console.log(value);
  })
  console.log(newCollection)
}

function runDemo2() {
  debugger
  const newCollection = forEach({ 'a': 1, 'b': 2 }, function (value, key) {
    console.log(key)
  })
  console.log(newCollection)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>forEach</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
