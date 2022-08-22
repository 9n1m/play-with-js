import type { NextPage } from 'next'
import { partition } from 'lodash'

const users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred', 'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1, 'active': false }
]

function runDemo1() {
  debugger

  const groupedElements = partition(users, function (o) { return o.active })
  console.log(groupedElements)
}

function runDemo2() {
  debugger

  const groupedElements = partition(users, { 'age': 1, 'active': false })
  console.log(groupedElements)
}

function runDemo3() {
  debugger

  const groupedElements = partition(users, ['active', false])
  console.log(groupedElements)
}

function runDemo4() {
  debugger

  const groupedElements = partition(users, 'active')
  console.log(groupedElements)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>partition</h2>
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
