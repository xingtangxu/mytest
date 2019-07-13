import React from 'react'
import Child from './child'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

//导出要新建的页面
export default class Life extends React.Component{
    //构造方法
    constructor(props)
    {
        super(props);
        //render 调用都通过 state 理解为参数？
        this.state=
        {
            count:0  
        };
    }
    handleAdd=()=>
    {
        this.setState({
            count :this.state.count+1
        })
    }
    //方法声明 去使用要使用 bind(this) 内部指针导致的
    handleClick()
    {
        this.setState({
            count :this.state.count-2
        })
    }



    //生命周期里面最核心的方法 
    render(){
        let mystyle={ 
            padding:30
        }
        return <div style={mystyle}>
        <p>React 生命周期介绍</p>
        
        <button onClick={this.handleClick.bind(this)}>点击一下</button>
        <button onClick={this.handleAdd}>点击一下</button>
        <DatePicker></DatePicker>
        <p>{this.state.count}</p>
        <Child name={this.state.count}/>
        </div>





    }




}