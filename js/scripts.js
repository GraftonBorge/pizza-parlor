

class Pizza {
  constructor() {
    this.size = [];
  }
};

function pizzaSizeChoice(sizeChoice) {
  const db = db_sizes;
  for (let i = 0; i < db.length; i++) {
    let currentSize = db[i];
    if (currentSize.size === sizeChoice) {
      const smallPizza = new Pizza()
      smallPizza.size = sizeChoice
    }
  }
}
  const db_sizes = [
    {
    size: "small",
    cost: 1.00
    },
  ];


$(document).ready(function(){

  $("#sizes").submit(function(event) {
    event.preventDefault();
    const small = $("#small").val();
      if (small.checked === true){
        pizzaSizeChoice(small)
        $('#order').text(smallPizza)
      }
  })

})