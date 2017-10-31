import {Component} from 'react'
import Layout from '../components/layout'
import Swiper from '../components/swiper'
export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      item:[
        {img:'http://13154611.s61i.faiusr.com/4/AD0Is-KiBhAEGAAgyoGoxgUooP-yzwEw9wE4lwE.png',title:'走进公司',des:'十余年间，我们从一家单体药店发展成为中外合资大型药品零售连锁上市企业'},
        {img:'http://13154611.s61i.faiusr.com/4/AD0Is-KiBhAEGAAgzYGoxgUo7KD_JTD2ATiXAQ.png',title:'企业文化',des:'致力健康事业 成就百年老店'},
        {img:'http://13154611.s61i.faiusr.com/4/AD0Is-KiBhAEGAAgz4GoxgUoiJW6sQEw9gE4lwE.png',title:'创新中心',des:'实现各电商平台购物，实价，优品。结合中医馆服务各平台，拓展业务'},
        {img:'http://13154611.s61i.faiusr.com/4/AD0Is-KiBhAEGAAg0YGoxgUomNPrAjD2ATiXAQ.png',title:'投资者关系',des:'对接业务运营与资本市场，实现股东投资价值最大化'},
      ]
    }
  }
  renderItem(){
    const {item} = this.state
    return item.map((item,index)=>{
      return (
        <li className='info-item' key={index} style={{
          backgroundImage:`url(${item.img})`,
        }}>
          <div className="warp">
            <div className="title">{item.title}</div>
            <div className="des">{item.des}</div>
          </div>
        </li>
      )
    })
  }
  render () {
    return (
      <Layout title='首页'>
        <Swiper/>
        <div className="info-list wid">
          <ul className='clearfix'>
            {this.renderItem()}
          </ul>
        </div>
      </Layout>
    )
  }
}
