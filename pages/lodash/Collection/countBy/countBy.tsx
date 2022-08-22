import type { NextPage } from 'next'
import { countBy } from 'lodash'

function runDemo1() {
  debugger
  const newObject = countBy([6.1, 4.2, 6.3], Math.floor)
  console.log(newObject)
}

function runDemo2() {
  debugger
  const newObject = countBy(['one', 'two', 'three'], 'length')
  console.log(newObject)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>countBy</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
