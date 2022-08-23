import type { NextPage } from 'next'
import { now, defer } from 'lodash'

function runDemo1() {
  debugger
  const timestamp = now()
  console.log(timestamp)
}

function runDemo2() {
  debugger
  defer(function (stamp) {
    console.log(now() - stamp)
  }, now())
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>now</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
