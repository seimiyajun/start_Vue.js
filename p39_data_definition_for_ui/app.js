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
    items: items
  },
  filters: {
    numberWithDelimiter: function (value) {
      if (!value) {
        return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
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

const logged_in_button = new Vue({
  el: '#b-button',
  data:{
    loggedInButton: 'ログイン済のため購入できます',
    items: items
  },
  computed: {
    totalPrice: function () {
      return this.items.reduce(function (sum, item) {
        return sum + (item.price * item.quantity)
      }, 0)
    },
    canBuy: function () {
      // 1000円以上から購入可能にする
      return this.totalPrice >= 1000
    }
  }
})

// window.vue = vue;