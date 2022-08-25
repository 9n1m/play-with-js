import type { NextPage } from 'next'
import _ from 'lodash'

function runDemo1() {
  debugger

  const res = _([1, 2, 3])
    .tap(function (array) {
      // Mutate input array.
      array.pop()
    })
    .reverse()
    .value()

  console.log(res)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>tap</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
