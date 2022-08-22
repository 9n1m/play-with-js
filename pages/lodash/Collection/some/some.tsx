import type { NextPage } from 'next'
import { some } from 'lodash'

const users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred', 'active': false }
]

function runDemo1() {
  debugger
  const isAnyElementPass = some([null, 0, 'yes', false], Boolean)
  console.log(isAnyElementPass)
}

function runDemo2() {
  debugger
  const isAnyElementPass = some(users, { 'user': 'barney', 'active': false })
  console.log(isAnyElementPass)
}

function runDemo3() {
  debugger
  const isAnyElementPass = some(users, ['active', false])
  console.log(isAnyElementPass)
}

function runDemo4() {
  debugger
  const isAnyElementPass = some(users, 'active')
  console.log(isAnyElementPass)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>some</h2>
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
