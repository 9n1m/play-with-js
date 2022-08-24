import type { NextPage } from 'next'
import { conformsTo } from 'lodash'

function runDemo1() {
  debugger

  const object = { 'a': 1, 'b': 2 }

  // @ts-ignore
  const res1 = conformsTo(object, { 'b': function (n: number) { return n > 1 } })
  console.log(res1)

  // @ts-ignore
  const res2 = conformsTo(object, { 'b': function (n: number) { return n > 2 } })
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>conformsTo</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
