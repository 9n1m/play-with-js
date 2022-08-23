import type { NextPage } from 'next'
import { bind } from 'lodash'

function runDemo1() {
  debugger
  const object = { 'user': 'fred' }

  function greet(this: any, greeting: string, punctuation: string): string {
    return greeting + ' ' + this.user + punctuation
  }

  var bound = bind(greet, object, 'hi')
  console.log(bound('!'))

  var bound = bind(greet, object, bind.placeholder, '!')
  console.log(bound('hi'))
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>bind</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
