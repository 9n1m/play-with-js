import type { NextPage } from 'next'
import { find } from 'lodash'

const users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred', 'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1, 'active': true }
]

function runDemo1() {
  debugger
  const matchedElement = find(users, function (o) { return o.age < 40 })
  console.log(matchedElement)
}

function runDemo2() {
  debugger
  const matchedElement = find(users, { 'age': 1, 'active': true })
  console.log(matchedElement)
}

function runDemo3() {
  debugger
  const matchedElement = find(users, ['active', false])
  console.log(matchedElement)
}

function runDemo4() {
  debugger
  const matchedElement = find(users, 'active')
  console.log(matchedElement)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>find</h2>
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
