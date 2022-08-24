import type { NextPage } from 'next'
import { reduce } from 'lodash'

function runDemo1() {
  debugger
  const accumulatedValue = reduce([1, 2], function (sum, n) {
    return sum + n
  }, 0)
  console.log(accumulatedValue)
}

function runDemo2() {
  debugger
  const accumulatedValue = reduce({ 'a': 1, 'b': 2, 'c': 1 }, function (result, value, key) {
    // @ts-ignore
    (result[value] || (result[value] = [])).push(key)
    return result
  }, {})
  console.log(accumulatedValue)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>reduce</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
