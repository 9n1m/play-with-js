import type { NextPage } from 'next'
import { isRegExp } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isRegExp(/abc/)
  console.log(res1)

  const res2 = isRegExp('/abc/')
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isRegExp</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
