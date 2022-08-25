import type { NextPage } from 'next'
import { forInRight } from 'lodash'

function runDemo1() {
  debugger
  function Foo(this: any) {
    this.a = 1
    this.b = 2
  }

  Foo.prototype.c = 3

  forInRight(new (Foo as any), function (value, key) {
    console.log(key)
  })
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>forInRight</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
