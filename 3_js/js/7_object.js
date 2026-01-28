test1.onclick = function(){

    /*
        Object
         - {속성명 : 속성값}으로 구성된 요소를 관리하는 객체
         - 속성명 : 식별자의 역할을 하며, String
         - 속성값 : 모든 타입의 값을 저장할 수 있다.
         보통은 정수,String
    */

    // property = 속성명 + 속성값
    var obj1 = {
        name : "홍길동" ,
        "age" : 33 ,
        married : true ,
        hobby : ['축구' , '야구'] ,
        pet : {
            name : '구리구리',
            breed : '말티즈'
        } ,
        1 : 456 ,
        'user-name' : 'zzz'
    };

    var obj2 = new Object(); // {}
    // 객체 내부 속성(프로퍼티)에 접근하는 방법
    // 1) 점표기법(dot notation)
    obj2.pname = '말린망고'; // {pname : '말린망고'}
    obj2.price = 3000; // {pname : '말린망고' , price : 3000}
    // dot뒤에 문자열로 못 붙임 -> 브래킷

    // 2) 브래킷 표기법(bracket notation) 
    // - 브래킷 표기법은 속성명을 반드시 문자열 리터럴 혹은
    //   문자열 변수를 제시해야 한다  , for-in에선 무조건
    obj2['origin'] = '필리핀';

    // 문자열에 특수문자나, 띄어쓰기 등이 포함된 경우 대괄호표기법 사용
    obj2['ty-pe'] = '피클';

    console.log(obj1);
    console.log(obj2);
}

test2.onclick = function(){
    // 자바에서는 class안에 선언한 함수를 메서드라고 불렀음.
    // js에서는 객체/class안에 선언한 함수를 메서드라고 부른다.

    const pet = {
        petName : '코코' ,
        eat : function(food){
            // petName is not defined
            console.log(this.petName + "가 " + food + "맛있게 먹는다.")
            // 메서드에서의 this는 메서드를 호출한 객체의 주소값이 바인딩
        }
    };
    console.log(pet);
    pet.eat('츄르');
    // pet["eat"]('우유');
};

var game; // 전역변수

test3.onclick = function(){

    game = {
        title : 'DIABLO4',
        price : 35000 ,
        lang : ['ko','en','cn'],
        run : function(){
            console.log(this.title + "을 실행합니다.");
            // 시작시간 기록
            this['start-time'] = new Date();  //this:현재 객체
        },
        shutdown : function(){
            console.log(this.title + "을 종료합니다...");
            this['end-time'] = new Date();
        },
        duration : function(){
            // 두 시간의 차이를 ms로 반환
            var dur = this['end-time'] - this['start-time']
            dur = Math.floor(dur / 1000 / 60);
            console.log(dur+"분 동안 게임하셨네요.");
        }
    };

    // 객체 반복문 돌리기
    for(var key in game){
        console.log("key : " + key);
        
        console.log("value : " + game.key); // undefined , 점표기법으로는 불가
        console.log("value : " + game[key]); // 정상실행
    }
    game.run();
};

test4.onclick = function(){
    game && game.shutdown();
    game && game.duration();
}

// 객체는 생성된 이후, 자유롭게 속성을 '추가'하거나, 삭제할 수 있다.
test5.onclick = function(){
    var student = {};
    student.name = "홍길동";
    student["class"] = 'g';
    student.no = 33;

    // 객체내부의 속성을 제거하고 싶으면?
    delete student.class;

    console.log(student);
};

/* 
    toString메서드 오버라이딩
    - 자바스크립트는 모든 객체가 Object를 상속한다
    - 즉, Object의 메서드를 사용하거나 재정의 가능하다
*/
test6.onclick = function(){
    var notebook = {
        title : '오늘의 일기' ,
        content : '오늘은 붕어빵을 먹었다.' ,
        date : new Date() ,
        toString : function(){
            return "{title : " + this.title + ", content : "
            + this.content + "date : " + this.date + "}";
        }
    };
    console.log(notebook);  
};
test7.onclick = function(){
    /*
        생성자 함수 (ES6 이상부터는 생성자를 안 씀)
         - 자바스크립트에서 객체지향 프로그래밍을 지원하는 핵심 기능
         - 클래스를 정의하기 위한 용도의 함수로, 생성자 함수로 만든 함수는
           new 연산자와 함께 호출해야 한다.
         - 생성자 함수는 첫 글자를 클래스와 같이 대문자로 작성하는 것이 관례
         - 모든 함수는 보이지 않는 prototype이라는 속성을 가지고 있으며
           이 속성을 통해 상속관계를 유지한다.
        * prototype?
         - 모든 함수가 묵시적으로 가지고 있는 속성으로, 부모객체를 저장해두는
           저장공간.
    */

    function Pet(kind, name, breed, weight){
        // {}
        // 필드부
        // - 생성자 함수 내부에서 this는 현재 생성된 객체의 주소값을 의미한다.
        this.kind = kind;
        this.name = name;
        this.breed = breed;
        this.weight = weight;

        // // 메서드부 
        // this.bark = function(){
        //     return this.weight > 10 ? '멍멍' : '왈왈';
        // }

        Pet.prototype.bark = function(){
            return this.weight > 10 ? '멍멍' : '왈왈';
        }
    }

    var coco = new Pet('고양이','코코','브숏',3);
    
    console.log(coco);
    console.log(coco.bark());
}

test8.onclick = function(){
    /*
        javascript의 class 생성문법 (ES6)
    */
   class Animal{
        //생성자 함수
        constructor(kind){
            this.kind = kind;
        }
   }

   class Pet extends Animal{
        #hobby;
        // # -> private

        constructor(kind, name, breed, weight){
            super(kind);
            this.name = name;
            this.breed = breed;
            this.weight = weight;
        }

        // 메서드부
        // get/setter
        // hobby 속성에 값을 setter메서드
        setHobby(value){
            this.#hobby = value;
        }

        getHobby(){
            return this.#hobby;
        }

        // 모던 js의 setter/getter 방식
        // 접근자 프로퍼티 사용
        set hobby(value){
            this.#hobby = value;
        }

        get hobby(){
            return this.#hobby;
        }
   }

   var cat = new Pet("고양이","코코","브숏",3);
   console.log(cat);

//    cat["#hobby"] = "츄르먹기";
//    console.log(cat.hobby);

   cat.hobby = "낮잠자기";
   console.log(cat.hobby);
   
}

// 프로젝트하면서 사용할 일은 없을거