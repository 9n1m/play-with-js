import type { NextPage } from 'next'
import { dropWhile, cloneDeep } from 'lodash'

const users = [
  { 'user': 'barney', 'active': false },
  { 'user': 'fred', 'active': false },
  { 'user': 'pebbles', 'active': true }
];

function runDemo1() {
  debugger
  const array = cloneDeep(users)
  const newArray = dropWhile(array, o => !o.active)
  console.log(newArray)
}

function runDemo2() {
  debugger
  const array = cloneDeep(users)
  const newArray = dropWhile(users, { 'user': 'barney', 'active': false })
  console.log(newArray)
}

function runDemo3() {
  debugger
  const array = cloneDeep(users)
  const newArray = dropWhile(users, ['active', false])
  console.log(newArray)
}

function runDemo4() {
  debugger
  const array = cloneDeep(users)
  const newArray = dropWhile(users, 'active')
  console.log(newArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>dropWhile</h2>
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
