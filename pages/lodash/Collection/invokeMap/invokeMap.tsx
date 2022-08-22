import type { NextPage } from 'next'
import { invokeMap } from 'lodash'

function runDemo1() {
  debugger

  const results = invokeMap([[5, 1, 7], [3, 2, 1]], 'sort')
  console.log(results)
}

function runDemo2() {
  debugger

  const results = invokeMap([123, 456], String.prototype.split, '')
  console.log(results)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>invokeMap</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
