import React, { Fragment } from 'react'

export default class Demo extends React.Component
{
    //构造方法 用来设置数据
    constructor(props)
    {
        super(props)
        this.state=
        {
            //只有定义的参数变化 页面才会渲染
            inputValue:'我是input默认值',
            list:['学习react','学习ant design pro']
        }

    }
    handleAdd=(e)=>
    {
            console.log(e.currentTarget.value);
            //调用渲染方法
            this.setState({
                inputValue:e.currentTarget.value
            })
            console.log(this);
    }
    
    render()
    {
        return <Fragment>
               <div>
                <input value={this.state.inputValue}
                onChange={this.handleadd1.bind(this)}/>
                <button onClick={this.handuldata.bind(this)}>点击添加</button>
               </div>
               <div>
                   
                   <ul>{this.state.list.map((item,index)=>{
                       return <li>{item}</li>
                   })}
            
                   </ul>
               </div>


        </Fragment>
    }

    handleadd1(e)
    {
        console.log(e.currentTarget.value);
        this.setState({
            inputValue:e.currentTarget.value
        })
        console.log(this);
    }
    handuldata()
    {        
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
        console.log(this);
    }



}