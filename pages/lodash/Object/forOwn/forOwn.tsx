import type { NextPage } from 'next'
import { forOwn } from 'lodash'

function runDemo1() {
  debugger
  function Foo(this: any) {
    this.a = 1
    this.b = 2
  }

  Foo.prototype.c = 3

  forOwn(new (Foo as any), function (value, key) {
    console.log(key)
  })
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>forOwn</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
