import type { NextPage } from 'next'
import { invertBy } from 'lodash'

function runDemo1() {
  debugger
  const object = { 'a': 1, 'b': 2, 'c': 1 }

  const res1 = invertBy(object)
  console.log(res1)

  const res2 = invertBy(object, function (value) {
    return 'group' + value
  })
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>invertBy</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
