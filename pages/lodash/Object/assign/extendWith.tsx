import type { NextPage } from 'next'
import { extendWith, isUndefined, partialRight } from 'lodash'

function runDemo1() {
  debugger
  function customizer(objValue: any, srcValue: any) {
    return isUndefined(objValue) ? srcValue : objValue
  }

  const defaults = partialRight(extendWith, customizer)

  // @ts-ignore
  const res1 = defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>extendWith</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
