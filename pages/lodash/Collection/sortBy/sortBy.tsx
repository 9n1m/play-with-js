import type { NextPage } from 'next'
import { sortBy } from 'lodash'

const users = [
  { 'user': 'fred', 'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred', 'age': 40 },
  { 'user': 'barney', 'age': 34 }
]

function runDemo1() {
  debugger
  const sortedArray = sortBy(users, [function (o) { return o.user; }])
  console.log(sortedArray)
}

function runDemo2() {
  debugger
  const sortedArray = sortBy(users, ['user', 'age'])
  console.log(sortedArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>sortBy</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
        <button className='button is-primary' onClick={() => runDemo2()}>runDemo2</button>
      </div>
    </>
  )
}

export default Page
