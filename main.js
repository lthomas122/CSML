function addColorPanel(type) {
  if (type == 'bg'){
    addColorPanel.bgCalled++;
    addColorPanel.timesCalled = addColorPanel.bgCalled;
  }
  else if (type == 'txt'){
    addColorPanel.txtCalled++;
    addColorPanel.timesCalled = addColorPanel.txtCalled;
  }
  var x = $(".color-panels-" + type);
  var $input = "<div>Color Name: <input type='text' class='colorname' value='Dark'></div><div>Color Hex: <input type='text' class='jscolor' value='222222'></div>";
  x.append($input);
  new jscolor($('.color-panels-' + type +' .jscolor')[addColorPanel.timesCalled]);
}
addColorPanel.bgCalled = 0;
addColorPanel.txtCalled = 0;

$(function(){
  $("button").click(function(e){
    e.preventDefault();
  });
});
