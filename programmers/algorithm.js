//1층이 있는 로봇이 100층 까지 가는 횟수 (로봇은 한번에 2층을 갈 수 있음)
function solution() {
    let current = 1
    let jump = 2
    let goal = 100
    
    const val = Math.round((goal-current)/jump)
    
    console.log(val)
}