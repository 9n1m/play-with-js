import type { NextPage } from 'next'
import { first, List } from 'lodash'

function runDemo1() {
  debugger
  const array = [1, 2, 3]
  const element = first(array)
  console.log(element)
}

function runDemo2() {
  debugger
  const array: List<any> = []
  const element = first(array)
  console.log(element)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>first</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
