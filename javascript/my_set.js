class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters
  constructor(iterable) {

    const checkArray = Array.isArray(iterable);
    const checkString = typeof (iterable) === 'string';
    const checkNothing = typeof (iterable) === 'undefined';

    if (!(checkArray || checkString || checkNothing)) {
      throw new Error('Invalid input');
    }

    this.data = {};
    if (iterable && iterable.length > 0) {
      Array.from(iterable).map(el => {
        if (!this.data[el]) {
          this.data[el] = true;
        }
      })
    }
  }

  // return number of elements in MySet
  size() {
    return Object.keys(this.data).length;
  }

  // add an item to MySet as is
  // don't worry about arrays here!
  // return the MySet instance
  add(item) {
    if (!this.data[item]) {
      this.data[item] = true;
    }
    return this;
  }

  // delete an item from MySet
  // don't worry about arrays here!
  // return true if successful, otherwise false
  delete(item) {
    if (this.data[item]) {
      this.data[item] = undefined;
      return true; 
    }else{
      return false;
    }
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    if (this.data[item]) {
      return true; 
    }else{
      return false;
    }

  }

  // return data as an array
  // don't worry about arrays here!
  entries() {

  }
}

if (require.main === module) {
  const ms = new MySet('hello');
  console.log(ms.size());
}

module.exports = MySet;

