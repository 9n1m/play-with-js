import type { NextPage } from 'next'
import { defaultsDeep } from 'lodash'

function runDemo1() {
  debugger
  const obj = { 'a': { 'b': 2 } }

  const res = defaultsDeep(obj, { 'a': { 'b': 1, 'c': 3 } })
  console.log(obj)
  console.log(res)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>defaultsDeep</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
