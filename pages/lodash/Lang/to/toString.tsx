import type { NextPage } from 'next'
import { toString } from 'lodash'

function runDemo1() {
  debugger
  const res1 = toString(null)
  console.log(res1)

  const res2 = toString(-0)
  console.log(res2)

  const res3 = toString([1, 2, 3])
  console.log(res3)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>toString</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
