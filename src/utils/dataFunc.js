import EMPLOYEES from 'constants/data'
import _ from 'lodash'

export const getJobList = () => {
  const set = new Set()
  EMPLOYEES.forEach((item) => set.add(item.job))
  return Array.from(set)
}

export const getData = (data, filter, searchTerm) => {
  return data.filter((item) => {
    if (!_.isEmpty(filter)) {
      if (filter.indexOf(String(item.job)) === -1) return false
    }
    if (!_.isEmpty(searchTerm)) {
      // eslint-disable-next-line max-len
      if (String(item.name).indexOf(searchTerm) === -1 && String(item.email).indexOf(searchTerm) === -1) return false
    }
    return true
  })
}

export const generateEmail = (str) => {
  const strArr = str.split('-')
  let email = ''

  if (strArr.length === 1) email += strArr[0]
  else {
    email = email.concat(strArr[strArr.length - 1], '.', strArr[0])
  }

  const number = EMPLOYEES.reduce((acc, item) => {
    if (String(item.email).includes(email)) {
      acc += 1
      return acc
    }
    return acc
  }, 0)

  if (number === 0) email = email.concat('@ntq-solution.com.vn')
  else email = email.concat(String(number), '@ntq-solution.com.vn')

  return email
}
