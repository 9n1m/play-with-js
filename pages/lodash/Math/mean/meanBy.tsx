import type { NextPage } from 'next'
import { meanBy } from 'lodash'

function runDemo1() {
  debugger
  const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]

  const res1 = meanBy(objects, function (o) { return o.n })
  console.log(res1)

  const res2 = meanBy(objects, 'n')
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>meanBy</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
