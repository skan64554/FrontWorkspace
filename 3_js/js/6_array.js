test1.onclick = function(){

    /*
        자바스크립트의 배열은 크기제한이나, 타입제한이 없으며
        유용한 메서드들이 존재한다 (java ArrayList와 비슷)
    */

    var arr1 = []; //  권장
    var arr2 = new Array(); 
    var arr3 = new Array(3); // 크기지정

    console.log(arr1 , arr2 , arr3);

    // 값대입
    arr1[0] = 'a';
    arr1[1] = 'b';
    arr1[2] = 'c';

    // 값 가져오기
    console.log(arr1[2]);
    console.log(arr1[100]); // undefined반환

    // 반복문
    // basic loop문
    for(var i = 0; i < arr1.length; i++){
        console.log(arr1[i]);
    }

    // 향상된 반복문
    // 1. for .. in문 
    //  - 객체, 배열 모두 반복이 가능
    //  - 객체 반복시 i에는 객체의 속성명이 대입
    //  - 배열 반복시 i에는 배열의 인덱스가 대입된다.
    for(var i in arr1){
        console.log(i , arr1[i]); // 권장 X
    }

    /*
        2. for .. of문
         - java의 향상된 반복문과 가장 비슷한 구문으로, 배열유형의
         데이터를 반복시키기 위해 사용한다.
         - i에는 각 인덱스에 저장된 값이 대입된다
         - 객체는 반복이 불가능하다.
    */
    for(var item of arr1){
        console.log(item);
    }
    // 배열이 주어지면 이걸 쓰세요
};

test2.onclick = function(){
    var arr1 = [1,2,3];
    var arr2 = new Array("철수","영희","김밥");

    var arr3 = [
        1,2,3,
        "안녕" , true , {id : "mkm"} , ['a','b'] ,
        function(){console.log('zz')}
    ];

    arr3[7]();
};

test3.onclick = function(){
    var arr = ['apple','melon','mango','banana','melon'];
    
    console.log(arr.indexOf('melon'));
    console.log(arr.lastIndexOf('melon'));
    console.log(arr.indexOf('strawberry')); // 없는건 -1 반환
};

test4.onclick = function(){

    var arr1 = ['a','b','c']; 
    var arr2 = [1,2,3,4,5];

    var newArr = arr1.concat(arr2);
    console.log(newArr);
};

test5.onclick = function(){

    // join : 배열 내부의 요소를 하나로 뭉친 문자열 리턴
    var arr = [1,2,3,4,5];
    var str = arr.join(); //"1,2,3,4,5"

    console.log(str);

    var str = arr.join("");
    console.log(str);
};

test6.onclick = function(){
    var arr = [1,2,3,4,5];

    arr.reverse(); // 원본 배열의 정렬 순서를 변경
    console.log(arr);
}

test7.onclick = function(){
    var arr = [4,2,3,1,5];
    console.log(arr.sort()); // 원본배열을 정렬

    // 내림차순 정렬
    // 정렬기준을 "함수"로 만든다. (java의 compareTo)
    arr.sort(function(a,b){
        return b - a;
    });
    console.log(arr);

    // 문자열 정렬 : 오름차순
    var names = ["홍길동","김길동","라마단","김현민"];

    console.log(names.sort());

    // 문자열 정렬 : 내림차순
    names.sort(function(a,b){
        if (a > b) return -1; // 오름차순은 1
        if (a < b) return 1; // 오름차순은 -1
        return 0;
    });

    console.log(names);

    // sort메서드의 기본 정렬은 "문자열 기준" 정렬
    arr = [1,2,15];
    console.log(arr.sort());

    // "15" < "2" -> true, 첫째값 기준
    // 기본 정렬은 쓰지 말고 나만의 커스텀 정렬 필수

    console.log(arr.sort(function(a,b){
        return a-b;
    }));
}

/*
    push : 배열 마지막에 요소를 추가한 후, 변경된 길이 반환
    pop : 배열 마지막 요소를 제거한 후, 제거된 요소를 반환
*/
test8.onclick = function(){

    var arr = [];
    arr.push(1);
    arr.push(2);
    arr.push(3);

    console.log(arr);

    console.log(arr.pop());
    console.log(arr.pop());
    console.log(arr);
}

/*
    unshift : 배열의 0번 인덱스에 요소 추가후, 변경된 길이 반환
    shift : 배열의 0번 인덱스에 요소 제거후, 제거된 요소 반환
*/
test9.onclick = function(){

    var arr = ['사과','배','굴'];

    arr.unshift('감자');
    arr.unshift('양파');
    console.log(arr);
    console.log(arr.shift());
}

/*
    slice(start, end)
     - start인덱스부터 end인덱스 까지의 요소를 
     가져와서 새배열 반환
*/
test10.onclick = function(){
    var arr = ['a','b','c','d','e'];
    // b,c,d만 추출
    var other = arr.slice(1,4);
    console.log(other);
    console.log(arr); // 원본배열에 영향 X
}

/*
    splice(strt, deleteCount, 추가할요소1,2,...)
    - 중간위치에 요소를 추가하거나 삭제하는 메서드
    - start인덱스부터 deleteCount개의 요소를 제거하고
    추가할 요소들을 추가한다
*/
test11.onclick = function(){   

    var arr = ['a','b','c','d','e'];

    // a x y c d e
    // var other = arr.splice(1,1,'x','y');
    // console.log(arr);
    
    // a x k h e
    // var other = arr.splice(1,3,'x','k','h');
    // console.log(arr);

    // a x f r i k h e
    // var other = arr.splice(1,3,'x','f','r','i','k','h');
    // console.log(arr);

    // a b
    // var other = arr.splice(2);
    // console.log(arr);
}

test12.onclick = function(){
    
    var input = prompt("취미를 입력하세요")
    
   if(input){

        var arr = input.split(",");
        arr.sort();

        var result = "";
        for(var hobby of arr){
            result += "<li>"+hobby+"</li>";
        }

        var ul = document.querySelector("#hobby-list");
        ul.innerHTML = result;

   }
}

/*
    forEach(function(value,index){
        // 실행할 구문
    })
*/
test13.onclick = function(){
    var arr = [1,2,3,4,5];
    var sum = 0;

    arr.forEach( (num) => {
        //console.log(num, index, arr2);
        sum += num;
    });

    console.log(sum);

    // forEach메서드는 유사배열도 사용이 가능
    var btnArr = document.querySelectorAll("input[type=button]");

    var btnValues = [];
    btnArr.forEach(function(btn){
        btnValues.push(btn.value);
    });
    console.log(btnValues);
}
/*
    array에서만 사용 가능한 함수

    find : 배열에서 내가 지정한 조건을 만족하는 1개의 요소 반환
    filter : 배열에서 내가 지정한 조건을 만족한는 n개의 요소를 
    담은 배열 반환
    map : 배열안의 데이터를 내가 원하는 요소로 변경시켜 반환
*/
test14.onclick = function(){
    var objArr = [
        {id : 'Tlqkffus' , name:'김현민'} ,// property
        {id : 'Tlqkffus2' , name:'김현민2'} ,
        {id : 'Tlqkffus3' , name:'김현민3'} ,
        {id : 'Tlqkffus4' , name:'김현민4'} ,
    ];

    var findOne = objArr.find(function(obj){
        if(obj.id == "Tlqkffus") return true;
    });
    // find메서드 , true를 리턴하는 요소를 반환

    console.log(findOne);

    // obj : 배열에서 꺼낸온 현재 요소 하나
    var filteredArr = objArr.filter(function(obj){
        if(obj.id.includes("Tlqkffus")) return true;
    });
    console.log(filteredArr);

    var mappedArr = objArr.map(function(obj){
        return obj.name;
    });

    console.log(mappedArr);
}

test15.onclick = function(){
    var drink = [];
    
    var priceArr = [2000, 1600, 4000, 8000, 15000];

    // 1. forEach
    var list = document.querySelectorAll("#drink > li");
    list.forEach(function(obj){
        drink.push(obj.innerHTML);
    });
    console.log(drink);

    // 2. find
    var findOne = drink.find(function(obj){
      if(obj.includes("ff")) return true;
    });
    console.log(findOne);
    
    // 3. filter 
    var filteredArr = drink.filter(function(obj){
        return obj.includes('o');
    });
    console.log(filteredArr);

    // 4. map
    var mappedDrink = drink.map(function(obj, index){
        return {
            menu: obj,
            price: priceArr[index]
        };
    });
    console.log(mappedDrink);
}
