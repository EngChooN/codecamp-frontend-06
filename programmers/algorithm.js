//1층이 있는 로봇이 100층 까지 가는 횟수 (로봇은 한번에 2층을 갈 수 있음)
function solution() {
    let current = 1
    let jump = 2
    let goal = 100
    const val = Math.round((goal-current)/jump)
    console.log(val)
}

function solution() {
    const name = "영희"
    console.log(name)
}

function solution() {
    let name = "영희"
    console.log(name)
    name = "철수"
    console.log(name)
}

function solution() {
    const fruits = []
    fruits.push("사과","바나나","파인애플")
    console.log(fruits)
}

function solution() {
    const fruits = ["사과","바나나","파인애플"]
    const lastIndex = fruits[(fruits.length)-1]
    const newFruits = []
    newFruits.push(lastIndex)
    console.log(newFruits)
}

function solution() {
    let students = ["철수", "영희", "훈이", "짱구", "유리"]
    const newArr = []
    newArr.push(students.slice(0,3))
    console.log(newArr)
}

function solution() {
    let fruits = ["사과", "바나나"]
    fruits[0] = "맛있는 " + fruits[0]
    fruits[1] = "맛있는 " + fruits[1]
    console.log(fruits)
}

function solution() {
    const number = "01012345678"
    const n1 = number.slice(0,3)
    const n2 = number.slice(3,7)
    const n3 = number.slice(7,11)
    const arr = []
    arr.push(n1)
    arr.push(n2)
    arr.push(n3)
    console.log(arr)
}

function solution() {
    let student = {}
    student.name = "철수"
    console.log(student)
}

function solution() {
    const student = {
        name: "철수",
        age: 8,
    };
    const school = {
        name: "다람쥐초등학교",
        teacher: "다람이",
    }
    student.school = school
    console.log(student)
}

function solution() {
    function boolean(input1, input2) {
        if(input1 === true || input2 === true) {
            console.log("true")
    }else{
        console.log("false")
    }
    }

    boolean(true, false)
    boolean(false, true)
    boolean(false, false)
}

function solution() {
    function evenOdd(num) {
        if(num/2 === 0) {
            console.log("Even")
    }else if(num/2 > 0) {
        console.log("Odd")
        }else if (num === 0){
        console.log("Zero")
    }else{
        console.log("Not Number")
    }
    }


    evenOdd(12)
    evenOdd(15) 
    evenOdd(0)
    evenOdd(-1)  
}

function solution() {
    function temperature(num){
        if(num <= 18) {
            console.log("조금 춥네요")
        }else if(num >= 19 && num <= 23){
        console.log("날씨가 좋네요")
    }else if(num >= 24){
        console.log("조금 덥습니다")
    }
    }

    temperature(13)  // "조금 춥네요"
    temperature(23)  // "날씨가 좋네요"
    temperature(27)  // "조금 덥습니다"
}

function solution() {
    function days(month) {
        if(month === 1) {
            console.log("31")
    }else if(month === 2){
        console.log("28")
    }else if(month === 3){
        console.log("31")
    }else if(month === 4){
        console.log("30")
    }else if(month === 5){
        console.log("31")
    }else if(month === 6){
        console.log("30")
    }else if(month === 7){
        console.log("31")
    }else if(month === 8){
        console.log("31")
    }else if(month === 9){
        console.log("30")
    }else if(month === 10){
        console.log("31")
    }else if(month === 11){
        console.log("30")
    }else if(month === 12){
        console.log("31")
    }else{
        console.log("Not month")
    }
    }

    days(1) // 31
    days(2) // 28
    days(4) // 30
}





// function solution() {
//     function calculator(num1, num2, operator) {
//         if (operator === "+") {
//             console.log(num1 + num2)
//         } else if (operator === "-") {
//             console.log(num1 - num2)
//         } else if (operator === "*") {
//             console.log(num1 * num2)
//         } else if (operator === "/") {
//             console.log(num1 / num2)
//         } else {
//             console.log("올바른 입력이 아닙니다")
//         }
//     }
//     calculator(10,5, '+')  // 15
//     calculator(10,5, '-')  // 5
//     calculator(10,5, '*')  // 50
//     calculator(10,5, '/')  // 2
//     calculator(10,5, 'a')  // "올바른 입력이 아닙니다"
// }

function solution() {
    function days(month) {
        const obj = {
            1 : 31,
            2 : 28,
            3: 31,
            4 : 30,
            5 : 31,
            6 : 30,
            7 : 31,
            8 : 31,
            9 : 30,
            10 : 31,
            11 : 30,
            12 : 31
        }
        console.log(obj[month])
        }

        days(1)
        days(2)
        days(3)
        days(4)
}

// --------------------------------- 2주차 알고리즘 ---------------------------------


// 2-1 같은 숫자는 싫어
function solution(arr)
{
    const answer = []
    
    for(let i = 0; i < arr.length; i++){
        if(answer[answer.length -1] !== arr[i]){
            answer.push(arr[i])
        }
    }
    return answer
}

// 2-2 핸드폰 번호 가리기
function solution(phone_number) {
    let answer = '';
    //4자리를 제외한 앞자리 *
    answer = answer.padStart(phone_number.length-4, "*")
    //앞자리 *을 제외한 나머지 4자리
    let b = phone_number.slice(phone_number.length -4, phone_number.length)
    //그리고 그 두개를 합치기
    answer = answer.concat(b)
    return answer
}


