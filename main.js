function addColorPanel(type) {
  //console.log(type);
  var count = 0;
  count += 1;
  type = type.toString();
  var x = $(".color-panels-" + type);
  var $input = "<div>Color Name: <input type='text' class='colorname' value='Dark'></div><div>Color Hex: <input type='text' class='jscolor' value='222222'></div>";
  x.append($input);
  new jscolor($('.color-panels-' + type +' .jscolor')[count]);
  console.log(count);
}

$(function(){
  $("button").click(function(e){
    e.preventDefault();
  });
});
