import type { NextPage } from 'next'
import { entriesIn } from 'lodash'

function runDemo1() {
  debugger
  function Foo(this: any) {
    this.a = 1
    this.b = 2
  }
  Foo.prototype.c = 3

  // @ts-ignore
  const res = entriesIn(new Foo)
  console.log(res)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>entriesIn</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
