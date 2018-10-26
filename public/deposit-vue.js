(function() {
    var depositVue = new Vue({
      el: '#depositVue',
      data: {
        accountNo: null,
        amount: null,
        pinCode: null,
        deposit: []
      },
      methods: {
        depositMoney: function() {
          var self = this;
          var payload = {
            accountNo: self.accountNo,
            amount: self.amount,
            pinCode: self.pinCode
          };
          axios.post('/deposit', payload)
            .then(function(res) {
              self.deposit = res.data;
            })
            .catch(function(err) {
            });
        }
      }
    });
    console.log(depositVue);
  })();