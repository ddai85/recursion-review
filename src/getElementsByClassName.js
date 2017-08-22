// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var result = [];
  // if node has className return node else do nothing
  var checkClass = function(node) {
    if (node.classList !== undefined) {

      if (node.classList.contains(className)) {
        result.push(node);
      }
    }
    
    for (var i = 0; i < node.childNodes.length; i++) {
      checkClass(node.childNodes[i]);
    }
  };

  checkClass(document.body);
  // get children of current node
  // recurse through function on child nodes
  return result;
  //document.body, element.childNodes, and element.classList
};
