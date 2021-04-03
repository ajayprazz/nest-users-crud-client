import React from 'react';
import { Spin } from 'antd';
import './Loader.css';

const Loader = () => {
  return (
    <div className='custom-loader'>
      <Spin size='large' />
    </div>
  );
};

export default Loader;
