import { Router } from 'express';

const router = new Router();

const db = {
  books: [
    {
      name: '被討厭的勇氣：自我啟發之父「阿德勒」的教導',
      author: '岸見一郎',
      data: '★讓人生為之一變的全新經典，終於誕生！★日本亞馬遜年度冠軍書，連續300天長踞暢銷榜，街頭巷尾人手一冊！★榮獲日本2014年商業書大賞第三名，作者古賀史健榮獲評審特別獎！★獲選《經理人》雜誌2014年4月商管選書。★戴爾．卡內基：「阿德勒是畢生研究人類及其潛力的偉大心理學家！」★與佛洛依德、榮格齊名，並稱「心理學三巨頭」。阿德勒除了是心理學發展承先啟後之人，更堪稱自我啟發之父！',
      img: 'http://im2.book.com.tw/image/getImage?i=http://www.books.com.tw/img/001/065/31/0010653153_bc_01.jpg&v=543bb7fa&w=300&h=250',
    },
    {
      name: 'Node.js入門經典',
      author: '奧爾波',
      data: 'Node.js是一套用來編寫高性能網絡服務器的JavaScript工具包，從2009年誕生之日起，就獲得了業內專家和技術社區的強烈關注。而《Node.js入門經典》采用直觀、循序漸進的方法對如何使用Node.js來開發及具速度和可擴展性優勢的服務器端應用程序進行了講解。《Node.js入門經典》分為6部分，第1部分介紹了Node.js的基本概念和特性；第2部分講解如何借助HTTP模塊和Express Web框架，使用Node.js創建基本的網站；第3部分介紹了調試和測試Node.js應用程序的工具，以及部署Node.js應用的方法；第4部分講解了Node.js實現實時編程的能力以及Socket.IO；第5部分介紹了Node.js API以及構建Node.js應用程序所使用的組件；第6部分則介紹了CoffeeScript這款JavaScript預編譯器的知識，以及如何在Node.js中使用中間件、Backbone.js來創建單頁面應用的知識。',
      img: 'http://im1.book.com.tw/image/getImage?i=http://www.books.com.tw/img/CN1/098/98/CN10989846.jpg&v=517f810d&w=300&h=250',
    },
    {
      name: '哈利波特（8）被詛咒的孩子【原著劇本特別排演版',
      author: 'J.K.羅琳',
      data: '★席捲全球！橫掃英美暢銷排行榜TOP 1！★每日電訊報：雖然是以劇本的形式呈現，但一本全新的《哈利波特》小說所帶來的驚奇就是它的魔法！★澳洲國家日報：《哈利波特：被詛咒的孩子》和前面七集小說一樣迷人與令人難以抗拒！★衛報：近十年來銷售最快的一本書，看來更將成為有史以來最暢銷的舞台劇本！★《GQ》雜誌：《哈利波特：被詛咒的孩子》將滿足所有哈利波特迷！',
      img: 'http://im1.book.com.tw/image/getImage?i=http://www.books.com.tw/img/001/073/42/0010734222.jpg&v=581336c8&w=300&h=250',
    },
  ],
  lists: [
    [0, 2],
    [1, 0]
  ],
};


router.get('/books/:id', (req, res) => {
  res.json(db.books[req.params.id]);
});
router.get('/lists/:id', (req, res) => {
  res.json(db.lists[req.params.id]);
});
export default router;
