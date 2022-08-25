import type { NextPage } from 'next'
import { constant, functionsIn } from 'lodash'

function runDemo1() {
  debugger
  function Foo(this: any) {
    this.a = constant('a')
    this.b = constant('b')
  }

  Foo.prototype.c = constant('c')

  const res = functionsIn(new (Foo as any))
  console.log(res)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>functionsIn</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
