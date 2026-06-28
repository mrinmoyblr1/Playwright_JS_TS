// Author: Mrinmoy

function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  
  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  
  return Array.from(duplicates);
}

// Usage
console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5])); // Output: [2, 3]


function findDuplicates(arr) {
  const count = {};
  const duplicates = [];
  
  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
  }
  
  for (const [num, freq] of Object.entries(count)) {
    if (freq > 1) {
      duplicates.push(Number(num));
    }
  }
  
  return duplicates;
}

// Usage
console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5])); // Output: [2, 3]


function findFirstDuplicate(arr) {
  const seen = new Set();
  
  for (const num of arr) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }
  
  return -1; // No duplicate found
}

// Usage
console.log(findFirstDuplicate([1, 2, 3, 2, 4, 3, 5])); // Output: 2

