import type { NextPage } from 'next'
import { identity } from 'lodash'

function runDemo1() {
  debugger
  const object = { 'a': 1 }

  const res1 = identity(object) === object
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>identity</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
