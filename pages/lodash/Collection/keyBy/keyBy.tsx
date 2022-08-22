import type { NextPage } from 'next'
import { keyBy } from 'lodash'

const array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
]

function runDemo1() {
  debugger

  const aggregateObject = keyBy(array, function (o) {
    return String.fromCharCode(o.code);
  })
  console.log(aggregateObject)
}

function runDemo2() {
  debugger

  const aggregateObject = keyBy(array, 'dir')
  console.log(aggregateObject)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>keyBy</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
