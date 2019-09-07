import React, { useState } from 'react';
import ProductItem from "./ProductItem";
import { Spin } from 'antd';
import { fakeOrder, fakeLabel } from '../../fakeData';

const LabelNav = ({
  source,
  onClick,
  status
}) => {
  const listDom = source.map((item) => {
    const className = item.status === status ? 'nav-item active' : 'nav-item';
    return (
      <label className={className} onClick={() => onClick(item.status)} key={item.status}>
        {item.text}
      </label>
    )
  });
  return (
    <div className="label">
      <nav>
        {listDom}
      </nav>
    </div>
  )
};

const filterOrder = (data, status) => {
  switch (status) {
    case 'PAYMENT':
      return data.filter((item) => item.status === status);
    case 'SHIP':
      return data.filter((item) => item.status === status);
    case 'RECEIPT':
      return data.filter((item) => item.status === status);
    case 'COMMENT':
      return data.filter((item) => item.status === status);
    default:
      return data;
  }
}

const Title = () => {
  return (
    <div className="flex-type">
      <div className="grid commodity">宝贝</div>
      <div className="grid unit-price">单价</div>
      <div className="grid quantity">数量</div>
      <div className="grid price">实付款</div>
      <div className="grid operating">交易操作</div>
    </div>
  );
};

const List = ({
  source
}) => { //待确定
  const orderListDom = source.map(item => <ProductItem {...item} key={item.merchant} />);
  return (
    <div className="product-list">
      <Title />
      {orderListDom}
    </div>
  );
};

const Product = () => {
  const [type, setType] = useState('ALL');
  const [loading, setLoading] = useState(false);
  const order = filterOrder(fakeOrder, type);
  const handleChangeType = (type) => {
    setLoading(true);
    setTimeout(() => {
      setType(type);
      setLoading(false);
    }, 350);
  };
  return (
    <div className="product">
      <LabelNav source={fakeLabel} onClick={handleChangeType} status={type} />
      <Spin size="large" spinning={loading}>
        <List source={order} />
      </Spin>
    </div>
  );
};

export default Product;