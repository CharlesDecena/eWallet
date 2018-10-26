(function() {
    var transferFundsVue = new Vue({
      el: '#transferFundsVue',
      data: {
        fromAccountNo: null,
        amount: null,
        toAccountNo: null,
        pinCode: null,
        transferFunds: []
      },
      methods: {
        update: function() {
          var self = this;
          var payload = {
            fromAccountNo: self.fromAccountNo,
            amount: self.amount,
            toAccountNo: self.toAccountNo,
            pinCode: self.pinCode
          };
          axios.post('/transferfunds', payload)
            .then(function(res) {
              self.transferFunds = res.data;
            })
            .catch(function(err) {
            });
        }
      }
    });
    console.log(transferFundsVue);
  })();