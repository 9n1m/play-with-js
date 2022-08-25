import type { NextPage } from 'next'
import { mapKeys } from 'lodash'

function runDemo1() {
  debugger

  const res1 = mapKeys({ 'a': 1, 'b': 2 }, function (value, key) {
    return key + value
  })
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>mapKeys</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
