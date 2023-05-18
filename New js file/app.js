let add = +prompt("eded elave edin")
let arr1 = [];

for(i=0;i<3;i++){

}


const arr2 = [
    "esqin 2000",
    "zeyneb 1798",
    "cavidan 1879",
    "ali 1978"
]

arr2.sort((a,b)=>b.slice(-4) - a.slice(-4))

console.log(arr2);
const family = ["leyli","manjon","asif","vasif","balasif"]
function familyToSentence(...family){
    return family.join(", ")
};
console.log(familyToSentence(family));


const cm2 = ["ali","esqin","ayla","zeyneb","aytac"];

function convertFirstSymbolAndUppercase(word){
    return word.slice(0,1).toUpperCase()
}

let result = convertFirstSymbolAndUppercase("ali")

console.log(result);



let age =    Math.floor((Math.random()*100)+1)


const ageBtw0And100 = (age) => {
    let sum = 0;
    for(let i = 0; i<=100;i++){
        if(sum<1000){
            sum += age
        }
        else if(sum>1000){
            sum -= age
            break
        }
    }
    return sum;
}


console.log(ageBtw0And100(age));


function findMenBetween0And100(numMen) {
    class Person {
      constructor(age) {
        this.age = age;
      }
    }
    let menBetween0And100 = 0;
    let ageCounts = {};
  
    for (let i = 0; i < numMen; i++) {
      this.age = Math.floor(Math.random() * 101);
      this.person = new Person(age);
  
      if (person.age <= 100) {
        menBetween0And100++;
  
        if (ageCounts.hasOwnProperty(person.age)) {
           ageCounts[person.age]++; 
        } else {
          ageCounts[person.age] = 0;
        }
        
      }
    }
    return ({ menBetween0And100, ageCounts });
  }
  console.log(findMenBetween0And100(1000));

//task 1
let endArr = [];


for(let i = 0; i<5;i++){
    let addNum = +prompt("Eded daxil edin");
    arr.push(addNum)
}

console.log(arr);


//task 2
let multiplyArr = [1,2,3,4,5];

const multiplyNum = (multiplyArr) => {
    let total = 1;
    for(let i = 0; i<multiplyArr.length;i++){
        total*=multiplyArr[i]
    }
    return total;
}

console.log(multiplyNum(multiplyArr));



//task 3

function multiply(...mul){
      let total = 1;
    for( let i = 0; i < mul.length; i++){
        total *= mul[i]
    }
    return total;

}

console.log(multiply(6, 5, 4) )
console.log(multiply(6,5,4,3) )
console.log(multiply(6,5,4,50) )


function multiply() {
    let result = 1;
    for (let i = 0; i < arguments.length; i++) {
      result *= arguments[i];
    }
    return result;
  }
  
  console.log(multiply(2, 3, 4)); // 24
  console.log(multiply(5, 10)); // 50
  console.log(multiply(1, 2, 3, 4, 5)); // 120


//task 4

let nameArr = ["esi","jhon","cavid","veli"];

const  convertElementsToItsLengths = () => {
    let newArr = [];
    for(let i =0 ; i<nameArr.length;i++){
        newArr.push(nameArr[i].length);
    }
    return newArr
}

console.log(convertElementsToItsLengths(nameArr));



//task 5

let arr4 =[1,2,10,4,5,9]
const findMax1 = () => Math.max(...arr4);
console.log(findMax1(arr));



let arr5 =[1,2,10,4,5,9]


const findMax2 = () =>arr5.sort((a,b)=>b-a)[0]
console.log(findMax2(arr5));


let arr3 =[1,2,10,4,5,9,555]
let max1=arr3[0]
const findMax3 = (arr3) =>{
for(let i =0 ; i<arr3.length;i++){
if(arr3[i]> max1){
    max1 = arr3[i]
}
}
return max
}
console.log(findMax(arr))


//task 6
let charArr =["esi","jhon","cavid","veli","abraham"];
let max=0
const findMax = (arr) =>{
for(let i =0 ; i<arr.length;i++){
if(arr[i].length> max){
    max = arr[i].length
}
}
return max
}
console.log(findMax(charArr))


//task 8

let mainArr = [1,2,3,4,5,"hello","world",10,true];

function cloneArr(newMain){
    
}

cloneArr(...mainArr)
//task  11

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let arr = alphabet.split("");
arr.unshift(" ");
const convertToArray1 = (i) => arr[i]
console.log(convertToArray1(1));

const convertToArray = (i) => {
    const arr = alphabet.split("");
    arr.unshift(" ");
    return arr[i];
  }
  
  console.log(convertToArray(1)); // Output: K
  





const users1 = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]


  users1.forEach((elem,index)=>{
    console.log(`${index}  Name:${elem.name} ~ Email:${elem.email} `);
  })

users1.every(()=>{

})

const result1 = users.some((elem)=>{
    return elem.website.endsWith(".net")
})

console.log(result1);

const result2 = users.some((elem)=>{
    return elem.email.endsWith("@melissa.tv")
})

console.log(res);

const result3 = users.every((elem)=>{
    return elem.company.name
})

console.log(result3);


const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]


users.
filter((user)=> user.website.endsWith(".org")
)
.forEach((user)=>{
    console.log(user.website);
})

const usersEmail = users.map((user)=>user.email)

console.log(usersEmail);

const usersCompanyInfo = users.map((user)=>user.company)
console.log(usersCompanyInfo);


//task 1
let numArr = [1,2,3,4,5];
let newArr = []
numArr.forEach((n)=>newArr.push(n**2));
console.log(newArr);


//task 2


let userNum = +prompt("eded daxil edin")

const numEndResult = numArr.some(num =>num.toString().includes(userNum))

console.log(numEndResult);

//task 3

const result4 = numArr.map((n)=>n**2)

console.log(result4);

//exam
//task 1
const dividensNum = (n) => {
  let newArr = []
    for(let i = 100;i<=1000;i++){
      if(i%n==0){
        newArr.push(i)
      }
    }
    return newArr
}

console.log(dividensNum(50));
console.log(dividensNum(70));
console.log(dividensNum(85));

//task 2

const swapCase = (string) =>{
  let empty = ""
  for(let i = 0; i<string.length;i++){
    if(string[i] === string[i].toUpperCase() ){
       empty += string[i].toString().toLowerCase() 
    }
    if(string[i] === string[i].toLowerCase()){
      empty +=  string[i].toString().toUpperCase()
    }
  }
  return empty
}

console.log(swapCase("AbCd"));
console.log(swapCase("jAvaScRIPt"));
console.log(swapCase("Fazil"));

//task 3
let numbers = [1,4,7,8,3,5,0,2,4,6,12,15,18,46,45,48,97,84,90];
let countEven = 0;
let countOdd = 0
const numShow = (num)=>{
 
  for(let i = 0; i<num.length;i++){
    if(num[i]%2==0){
        countEven++
    }
    else{
       countOdd++
        
    }
  }
  console.log(countEven);
console.log(countOdd);
  
}
numShow(numbers)
