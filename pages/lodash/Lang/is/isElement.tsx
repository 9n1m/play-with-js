import type { NextPage } from 'next'
import { isElement } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isElement(document.body)
  console.log(res1)

  const res2 = isElement('<body>')
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isElement</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
