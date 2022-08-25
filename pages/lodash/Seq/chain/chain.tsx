import type { NextPage } from 'next'
import { chain } from 'lodash'

function runDemo1() {
  debugger

  const users = [
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'pebbles', 'age': 1 }
  ];

  const youngest = chain(users)
    .sortBy('age')
    .map(function (o) {
      return o.user + ' is ' + o.age
    })
    .head()
    .value()

  console.log(youngest)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>chain</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
