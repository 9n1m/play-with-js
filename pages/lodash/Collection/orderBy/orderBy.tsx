import type { NextPage } from 'next'
import { orderBy } from 'lodash'

function runDemo1() {
  debugger
  const users = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 }
  ]

  const sortedArray = orderBy(users, ['user', 'age'], ['asc', 'desc'])
  console.log(sortedArray)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>orderBy</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
