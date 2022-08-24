import type { NextPage } from 'next'
import { isPlainObject } from 'lodash'

function runDemo1() {
  debugger
  function Foo(this: any) {
    this.a = 1
  }

  // @ts-ignore
  const res1 = isPlainObject(new Foo)
  console.log(res1)

  const res2 = isPlainObject([1, 2, 3])
  console.log(res2)

  const res3 = isPlainObject({ 'x': 0, 'y': 0 })
  console.log(res3)

  const res4 = isPlainObject(Object.create(null))
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isPlainObject</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
