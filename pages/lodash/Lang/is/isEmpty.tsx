import type { NextPage } from 'next'
import { isEmpty } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isEmpty(null)
  console.log(res1)

  const res2 = isEmpty(true)
  console.log(res2)

  const res3 = isEmpty(1)
  console.log(res3)

  const res4 = isEmpty([1, 2, 3])
  console.log(res4)

  const res5 = isEmpty({ 'a': 1 })
  console.log(res5)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isEmpty</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
