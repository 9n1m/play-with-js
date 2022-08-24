import type { NextPage } from 'next'
import { toPlainObject, assign } from 'lodash'

function runDemo1() {
  debugger
  function Foo() {
    // @ts-ignore
    this.b = 2
  }
  Foo.prototype.c = 3

  // @ts-ignore
  const res1 = assign({ 'a': 1 }, new Foo)
  console.log(res1)

  // @ts-ignore
  const res2 = assign({ 'a': 1 }, toPlainObject(new Foo))
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>toPlainObject</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
