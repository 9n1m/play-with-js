import type { NextPage } from 'next'
import { isMatch } from 'lodash'

function runDemo1() {
  debugger
  const object = { 'a': 1, 'b': 2 }
  const res1 = isMatch(object, { 'b': 2 })
  console.log(res1)

  const res2 = isMatch(object, { 'b': 1 })
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isMatch</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
