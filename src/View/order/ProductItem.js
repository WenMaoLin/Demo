import React from 'react';

//计算实际付款金额 args：价格、商品数量、运费
const calculatePrice = (price, quantity, freight) => {
  return (price * quantity) + freight;
};

const Title = ({
  time,
  orderNumber
}) => {
  return (
    <div className="product-title">
      <span className="time">{time}</span>
      <span className="order-number">订单号：{orderNumber}</span>
    </div>
  );
};

// PAYMENT、SHIP、RECEIPT、COMMENT
const Button = ({
  status
}) => {
  let className = 'button ',
      text;
  switch (status) {
    case 'COMMENT':
      text = '评价';
      break;
    case 'CONFIRM':
      className += 'active';
      text = '确认收货';
      break;
    default:
      text = '未知';
  }
  return (
    <a
      href="https://github.com/wenmaolin"
      className={className}
    >
      {text}
    </a>
  );
};

const ProductInfo = ({
   name, //商品名字
   img, //商品图片
   merchant, //商家
   unitPrice, //商品单价
   price, //商品实际价格
   quantity, //数量
   freight, //运费
   status //订单状态
}) => {
  const actualPrice = calculatePrice(price, quantity, freight);
  return (
    <div className="product-info">
      <div className="info-wrapper">
        {/*商品图片*/}
        <div className="grid img">
          <img src={img} width="160" height="160" alt="宝贝" />
        </div>

        {/*商品标题*/}
        <div className="grid name">
          <p><a href="https://github.com/wenmaolin">{name}</a></p>
        </div>

        {/*商品单价*/}
        <div className="grid price">
          <p className="unit-price">¥{unitPrice}</p>
          <p>¥{price}</p>
        </div>

        {/*数量*/}
        <div className="grid quantity">{quantity}</div>

        {/*实际付款*/}
        <div className="grid amount">
          <p>¥{actualPrice}</p>
          <p className="freight">{`(含运费：￥${freight})`}</p>
        </div>

        {/*交易操作*/}
        <div className="grid operating">
          <Button status={status} />
        </div>
      </div>
    </div>
  );
};

const ProductItem = (props) => {
  return (
    <div className="product-item">
      <Title {...props} />
      <ProductInfo {...props} />
    </div>
  );
};

export default ProductItem;