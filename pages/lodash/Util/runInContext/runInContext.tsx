import type { NextPage } from 'next'
import _ from 'lodash'

function runDemo1() {
  debugger

  _.mixin({ 'foo': _.constant('foo') })

  const lodash = _.runInContext()
  lodash.mixin({ 'bar': lodash.constant('bar') })

  // @ts-ignore
  const r1 = _.isFunction(_.foo)
  console.log(r1)

  // @ts-ignore
  const r2 = _.isFunction(_.bar)
  console.log(r2)

  // @ts-ignore
  const r3 = lodash.isFunction(lodash.foo)
  console.log(r3)

  // @ts-ignore
  const r4 = lodash.isFunction(lodash.bar)
  console.log(r4)

  // Create a suped-up `defer` in Node.js.
  const defer = _.runInContext({ 'setTimeout': window.setImmediate }).defer
  console.log(defer)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>runInContext</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
