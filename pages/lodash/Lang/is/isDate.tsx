import type { NextPage } from 'next'
import { isDate } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isDate(new Date)
  console.log(res1)

  const res2 = isDate('Mon April 23 2012')
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isDate</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
