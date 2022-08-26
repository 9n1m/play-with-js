import type { NextPage } from 'next'
import _ from 'lodash'

function runDemo1() {
  debugger
  function vowels(string: string) {
    return _.filter(string, function (v) {
      return /[aeiou]/i.test(v)
    })
  }

  _.mixin({ 'vowels': vowels })

  const r1 = vowels('fred')
  console.log(r1)

  // @ts-ignore
  const r2 = _('fred').vowels().value()
  console.log(r2)

  _.mixin({ 'vowels': vowels }, { 'chain': false })
  // @ts-ignore
  const r3 = _('fred').vowels()
  console.log(r3)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>mixin</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
