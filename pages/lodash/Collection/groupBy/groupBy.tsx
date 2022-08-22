import type { NextPage } from 'next'
import { groupBy } from 'lodash'

function runDemo1() {
  debugger

  const aggregateObject = groupBy([6.1, 4.2, 6.3], Math.floor)
  console.log(aggregateObject)
}

function runDemo2() {
  debugger

  const aggregateObject = groupBy(['one', 'two', 'three'], 'length')
  console.log(aggregateObject)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>groupBy</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
