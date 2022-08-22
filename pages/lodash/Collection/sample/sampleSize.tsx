import type { NextPage } from 'next'
import { sampleSize } from 'lodash'

function runDemo1() {
  debugger

  const randomElements = sampleSize([1, 2, 3], 2)
  console.log(randomElements)
}

function runDemo2() {
  debugger

  const randomElements = sampleSize([1, 2, 3], 4)
  console.log(randomElements)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>sampleSize</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
