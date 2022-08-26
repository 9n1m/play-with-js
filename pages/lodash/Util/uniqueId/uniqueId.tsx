import type { NextPage } from 'next'
import { uniqueId } from 'lodash'

function runDemo1() {
  debugger
  const r1 = uniqueId('contact_')
  console.log(r1)

  const r2 = uniqueId()
  console.log(r2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>uniqueId</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
