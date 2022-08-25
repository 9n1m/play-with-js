import type { NextPage } from 'next'
import { extend } from 'lodash'

function runDemo1() {
  debugger
  function Foo(this: any) {
    this.a = 1
  }

  function Bar(this: any) {
    this.c = 3
  }

  Foo.prototype.b = 2
  Bar.prototype.d = 4

  // @ts-ignore
  const res1 = extend({ 'a': 0 }, new Foo, new Bar)
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>extend</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
