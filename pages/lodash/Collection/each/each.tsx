import type { NextPage } from 'next'
import { each } from 'lodash'

function runDemo1() {
  debugger
  const newCollection = each([1, 2], function (value) {
    console.log(value);
  })
  console.log(newCollection)
}

function runDemo2() {
  debugger
  const newCollection = each({ 'a': 1, 'b': 2 }, function (value, key) {
    console.log(key)
  })
  console.log(newCollection)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>each</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
