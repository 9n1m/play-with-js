import type { NextPage } from 'next'
import { findKey } from 'lodash'

function runDemo1() {
  debugger
  const users = {
    'barney': { 'age': 36, 'active': true },
    'fred': { 'age': 40, 'active': false },
    'pebbles': { 'age': 1, 'active': true }
  }

  const res1 = findKey(users, function (o) { return o.age < 40 })
  console.log(res1)

  const res2 = findKey(users, { 'age': 1, 'active': true })
  console.log(res2)

  const res3 = findKey(users, ['active', false])
  console.log(res3)

  const res4 = findKey(users, 'active')
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>findKey</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
