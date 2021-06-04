/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './users/index'
import mock1 from './users/_userId'

export default (client) => mockServer([
  {
    path: '/users',
    methods: mock0
  },
  {
    path: '/users/_userId',
    methods: mock1
  }
], client, '')
