import type { NextPage } from 'next'
import { defaults } from 'lodash'

function runDemo1() {
  debugger
  const obj = { 'a': 1 }

  const res = defaults(obj, { 'b': 2 }, { 'a': 3 })
  console.log(obj)
  console.log(res)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>defaults</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
