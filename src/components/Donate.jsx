/* global TrademcAPI */

function Donate() {
  TrademcAPI.GetBuyForm({
    Shop: "186970",
    Title: "Поддержать наш сервер!",
    Nickname: "Введите ваш никнейм",
    Item: "Выберите товар",
    Coupon: "Введите купон, если есть",
    Button: "Продолжить",
    Success_URL: "https://trademc.org",
    Pending_URL: "https://trademc.org",
    Fail_URL: "https://trademc.org",
    PastPlaceID: "trademc-buyform",
  });
  return <div id="trademc-buyform"></div>;
}

export default Donate;
