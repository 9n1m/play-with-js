import type { NextPage } from 'next'
import { create, has } from 'lodash'

function runDemo1() {
  debugger
  const object = { 'a': { 'b': 2 } }
  const other = create({ 'a': create({ 'b': 2 }) })

  const res1 = has(object, 'a')
  console.log(res1)

  const res2 = has(object, 'a.b')
  console.log(res2)

  const res3 = has(object, ['a', 'b'])
  console.log(res3)

  const res4 = has(other, 'a')
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>has</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
