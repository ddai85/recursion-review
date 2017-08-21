// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
// create an array name result
//if typeof strings want to return string
// if typeof numbers want to return numbers strings
//  if typeof boolean want to return boolean to string
//   if typeof object 
 //   if Array.isArray(obj)
 //    if obj.length === 0 return "[]"

  var result = [];
  
  if (typeof obj === 'string') {
    return '"' + obj + '"';

  } else if (typeof obj === 'number') {
    return obj + '';   

  } else if (typeof obj === 'boolean') {
    return obj + '';
    
  } else if (typeof obj === 'function' || typeof obj === 'undefined') {
    return undefined;       
            
  } else if (typeof obj === 'object') {

    if (obj === null) {
      return 'null';
    }
    
    if (Array.isArray(obj)) {
       
      if (obj.length === 0) {
        return '[]';
      }

      for (var i = 0; i < obj.length; i++) {
        result.push(stringifyJSON(obj[i]));
      }
      return '[' + result.join(',') + ']';
    } else {
      
      if (Object.keys(obj).length === 0) {
        return '{}'; 
      } else {
        for (var key in obj) {
          
          if (stringifyJSON(obj[key]) === undefined) {
            continue;
          }
          result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }
      }
      return '{' + result.join(',') + '}';      
      
    }


  } 

};
