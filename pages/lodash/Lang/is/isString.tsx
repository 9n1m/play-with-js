import type { NextPage } from 'next'
import { isString } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isString('abc')
  console.log(res1)

  const res2 = isString(1)
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isString</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
