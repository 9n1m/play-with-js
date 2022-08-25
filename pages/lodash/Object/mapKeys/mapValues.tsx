import type { NextPage } from 'next'
import { mapValues } from 'lodash'

function runDemo1() {
  debugger
  const users = {
    'fred': { 'user': 'fred', 'age': 40 },
    'pebbles': { 'user': 'pebbles', 'age': 1 }
  }

  const res1 = mapValues(users, function (o) { return o.age })
  console.log(res1)

  const res2 = mapValues(users, 'age')
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>mapValues</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
