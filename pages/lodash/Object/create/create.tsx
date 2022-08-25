import type { NextPage } from 'next'
import { create } from 'lodash'

function runDemo1() {
  debugger
  function Shape(this: any) {
    this.x = 0
    this.y = 0
  }

  function Circle(this: { constructor: { (): void; prototype: any } }) {
    Shape.call(this)
  }

  Circle.prototype = create(Shape.prototype, {
    'constructor': Circle
  })

  const circle = new (Circle as any)

  const res1 = circle instanceof Circle
  console.log(res1)

  const res2 = circle instanceof Shape
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>create</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
