import type { NextPage } from 'next'
import { partialRight } from 'lodash'

function runDemo1() {
  function greet(greeting: string, name: string) {
    return greeting + ' ' + name
  }

  const greetFred = partialRight(greet, 'fred')
  console.log(greetFred('hi'))

  // Partially applied with placeholders.
  const sayHelloTo = partialRight(greet, 'hello', partialRight.placeholder)
  console.log(sayHelloTo('fred'))
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>partialRight</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
