(function(){
  window.hasSupportInputType = function(type) {
    try {
       var input = document.createElement('input');
       input.type = type;
       if(input.type == type) return true;
       return false;
    } catch(e) {
      return false;
    }
 }
})();
