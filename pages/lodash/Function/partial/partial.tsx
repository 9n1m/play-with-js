import type { NextPage } from 'next'
import { partial } from 'lodash'

function runDemo1() {
  function greet(greeting: string, name: string) {
    return greeting + ' ' + name
  }

  const sayHelloTo = partial(greet, 'hello')
  console.log(sayHelloTo('fred'))

  // Partially applied with placeholders.
  const greetFred = partial(greet, partial.placeholder, 'fred')
  console.log(greetFred('hi'))
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>partial</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
