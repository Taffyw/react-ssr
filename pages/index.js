import {Component} from 'react'
import Layout from '../components/layout'
import Swiper from '../components/swiper'
export default class extends Component {
  render () {
    return (
      <Layout title='首页'>
        <Swiper/>
      </Layout>
    )
  }
}
