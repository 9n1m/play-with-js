import type { NextPage } from 'next'
import _ from 'lodash'

function runDemo1() {
  debugger
  const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
  ]

  // The `_.matches` iteratee shorthand.
  const r1 = _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }))
  console.log(r1)

  // The `_.matchesProperty` iteratee shorthand.
  const r2 = _.filter(users, _.iteratee(['user', 'fred']))
  console.log(r2)

  // The `_.property` iteratee shorthand.
  const r3 = _.map(users, _.iteratee('user'))
  console.log(r3)

  // Create custom iteratee shorthands.
  _.iteratee = _.wrap(_.iteratee, function (iteratee, func) {
    return !_.isRegExp(func) ? iteratee(func) : function (string) {
      return func.test(string)
    }
  })

  const r4 = _.filter(['abc', 'def'], /ef/)
  console.log(r4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>iteratee</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
