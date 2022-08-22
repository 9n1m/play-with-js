import type { NextPage } from 'next'
import { every } from 'lodash'

const users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred', 'age': 40, 'active': false }
]

function runDemo1() {
  debugger
  const newBoolean = every([true, 1, null, 'yes'], Boolean)
  console.log(newBoolean)
}

function runDemo2() {
  debugger
  const newBoolean = every(users, { 'user': 'barney', 'active': false })
  console.log(newBoolean)
}

function runDemo3() {
  debugger
  const newBoolean = every(users, ['active', false])
  console.log(newBoolean)
}

function runDemo4() {
  debugger
  const newBoolean = every(users, 'active')
  console.log(newBoolean)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>every</h2>
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
