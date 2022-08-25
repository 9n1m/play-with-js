import type { NextPage } from 'next'
import { toPairs } from 'lodash'

function runDemo1() {
  debugger
  function Foo(this: any) {
    this.a = 1
    this.b = 2
  }
  Foo.prototype.c = 3

  // @ts-ignore
  const res = toPairs(new Foo)
  console.log(res)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>toPairs</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
