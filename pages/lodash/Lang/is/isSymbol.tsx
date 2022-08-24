import type { NextPage } from 'next'
import { isSymbol } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isSymbol(Symbol.iterator)
  console.log(res1)

  const res2 = isSymbol('abc')
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isSymbol</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
