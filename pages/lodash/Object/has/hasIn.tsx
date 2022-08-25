import type { NextPage } from 'next'
import { create, hasIn } from 'lodash'

function runDemo1() {
  debugger
  const object = create({ 'a': create({ 'b': 2 }) })

  const res1 = hasIn(object, 'a')
  console.log(res1)

  const res2 = hasIn(object, 'a.b')
  console.log(res2)

  const res3 = hasIn(object, ['a', 'b'])
  console.log(res3)

  const res4 = hasIn(object, 'b')
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>hasIn</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
