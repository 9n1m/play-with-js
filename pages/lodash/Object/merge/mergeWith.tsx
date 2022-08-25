import type { NextPage } from 'next'
import { isArray, mergeWith } from 'lodash'

function runDemo1() {
  debugger

  function customizer(objValue: string | any[], srcValue: any) {
    if (isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  }

  const object = { 'a': [1], 'b': [2] }
  const other = { 'a': [3], 'b': [4] }

  const res = mergeWith(object, other, customizer)
  console.log(object)
  console.log(res)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>mergeWith</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
