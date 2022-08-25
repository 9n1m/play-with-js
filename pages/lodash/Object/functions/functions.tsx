import type { NextPage } from 'next'
import { constant, functions } from 'lodash'

function runDemo1() {
  debugger
  function Foo(this: any) {
    this.a = constant('a')
    this.b = constant('b')
  }

  Foo.prototype.c = constant('c')

  const res = functions(new (Foo as any))
  console.log(res)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>functions</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
