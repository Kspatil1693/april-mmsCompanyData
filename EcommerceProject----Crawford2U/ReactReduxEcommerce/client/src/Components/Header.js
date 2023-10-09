import React, { useState } from 'react';
import { Menu } from "antd";
import {
    MailOutlined,
    ShoppingOutlined,
    AppstoreOutlined,
    settingOutlined,
    SettingOutlined,
    UserOutlined,
    UserAddOutlined,
} from "@ant-design/icons";

import { Link } from 'react-router-dom';

const { SubMenu ,Item} = Menu;
const Header = () => {
    const [current, setCurrent] = useState('home');
    
    const handleClick = (e) => { 
    console.log(e.key)    
    setCurrent(e.key)
    }
  return (
    <div>
          <Menu onClick={handleClick} selectekeys={[current]} mode='horizontal' className='bg-dark text-white'>
              <Item key="home" icon={<AppstoreOutlined />}>
                  <Link to='/'>Crawford2U</Link>
              </Item>
                     
             
              <SubMenu  icon={<UserAddOutlined />}title="Register" className='float-right'>
                  
                      <Item key="agentRegister">
                          <Link to='/agentRegister'>Agent</Link>
                      </Item>
                      <Item key="clientRegister">
                          <Link to='/clientRegister'>Client</Link>
                      </Item>
                  
                 
              </SubMenu>
              <SubMenu icon={<UserOutlined />}title="Login" className='float-right'>
                  
                      <Item key="agentLogin">
                    <Link to='/agentLogin'>Agent</Link>
                      </Item>
                      <Item key="clientLogin">
                    <Link to='/clientLogin'>Client</Link>
                      </Item>
                  
                 
              </SubMenu>
               <SubMenu icon={<SettingOutlined/>}title="UserName" >
                  
                      <Item key="setting:1">option1</Item>
                      <Item key="setting:2">option2</Item>                
              </SubMenu>
          </Menu>
    </div>
  )
}

export default Header
