const A = new Set();
[10, 20, 30, 'd', 'Shubh'].forEach(item => A.add(item));

// add()
A.add(60);

// has()
console.log(A.has('d'));        // true

// values()
const vals = A.values();
console.log('values:',vals);        // values: [Set Iterator] { 10, 20, 30, 'd', 'Shubh', 60 }

// keys()
const key = A.keys();
console.log('Keys:',key);       // Keys: [Set Iterator] { 10, 20, 30, 'd', 'Shubh', 60 }

// entries()
// entries() method is supposed to return a [key,value] pair from an object.
// Set has no keys, so the entries() method returns [value,value].
const entry = A.entries();
console.log('Entries:',entry);
/*
Entries: [Set Entries] {
  [ 10, 10 ],
  [ 20, 20 ],
  [ 30, 30 ],
  [ 'd', 'd' ],
  [ 'Shubh', 'Shubh' ],
  [ 60, 60 ]
}
*/



// Logic Methods
// In JavaScript 2025, 7 new logical methods were added to the Set object:
const B = new Set(['a','b','c', 'd']);
const C = new Set(['c','d', 'e', 'f']);

// union()
console.log('union:',B.union(C))   // { 'a', 'b', 'c', 'd', 'e', 'f' }

// intersection()
console.log('intersection:',B.intersection(C)) // { 'c', 'd' }

// difference()
console.log('difference:',B.difference(C)) // { 'a', 'b' }

// symmetricDifference()
console.log('symmetricDifference:',B.symmetricDifference(C))   // { 'a', 'b', 'e', 'f' }

// isSubsetOf()
console.log('isSubsetOf:',new Set(['e', 'f']).isSubsetOf(C)) // true

// isSupersetOf()
console.log('isSupersetOf:',C.isSupersetOf(new Set(['e', 'f']))) // true

// isDisjointFrom()
console.log('isDisjointFrom:',B.isDisjointFrom(C)) // false