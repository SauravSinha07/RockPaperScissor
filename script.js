const handOptions={
    "rock":"Rock.png",
    "paper":"Paper.png",
    "scissors":"scissors.png"
}
let userSCORE=0
let compSCORE=0
const pickUserHand=(hand)=>{
    const hands = document.querySelector('.hands')
    const contest=document.querySelector('.contest')
    console.log(hands)
    console.log(hand)
    hands.style.display='none'
    contest.style.display='flex'
    next.style.display='none'
    // if(hand=='rock')
    document.getElementById("userpickimage").src=handOptions[hand] 
    let compHand= pickComputerHand() 
    reffree(hand,compHand)
}
const pickComputerHand=()=>{
    let hands=["rock","paper","scissors"]
    let compHand=(hands[Math.floor(Math.random()*3)])
    console.log("comp",compHand)
    document.getElementById("comppickimage").src=handOptions[compHand]
    return compHand
}
const reffree=(userHand,compHand)=>{
    if(userHand=='paper' && compHand=='scissors'){
        setDecision('YOU LOSE')
        setCompScore(compSCORE+1)
    }else if(userHand=='paper' && compHand=='rock'){
        setDecision('YOU WIN')
        setUserScore(userSCORE+1)
        next.style.display='flex'
    }else if(userHand=='paper' && compHand=='paper'){
        setDecision('TIE UP')
    }else if(userHand=='rock' && compHand=='paper'){
        setDecision('YOU LOSE')
        setCompScore(compSCORE+1)
    }else if(userHand=='rock' && compHand=='scissors'){
        setDecision('YOU WIN')
        setUserScore(userSCORE+1)
        next.style.display='flex'
    }else if(userHand=='rock' && compHand=='rock'){
        setDecision('TIE UP')
    }else if(userHand=='scissors' && compHand=='rock'){
        setDecision('YOU LOSE')
        setCompScore(compSCORE+1)
    }else if(userHand=='scissors' && compHand=='paper'){
        setDecision('YOU WIN')
        setUserScore(userSCORE+1)
        next.style.display='flex'
    }else if(userHand=='scissors' && compHand=='scissors'){
        setDecision('TIE UP')
    }

}
const restartGame=()=>{
    const hands = document.querySelector('.hands')
    const contest=document.querySelector('.contest')
    hands.style.display='flex'
    contest.style.display='none'
}
const setDecision=(decision)=>{
    document.querySelector('.win p').innerHTML=decision

}
const setUserScore=(score)=>{
    userSCORE=score
    document.querySelector('.userscorecount').innerHTML=score
    console.log(score)
    const value=score
    const key ="userscore"
    localStorage.setItem(key,value)
    // console.log(`the key is ${key} and value is ${value}`)
    // localStorage.getItem(key,value)
    // const userSCORE=localStorage.getItem(key,value)
}
const setCompScore=(scorecount)=>{
    compSCORE=scorecount
    document.querySelector('.compscorecount').innerHTML=scorecount
    console.log(scorecount)
    const value=compSCORE
    const key ="compscore"
    localStorage.setItem(key,value)
    // const compSCORE=localStorage.getItem(key,value)
    // const localscore =localStorage.getItem(key)
    // console.log(localscore)
    // document.querySelector('.compscorecount').innerHTML=localscore

}
const computerScore=document.querySelector('.compscorecount')
// console.log(Math.floor(Math.random()*3))

const ruleBox=document.querySelector('.rulewrapper')
const hideRuleBox=()=>{
    ruleBox.style.display='none'
}
const showRule=()=>{
    ruleBox.style.display='flex'
}
const next=document.querySelector('#nextbutton')
