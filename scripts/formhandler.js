(function(window){
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;
  var myModal = document.getElementById('myModal');
  var slide = document.getElementById('strengthLevel');
  var slider = document.getElementById('slider');
  function FormHandler(selector){
    if(!selector){
      throw new Error('no selector provided');
    }
    this.$formElement = $(selector)
    if(this.$formElement.length === 0){
      throw new Error('could not find element with selector: ' + selector);
    }
  }
  FormHandler.prototype.addSubmitHandler = function(fn){
    console.log('Setting Submit handler for form');
    this.$formElement.on('submit',function(event){
      event.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function(item){
        data[item.name]=item.value;
        console.log(item.name +' is ' + item.value);
      });

      console.log(data);
      fn(data);
      if(data['size']=='liter'&&data['flavor']!==''&& data['strength']=='100'){
        $("#myModal").modal('toggle');
      }
      this.reset();
      this.elements[0].focus();
      $("#slider").html(slide.value);
    });
  };
  App.FormHandler=FormHandler;
  window.App=App;
})(window);
