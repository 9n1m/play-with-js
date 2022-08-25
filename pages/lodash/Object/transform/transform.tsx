import type { NextPage } from 'next'
import { transform } from 'lodash'

function runDemo1() {
  debugger
  const res1 = transform([2, 3, 4], function (result, n) {
    result.push(n *= n)
    return n % 2 == 0
  }, ([]) as number[])
  console.log(res1)

  const res2 = transform({ 'a': 1, 'b': 2, 'c': 1 }, function (result, value, key) {
    // @ts-ignore
    (result[value] || (result[value] = [])).push(key)
  }, {})
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>transform</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
