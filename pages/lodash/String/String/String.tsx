import type { NextPage } from 'next'
import {
  camelCase, capitalize, deburr, endsWith, escape,
  escapeRegExp, kebabCase, lowerCase, lowerFirst, map, pad,
  padEnd, padStart, parseInt, repeat, replace, snakeCase, split,
  startCase, template, toLower, toUpper, trim, trimEnd, trimStart,
  truncate, unescape, upperCase, upperFirst, words
} from 'lodash'

function runDemo1() {
  debugger
  const str1 = camelCase('Foo Bar')
  console.log(str1)

  const str2 = camelCase('--foo-bar--')
  console.log(str2)

  const str3 = camelCase('__FOO_BAR__')
  console.log(str3)
}

function runDemo2() {
  debugger
  const str1 = capitalize('FRED')
  console.log(str1)
}

function runDemo3() {
  debugger
  const str1 = deburr('déjà vu')
  console.log(str1)
}

function runDemo4() {
  debugger
  const str1 = endsWith('abc', 'c')
  console.log(str1)

  const str2 = endsWith('abc', 'b')
  console.log(str2)

  const str3 = endsWith('abc', 'b', 2)
  console.log(str3)
}

function runDemo5() {
  debugger
  const str1 = escape('fred, barney, & pebbles')
  console.log(str1)
}

function runDemo6() {
  debugger
  const str1 = escapeRegExp('[lodash](https://lodash.com/)')
  console.log(str1)
}

function runDemo7() {
  debugger
  const str1 = kebabCase('Foo Bar')
  console.log(str1)

  const str2 = kebabCase('fooBar')
  console.log(str2)

  const str3 = kebabCase('__FOO_BAR__')
  console.log(str3)
}

function runDemo8() {
  debugger
  const str1 = lowerCase('--Foo-Bar--')
  console.log(str1)

  const str2 = lowerCase('fooBar')
  console.log(str2)

  const str3 = lowerCase('__FOO_BAR__')
  console.log(str3)
}

function runDemo9() {
  debugger
  const str1 = lowerFirst('Fred')
  console.log(str1)

  const str2 = lowerFirst('FRED')
  console.log(str2)
}

function runDemo10() {
  debugger
  const str1 = pad('abc', 8)
  console.log(str1)

  const str2 = pad('abc', 8, '_-')
  console.log(str2)

  const str3 = pad('abc', 3)
  console.log(str3)
}

function runDemo11() {
  debugger
  const str1 = padEnd('abc', 6)
  console.log(str1)

  const str2 = padEnd('abc', 6, '_-')
  console.log(str2)

  const str3 = padEnd('abc', 3)
  console.log(str3)
}

function runDemo12() {
  debugger
  const str1 = padStart('abc', 6)
  console.log(str1)

  const str2 = padStart('abc', 6, '_-')
  console.log(str2)

  const str3 = padStart('abc', 3)
  console.log(str3)
}

function runDemo13() {
  debugger
  const str1 = parseInt('08')
  console.log(str1)

  const str2 = map(['6', '08', '10'], parseInt)
  console.log(str2)
}

function runDemo14() {
  debugger
  const str1 = repeat('*', 3)
  console.log(str1)

  const str2 = repeat('abc', 2)
  console.log(str2)

  const str3 = repeat('abc', 0)
  console.log(str3)
}

function runDemo15() {
  debugger
  const str1 = replace('Hi Fred', 'Fred', 'Barney')
  console.log(str1)
}

function runDemo16() {
  debugger
  const str1 = snakeCase('Foo Bar')
  console.log(str1)

  const str2 = snakeCase('fooBar')
  console.log(str2)

  const str3 = snakeCase('--FOO-BAR--')
  console.log(str3)
}

function runDemo17() {
  debugger
  const str1 = split('a-b-c', '-', 2)
  console.log(str1)
}

function runDemo18() {
  debugger
  const str1 = startCase('--foo-bar--')
  console.log(str1)

  const str2 = startCase('fooBar')
  console.log(str2)

  const str3 = startCase('__FOO_BAR__')
  console.log(str3)
}

function runDemo19() {
  debugger
  const compiled1 = template('hello <%= user %>!')
  const str1 = compiled1({ 'user': 'fred' })
  console.log(str1)

  const compiled2 = template('<b><%- value %></b>')
  const str2 = compiled2({ 'value': '<script>' })
  console.log(str2)

  const compiled3 = template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>')
  const str3 = compiled3({ 'users': ['fred', 'barney'] })
  console.log(str3)
}

function runDemo20() {
  debugger
  const str1 = toLower('--Foo-Bar--')
  console.log(str1)

  const str2 = toLower('fooBar')
  console.log(str2)

  const str3 = toLower('__FOO_BAR__')
  console.log(str3)
}

function runDemo21() {
  debugger
  const str1 = toUpper('--foo-bar--')
  console.log(str1)

  const str2 = toUpper('fooBar')
  console.log(str2)

  const str3 = toUpper('__foo_bar__')
  console.log(str3)
}

function runDemo22() {
  debugger
  const str1 = trim('  abc  ')
  console.log(str1)

  const str2 = trim('-_-abc-_-', '_-')
  console.log(str2)

  const str3 = map(['  foo  ', '  bar  '], trim)
  console.log(str3)
}

function runDemo23() {
  debugger
  const str1 = trimEnd('  abc  ')
  console.log(str1)

  const str2 = trimEnd('-_-abc-_-', '_-')
  console.log(str2)
}

function runDemo24() {
  debugger
  const str1 = trimStart('  abc  ')
  console.log(str1)

  const str2 = trimStart('-_-abc-_-', '_-')
  console.log(str2)
}

function runDemo25() {
  debugger
  const str1 = truncate('hi-diddly-ho there, neighborino')
  console.log(str1)

  const str2 = truncate('hi-diddly-ho there, neighborino', {
    'length': 24,
    'separator': ' '
  })
  console.log(str2)

  const str3 = truncate('hi-diddly-ho there, neighborino', {
    'length': 24,
    'separator': /,? +/
  })
  console.log(str3)

  const str4 = truncate('hi-diddly-ho there, neighborino', {
    'omission': ' [...]'
  })
  console.log(str4)
}

function runDemo26() {
  debugger
  const str1 = unescape('fred, barney, &amp; pebbles')
  console.log(str1)
}

function runDemo27() {
  debugger
  const str1 = upperCase('--foo-bar')
  console.log(str1)

  const str2 = upperCase('fooBar')
  console.log(str2)

  const str3 = upperCase('__foo_bar__')
  console.log(str3)
}

function runDemo28() {
  debugger
  const str1 = upperFirst('fred')
  console.log(str1)

  const str2 = upperFirst('FRED')
  console.log(str2)
}

function runDemo29() {
  debugger
  const str1 = words('fred, barney, & pebbles')
  console.log(str1)

  const str2 = words('fred, barney, & pebbles', /[^, ]+/g)
  console.log(str2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>String</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>_.camelCase([string=''])</button>
        <button className='button is-primary' onClick={() => runDemo2()}>_.capitalize([string=''])</button>
        <button className='button is-primary' onClick={() => runDemo3()}>_.deburr([string=''])</button>
        <button className='button is-primary' onClick={() => runDemo4()}>_.endsWith([string=''], [target], [position=string.length])</button>
        <button className='button is-primary' onClick={() => runDemo5()}>_.escape([string=''])</button>
        <button className='button is-primary' onClick={() => runDemo6()}>_.escapeRegExp([string=''])</button>
        <button className='button is-primary' onClick={() => runDemo7()}>_.kebabCase([string=''])</button>
        <button className='button is-primary' onClick={() => runDemo8()}>_.lowerCase([string=''])</button>
        <button className='button is-primary' onClick={() => runDemo9()}>_.lowerFirst([string=''])</button>
        <button className='button is-primary' onClick={() => runDemo10()}>_.pad([string=''], [length=0], [chars=' '])</button>
        <button className='button is-primary' onClick={() => runDemo11()}>_.padEnd([string=''], [length=0], [chars=' '])</button>
        <button className='button is-primary' onClick={() => runDemo12()}>_.padStart([string=''], [length=0], [chars=' '])</button>
        <button className='button is-primary' onClick={() => runDemo13()}>_.parseInt(string, [radix=10])</button>
        <button className='button is-primary' onClick={() => runDemo14()}>_.repeat([string=''], [n=1])</button>
        <button className='button is-primary' onClick={() => runDemo15()}>_.replace([string=''], pattern, replacement)</button>
        <button className='button is-primary' onClick={() => runDemo16()}>_.snakeCase([string=''])</button>
        <button className='button is-primary' onClick={() => runDemo17()}>_.split([string=''], separator, [limit])</button>
        <button className='button is-primary' onClick={() => runDemo18()}>_.startCase([string=''])</button>
        <button className='button is-primary' onClick={() => runDemo19()}>_.template([string=''], [options={ }])</button>
        <button className='button is-primary' onClick={() => runDemo20()}>_.toLower([string=''])</button>
        <button className='button is-primary' onClick={() => runDemo21()}>_.toUpper([string=''])</button>
        <button className='button is-primary' onClick={() => runDemo22()}>_.trim([string=''], [chars=whitespace])</button>
        <button className='button is-primary' onClick={() => runDemo23()}>_.trimEnd([string=''], [chars=whitespace])</button>
        <button className='button is-primary' onClick={() => runDemo24()}>_.trimStart([string=''], [chars=whitespace])</button>
        <button className='button is-primary' onClick={() => runDemo25()}>_.truncate([string=''], [options={ }])</button>
        <button className='button is-primary' onClick={() => runDemo26()}>_.unescape([string=''])</button>
        <button className='button is-primary' onClick={() => runDemo27()}>_.upperCase([string=''])</button>
        <button className='button is-primary' onClick={() => runDemo28()}>_.upperFirst([string=''])</button>
        <button className='button is-primary' onClick={() => runDemo29()}>_.words([string=''], [pattern])</button>
      </div>
    </>
  )
}

export default Page
