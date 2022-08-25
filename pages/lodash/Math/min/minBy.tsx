import type { NextPage } from 'next'
import { minBy } from 'lodash'

function runDemo1() {
  debugger
  const objects = [{ 'n': 1 }, { 'n': 2 }]

  const res1 = minBy(objects, function (o) { return o.n })
  console.log(res1)

  const res2 = minBy(objects, 'n')
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>minBy</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
