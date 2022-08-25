import type { NextPage } from 'next'
import { sumBy } from 'lodash'

function runDemo1() {
  debugger
  const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]

  const res1 = sumBy(objects, function (o) { return o.n })
  console.log(res1)

  const res2 = sumBy(objects, 'n')
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>sumBy</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
