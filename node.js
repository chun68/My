commonjs of   module   specification
1.The  sample  code   referenced  by  the   module   id  as  follows:
var   math = require('math');
//math.js
2.Mount  the  method  on  the  exports  objecct  as  a  property  to  deline  the  way  the   export  is   exportes:
  exports.add = function(){
     var   sum = 0,
     i = 0,
     args = arguments,
     l = args.length;
     while(i <１)｛
      sum += args[i++];
    }
     return  sum;
  }
