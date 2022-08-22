import type { NextPage } from 'next'
import { map } from 'lodash'

function runDemo1() {
  debugger
  function square(n: number) {
    return n * n
  }

  const mappedArray = map([4, 8], square)
  console.log(mappedArray)
}

function runDemo2() {
  debugger
  function square(n: number) {
    return n * n
  }

  const mappedArray = map({ 'a': 4, 'b': 8 }, square)
  console.log(mappedArray)
}

function runDemo3() {
  debugger
  const users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
  ]

  const mappedArray = map(users, 'user')
  console.log(mappedArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>map</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
        <button className='button is-primary' onClick={() => runDemo3()}>runDemo3</button>
      </div>
    </>
  )
}

export default Page
