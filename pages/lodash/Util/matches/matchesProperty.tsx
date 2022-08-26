import type { NextPage } from 'next'
import { filter, matchesProperty } from 'lodash'

function runDemo1() {
  debugger
  const objects = [
    { 'a': 1, 'b': 2, 'c': 3 },
    { 'a': 4, 'b': 5, 'c': 6 }
  ];

  const r1 = filter(objects, matchesProperty('a', 4))
  console.log(r1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>matchesProperty</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
