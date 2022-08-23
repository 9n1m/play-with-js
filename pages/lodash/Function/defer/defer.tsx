import type { NextPage } from 'next'
import { defer } from 'lodash'

function runDemo1() {
  const id = defer(function(text) {
    console.log(text)
  }, 'deferred')

  console.log(id)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>defer</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
