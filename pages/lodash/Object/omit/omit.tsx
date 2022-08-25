import type { NextPage } from 'next'
import { omit } from 'lodash'

function runDemo1() {
  debugger
  const object = { 'a': 1, 'b': '2', 'c': 3 }

  const res1 = omit(object, ['a', 'c'])
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>omit</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
