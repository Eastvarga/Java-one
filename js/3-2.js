const countProps = function(obj) {
    'use strict';
  // Write code under this line
 let count=Object.keys(obj);
//   Object.keys(obj).map(function(p1,p2){
// count+=1;
//   })

  return count.length;
};

// console.log(countProps({})); // 0

// console.log(countProps({a:1, b:1})); // 2

// console.log(countProps({a:1, b:1, c:1, d:1, e:1})); // 5