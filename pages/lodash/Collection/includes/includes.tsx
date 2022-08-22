import type { NextPage } from 'next'
import { includes } from 'lodash'

function runDemo1() {
  debugger
  const isIncludes = includes([1, 2, 3], 1)
  console.log(isIncludes)
}

function runDemo2() {
  debugger
  const isIncludes = includes([1, 2, 3], 1, 2)
  console.log(isIncludes)
}

function runDemo3() {
  debugger
  const isIncludes = includes({ 'a': 1, 'b': 2 }, 1)
  console.log(isIncludes)
}

function runDemo4() {
  debugger
  const isIncludes = includes('abcd', 'bc')
  console.log(isIncludes)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>includes</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
        <button className='button is-primary' onClick={() => runDemo3()}>runDemo3</button>
        <button className='button is-primary' onClick={() => runDemo4()}>runDemo4</button>
      </div>
    </>
  )
}

export default Page
