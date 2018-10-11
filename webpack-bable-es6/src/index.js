import _ from 'lodash'
import {
  name,
  year
} from './utils'

Promise.resolve(year).then(value => {
  console.log(`${name} - ${value} - ${_.add(1, 2)}`)
})