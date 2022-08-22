import type { NextPage } from 'next'
import { reject } from 'lodash'

const users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred', 'age': 40, 'active': true }
]

function runDemo1() {
  debugger

  const filteredArray = reject(users, function (o) { return !o.active })
  console.log(filteredArray)
}

function runDemo2() {
  debugger

  const filteredArray = reject(users, { 'age': 40, 'active': true })
  console.log(filteredArray)
}

function runDemo3() {
  debugger

  const filteredArray = reject(users, ['active', false])
  console.log(filteredArray)
}

function runDemo4() {
  debugger

  const filteredArray = reject(users, 'active')
  console.log(filteredArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>reject</h2>
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
