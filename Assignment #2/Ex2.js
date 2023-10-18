function contains(obj, target) {
  for (var key in obj) {
    if (obj[key] === target) {
      return true;
    } else if (typeof obj[key] === 'object') {
      if (contains(obj[key], target)) {
        return true;
      }
    }
  }
  return false;
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

var searchValue = 'foo2';
var result = contains(nestedObject, searchValue);
console.log(result); // true
