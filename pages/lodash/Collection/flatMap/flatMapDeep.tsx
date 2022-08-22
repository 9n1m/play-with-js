import type { NextPage } from 'next'
import { flatMapDeep, flatMap } from 'lodash'

function runDemo1() {
  debugger
  function duplicate(n: number) {
    return [[[n, n]]]
  }

  const flattenedArray = flatMapDeep([1, 2], duplicate)
  console.log(flattenedArray)
}

function runDemo2() {
  debugger
  function duplicate(n: number) {
    return [[[n, n]]]
  }

  const flattenedArray = flatMap([1, 2], duplicate)
  console.log(flattenedArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>flatMapDeep</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
