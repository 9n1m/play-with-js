import type { NextPage } from 'next'
import { takeRightWhile, cloneDeep } from 'lodash'

const users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred', 'active': false },
  { 'user': 'pebbles', 'active': false }
]

function runDemo1() {
  debugger
  const array = cloneDeep(users)
  const newArray = takeRightWhile(array, o => !o.active)
  console.log(newArray)
}

function runDemo2() {
  debugger
  const array = cloneDeep(users)
  const newArray = takeRightWhile(array, { 'user': 'pebbles', 'active': false })
  console.log(newArray)
}

function runDemo3() {
  debugger
  const array = cloneDeep(users)
  const newArray = takeRightWhile(array, ['active', false])
  console.log(newArray)
}

function runDemo4() {
  debugger
  const array = cloneDeep(users)
  const newArray = takeRightWhile(array, 'active')
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>takeRightWhile</h2>
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
