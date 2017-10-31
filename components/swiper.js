import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Swiper extends React.Component {
  constructor(props){
    super(props);
    this.state={
      index:0,
      img:[
        'http://13154611.s61i.faiusr.com/2/AD0Is-KiBhACGAAglbXDxgUoyviR5QUwgA84iAQ.jpg',
        'http://13154611.s61i.faiusr.com/2/AD0Is-KiBhACGAAgiJa9xgUokpqOaDCADziIBA.jpg'
      ]
    }
  }
  onSwiperChange(index){
    this.setState({index:index})
  }
  onSwiperClick(type){
    const len = this.state.img.length
    let {index} = this.state
    type === 'next'?index++:index--
    index > len-1 ? index = 0 :''
    index < 0 ? index = len-1 : ''
    this.setState({index:index})
  }
  renderItem(){
    const {img} = this.state
    return img.map((item,index)=>{
      return (
        <div className='swiper-item' key={index}>
          <img src={item} alt=""/>
          <style jsx>{
            `
          .swiper-item{
            img{
            width:100%
            }
          }
        `
          }
          </style>
        </div>
      )
    })
  }
  render() {
    const {index} = this.state
    return (
      <div className="swiper">
        <div className="button" onClick={()=>{this.onSwiperClick('prev')}}></div>
        <div className="button next" onClick={()=>{this.onSwiperClick('next')}}></div>
        <AutoPlaySwipeableViews
          autoplay={true}
          interval={6000}
          index={index}
          enableMouseEvents={true}
          onChangeIndex={(index) => {
            this.onSwiperChange(index)
          }}
          springConfig={{duration: '1s', delay: '.2s', easeFunction: 'ease-out'}}
        >
          {this.renderItem()}
        </AutoPlaySwipeableViews>
        <style jsx>{
          `
          .swiper{
            position:relative
          }
          .button{
            position: absolute;
            top: 50%;
            margin-top: -35.5px;
            left: 40px;
            z-index:999;
            color:#fff;
            font-size: 12px;
            font-family: 'Verdana';
            text-align: center;
            display: block;
            overflow: hidden;
            width: 71px;
            height: 71px;
            cursor: pointer;
            border-radius: 6px;
            background:url(http://2.ss.faisys.com/image/site/left.png?v=201406241613) no-repeat rgba(0,0,0,0.1)
          }
          .button.next{
              left:auto;
              right:40px;
              background:url(http://2.ss.faisys.com/image/site/right.png?v=201406241613) no-repeat rgba(0,0,0,0.1)
            }
          .swiper-item{
            img{
            width:100%
            }
          }
        `
        }
        </style>
      </div>
    )
  }
}

export default Swiper;