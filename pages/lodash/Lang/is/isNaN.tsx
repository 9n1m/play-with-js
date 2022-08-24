import type { NextPage } from 'next'
import { isNaN } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isNaN(NaN)
  console.log(res1)

  const res2 = isNaN(new Number(NaN))
  console.log(res2)

  // @ts-ignore: function isNaN(number: number): boolean
  const res3 = window.isNaN(undefined)
  console.log(res3)

  const res4 = isNaN(undefined)
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isNaN</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
