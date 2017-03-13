(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order = "form"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var $ = window.jQuery;
    var myTruck = new Truck("ncc-1701", new DataStore());
    var temp;
    window.myTruck = myTruck;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);

        var slide = document.getElementById('strengthLevel');
        var slider = document.getElementById('slider');
        $("#slider").html(slide.value).css('color','green');
        slide.oninput = function(){
          $("#slider").html(this.value);
          if(this.value<34){
            $("#slider").css('color','green');
          }
          if(this.value>33&&this.value<66){
            $("#slider").css('color','yellow');
          }
          if(this.value>65){
            $("#slider").css('color','red');
          }
        };
      $("#powerup").hide();
      var emailCheck = document.getElementById('emailCheck');
      emailCheck.oninput= function(){
        if(this.value == myTruck.db.data[this.value].emailAddress){
          $("#powerup").show();
          temp = myTruck.db.data[this.value];
        }
        $( "#boost" ).on( "click", function() {
    $("#powerup").hide();
    temp.boost = $("input[name='powerup']:checked").val();
  });
      };
})(window);
