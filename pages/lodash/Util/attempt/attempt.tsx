import type { NextPage } from 'next'
import { attempt } from 'lodash'

function runDemo1() {
  debugger
  const elements = attempt(function (selector) {
    return document.querySelectorAll(selector)
  }, '>_>')

  console.log(elements)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>attempt</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
