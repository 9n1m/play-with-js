import type { NextPage } from 'next'
import { size } from 'lodash'

function runDemo1() {
  debugger
  const collectionSize = size([1, 2, 3])
  console.log(collectionSize)
}

function runDemo2() {
  debugger
  const collectionSize = size({ 'a': 1, 'b': 2 })
  console.log(collectionSize)
}

function runDemo3() {
  debugger
  const collectionSize = size('pebbles')
  console.log(collectionSize)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>size</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
        <button className='button is-primary' onClick={() => runDemo3()}>runDemo3</button>
      </div>
    </>
  )
}

export default Page
