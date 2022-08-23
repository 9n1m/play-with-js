import type { NextPage } from 'next'
import { bindKey } from 'lodash'

function runDemo1() {
  debugger
  const object = {
    'user': 'fred',
    'greet': function (greeting: string, punctuation: string) {
      return greeting + ' ' + this.user + punctuation
    }
  }

  var bound = bindKey(object, 'greet', 'hi')
  console.log(bound('!'))

  object.greet = function (greeting, punctuation) {
    return greeting + 'ya ' + this.user + punctuation
  }

  console.log(bound('!'))

  // Bound with placeholders.
  var bound = bindKey(object, 'greet', bindKey.placeholder, '!')
  console.log(bound('hi'))
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>bindKey</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
