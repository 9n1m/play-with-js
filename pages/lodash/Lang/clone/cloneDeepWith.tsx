import type { NextPage } from 'next'
import { cloneDeepWith, isElement } from 'lodash'

function runDemo1() {
  debugger
  function customizer(value: { cloneNode: (arg0: boolean) => any }) {
    if (isElement(value)) {
      return value.cloneNode(false)
    }
  }
  const el = cloneDeepWith(document.body, customizer)

  console.log(el === document.body)
  console.log(el.nodeName)
  console.log(el.childNodes.length)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>cloneDeepWith</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
