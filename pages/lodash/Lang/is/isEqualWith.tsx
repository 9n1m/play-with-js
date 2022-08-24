import type { NextPage } from 'next'
import { isEqualWith } from 'lodash'

function runDemo1() {
  debugger
  function isGreeting(value: string) {
    return /^h(?:i|ello)$/.test(value);
  }

  function customizer(objValue: string, othValue: string) {
    if (isGreeting(objValue) && isGreeting(othValue)) {
      return true;
    }
  }

  const array = ['hello', 'goodbye']
  const other = ['hi', 'goodbye']

  const res1 = isEqualWith(array, other, customizer)
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isEqualWith</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
