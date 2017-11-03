import {Component} from 'react'
import Layout from '../components/layout'
import axios from 'axios'
export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      user:[]
    }
  }
  fetchUser(){
    axios.get('/api').then(res=>{
      this.setState({
        user:res.data
      })
    })
  }
  componentDidMount() {
    this.fetchUser()
  }
  render () {
    const {user} = this.state
    return (
      <Layout title='关于我们'>
        <p>关于我们</p>
        {user.map((item,index)=>{
          return (
            <div className='wid'>
              <div>用w户列表</div>
              <div className="id">{item._id}</div>
              <div className="name">{item.name}</div>
            </div>
          )}
        )}
      </Layout>
    )
  }
}
