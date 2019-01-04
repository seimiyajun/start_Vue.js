const items = [
  {
    name: '鉛筆',
    price: 300,
    quantity: 0,
  },
  {
    name: 'ノート',
    price: 400,
    quantity: 1,
  },
  {
    name: '消しゴム',
    price: 500,
    quantity: 1,
  },
]

const vm = new Vue({
  el: '#app',
  data: {
    items: items,
    loggedInButton: 'ログイン済のため購入できます',
  },
  filters: {
    numberWithDelimiter: function (value) {
      if (!value) {
        return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    }
  },
  methods: {
    doBuy: function () {
      alert(this.totalPriceWithTax + '円のお買い上げ！')
      this.items.forEach(function (item) {
        item.quantity = 0
      })
    }
  },
  computed: {
    totalPrice: function () {
      return this.items.reduce(function (sum, item) {
        return sum + (item.price * item.quantity)
      }, 0)
    },
    totalPriceWithTax: function () {
      return Math.floor(this.totalPrice * 1.08)
    },
    canBuy: function () {
      // 1000円以上から購入可能にする
      return this.totalPrice >= 1000
    },
    cannotBuyClass: function () {
      return {
        cannotBuy: !this.canBuy
      }
    }
  }
});

vm.$watch(function () {
  return this.items[0].quantity
}, function(quantity){
  console.log(quantity)
});

window.vm = vm;