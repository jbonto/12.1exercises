//these variables are for testing
numArray = [2,3,4,5,6,7,8,9];
nameArray = ['Bill', 'Jane', 'Ryan', 'Jill'];
keyAndVal = [
    {name : 'bill'},
    {name : 'jill'}, 
    {name : 'phil'}
]

keyAndValFull = [
    {first : 'bill', last:'tailor'},
    {first : 'jill', last : 'house'}, 
    {first : 'phil', last : 'tile'}
]

keyAndValCat = [
    {first : 'bill', last:'tailor'},
    {first : 'jill', last : 'house', isCatOwner : true}, 
    {first : 'phil', last : 'tile', isCatOwner : true}
]
function doubleFavlues(arr){
    newArray = [];
    arr.forEach(function(value){
        newArray.push(value * 2);
    })
    return newArray;
}

function onlyEvenValues(arr){
    newArray = [];
    arr.forEach(function(value){
        if(value % 2=== 0){
            newArray.push(value);
        }
    })
    return newArray;
}

function showFirstAndLast(arr){
    newArray = [];
    arr.forEach(function(value){
        item = value[0] + value[value.length - 1];
        newArray.push(item);
    })
    return newArray;
}

function addKeyAndValue(arr, key, item){
    
    arr.forEach(function(value){
        value[key] = item;
    })
    return arr;
}

function vowelCount(word){
    counter = {}
    const vowels ='aeiou';
    let splitWord = word.split("");

    splitWord.forEach(function(letter){
        let lowerCase = letter.toLowerCase();
        if(vowels.indexOf(lowerCase!==-1)){
            if(counter[lowerCase]){
                counter[lowerCase]++;
            } else {
                counter[lowerCase] = 1;
            }
        }
    })
    return counter;
}

function doubleValuesWithMap(arr){
    newArray = arr.map(function(value){
        return value * 2;
    })
    return newArray;
}

function valTimesIndex(arr){
    newArray = arr.map(function(value, index){
        return value * index;
    })
    return newArray;
}

function extractKey(arr, item){
    newArray = arr.map(function(value){
        return value[item];
    })
    return newArray;
}

function extractFullName(arr){
    fullname = arr.map(function(arr){
        return arr.first + ' '+arr.last;
    })
    return fullname;
}

function filterByValue(arr){
    
    return  arr.filter(function(value,index){
        return value.isCatOwner;
    }) 
}

function find(arr, item){
    return arr.filter(function(value){
        return value === item;
    })[0]
}

function findInObj(arr, key, search){
    return arr.filter(function(value){
        return value[key] === search;
    })[0]
}

function removeVowel(word){
    word = word.toLowerCase();
    const vowel ='aeiou';
    newWord = '';
    return word.split("").filter(function(value){
        return vowel.indexOf(value) === -1;
    }).join("")
}

function doubleOddNumbers(arr){
    return arr.filter(function(value){
        return value % 2 === 1;
    }).map(function(value){
        return value * 2;
    })
}