import type { NextPage } from 'next'
import { defaultTo } from 'lodash'

function runDemo1() {
  debugger

  const res1 = defaultTo(1, 10)
  console.log(res1)

  const res2 = defaultTo(undefined, 10)
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>defaultTo</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
