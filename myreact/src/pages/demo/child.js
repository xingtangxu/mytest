import React from 'react'
//导出要新建的页面
export default class Child extends React.Component{
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
    componentWillMount(){ console.log("will mount");}
    componentDidMount(){ console.log('did mount')}
    componentWillReceiveProps(newProps)
    {
        console.log('will props'+newProps.name)
    }
    //调用setState 就会更新的方法
    shouldComponentUpdate()
    {
        console.log();
        return true;
    }
    //将要更新前
    componentWillUpdate()
    {
        console.log('will Update')
    }
    componentDidUpdate()
    {
        console.log('did Update')
    }
    render()
    {
        return <div>
            <p>这里是子组件yarn</p>
              <p>{this.props.name}</p>
              </div>;
    }



}