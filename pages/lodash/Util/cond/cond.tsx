import type { NextPage } from 'next'
import { cond, conforms, constant, isNumber, matches, stubTrue } from 'lodash'

function runDemo1() {
  debugger
  const func = cond([
    [matches({ 'a': 1 }), constant('matches A')],
    [conforms({ 'b': isNumber }), constant('matches B')],
    [stubTrue, constant('no match')]
  ])

  // @ts-ignore
  const res1 = func({ 'a': 1, 'b': 2 })
  console.log(res1)

  // @ts-ignore
  const res2 = func({ 'a': 0, 'b': 1 })
  console.log(res2)

  // @ts-ignore
  const res3 = func({ 'a': '1', 'b': '2' })
  console.log(res3)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>cond</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
