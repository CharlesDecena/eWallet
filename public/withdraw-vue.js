(function() {
    var withdrawVue = new Vue({
      el: '#withdrawVue',
      data: {
        accountNo: null,
        amount: null,
        pinCode: null,
        withdraw: []
      },
      methods: {
        withdrawMoney: function() {
          var self = this;
          var payload = {
            accountNo: self.accountNo,
            amount: self.amount,
            pinCode: self.pinCode
          };
          axios.post('/withdraw', payload)
            .then(function(res) {
              self.withdraw = res.data;
            })
            .catch(function(err) {
            });
        }
      }
    });
    console.log(withdrawVue);
  })();