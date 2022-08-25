import type { NextPage } from 'next'
import { valuesIn } from 'lodash'

function runDemo1() {
  debugger
  function Foo(this: any) {
    this.a = 1
    this.b = 2
  }

  Foo.prototype.c = 3

  const res1 = valuesIn(new (Foo as any))
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>valuesIn</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
