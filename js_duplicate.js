function findCommonElements(arr1, arr2) {
   
    let common = [];
    
    
    for (let i = 0; i < arr1.length; i++) {
      
        for (let j = 0; j < arr2.length; j++) {
         
            if (arr1[i] === arr2[j]) {
               
                let alreadyInCommon = false;
                for (let k = 0; k < common.length; k++) {
                    if (common[k] === arr1[i]) {
                        alreadyInCommon = true;
                        break;
                    }
                }
              
                if (!alreadyInCommon) {
                    common.push(arr1[i]);
                }
            }
        }
    }

    return common;
}

// Example usage:
let array1 = [8, 9, 5, 4, 6];
let array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4,5,6,8]
