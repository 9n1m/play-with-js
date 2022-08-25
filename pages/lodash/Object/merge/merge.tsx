import type { NextPage } from 'next'
import { merge } from 'lodash'

function runDemo1() {
  debugger
  const object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  }

  const other = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
  }

  const res = merge(object, other)
  console.log(object)
  console.log(res)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>merge</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
