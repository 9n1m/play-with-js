import type { NextPage } from 'next'
import { isMatchWith } from 'lodash'

function runDemo1() {
  debugger
  function isGreeting(value: string) {
    return /^h(?:i|ello)$/.test(value)
  }

  function customizer(objValue: string, srcValue: string) {
    if (isGreeting(objValue) && isGreeting(srcValue)) {
      return true
    }
  }

  var object = { 'greeting': 'hello' }
  var source = { 'greeting': 'hi' }

  const res1 = isMatchWith(object, source, customizer)
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isMatchWith</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
