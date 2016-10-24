(function(){
  window.hasSupportInputType = function(type) {
    try {
       var input = document.createElement('input');
       input.type = type;
       return (input.type == type);
    } catch(e) {
      return false;
    }
 }
})();
