//Declarations
let nameinput;
let classinput;
let levelinput;
let raceinput;
let alignmentinput;
let xpinput;
let strinput;
let dexinput;
let coninput;
let intinput;
let wisinput;
let chainput;
let strbonus;
let dexbonus;
let conbonus;
let intbonus;
let wisbonus;
let chabonus;
let strprof;
let dexprof;
let conprof;
let intprof;
let wisprof;
let chaprof;
let armorclassinput;
let initiativeinput;
let playerspeedinput;
let playerswimspeedinput;
let playerairspeedinput;
let hpbase;
let hptemp;
let currenthealth = hpbase + hptemp;
let hitdice;
let attackname1;
let attackroll1;
let basedmg1;
let acrobaticroll;
let animalhandlingroll;
let arcanaroll;
let athleticsroll;
let deceptionroll;
let historyroll;
let insightroll;
let intimidationroll;
let investigationroll;
let medicineroll;
let natureroll;
let perceptionroll;
let performanceroll;
let persuasionroll;
let religionroll;
let slightofhandroll;
let stealthroll;
let survivalroll;
let passiveperceptionroll;
let lang1;
let lang2;
let lang3;
let lang4;
let equipment = [];
let spells = {
    cantrips:[],
    level1:[],
};
let spellslotcount;

//functionality--main stats
function saveStats(){
    //first get the top details and disable change,assign to object(phase3)
    nameinput = document.getElementById('nameinput').value;
    playerobject.playerdetails.name = nameinput;
    document.getElementById('nameinput').disabled = 'true';
    classinput = document.getElementById('classinput').value;
    playerobject.playerdetails.class = classinput;
    document.getElementById('classinput').disabled = 'true';
    levelinput = document.getElementById('levelinput').value;
    playerobject.playerdetails.class = classinput;
    document.getElementById('levelinput').disabled = 'true';
    raceinput = document.getElementById('raceinput').value;
    playerobject.playerdetails.race = raceinput;
    document.getElementById('raceinput').disabled = 'true';
    alignmentinput = document.getElementById('alignmentinput').value;
    playerobject.playerdetails.alignment = alignmentinput;
    document.getElementById('alignmentinput').disabled = 'true';
    xpinput = document.getElementById('xpinput').value;
    playerobject.playerdetails.xp = xpinput;
    document.getElementById('xpinput').disabled = 'true';
    //second get the inputs of statblock
    strinput = document.getElementById('strinput').value;
    playerobject.playerstats.strength = strinput;
    document.getElementById('strinput').disabled = 'true';
    dexinput = document.getElementById('dexinput').value;
    playerobject.playerstats.dexterity = dexinput;
    document.getElementById('dexinput').disabled = 'true';
    coninput = document.getElementById('coninput').value;
    playerobject.playerstats.constitution = coninput;
    document.getElementById('coninput').disabled = 'true';
    intinput = document.getElementById('intinput').value;
    playerobject.playerstats.intelligence = intinput;
    document.getElementById('intinput').disabled = 'true';
    wisinput = document.getElementById('wisinput').value;
    playerobject.playerstats.wisdom = wisinput;
    document.getElementById('wisinput').disabled = 'true';
    chainput = document.getElementById('chainput').value;
    playerobject.playerstats.charisma = chainput;
    document.getElementById('chainput').disabled = 'true';
    //third get inputs of AC,init,etc.
    armorclassinput = document.getElementById('armorclassinput').value;
    playerobject.playerstuff.AC = armorclassinput;
    initiativeinput = document.getElementById('initiativeinput').value;
    playerobject.playerstuff.INIT = initiativeinput;
    playerspeedinput = document.getElementById('playerspeedinput').value;
    playerobject.playerstuff.SPEED = playerspeedinput;
    playerswimspeedinput = document.getElementById('playerswimspeedinput').value;
    playerobject.playerstuff.SWIMSPEED = playerswimspeedinput;
    playerairspeedinput = document.getElementById('playerairspeedinput').value;
    playerobject.playerstuff.AIRSPEED = playerairspeedinput;
}
//calculation functionality
function D2(){
    console.log(Math.floor(Math.random()*2+1))
}
function D4(){
    console.log(Math.floor(Math.random()*4+1))
}
function D6(){
    console.log(Math.floor(Math.random()*6+1))
}
function D8(){
    console.log(Math.floor(Math.random()*8+1))
}
function D10(){
    console.log(Math.floor(Math.random()*10+1))
}
function D12(){
    console.log(Math.floor(Math.random()*12+1))
}
function D20(){
    console.log(Math.floor(Math.random()*20+1))
}
function D100(){
    console.log(Math.floor(Math.random()*100+1))
}
function attacktest1(){
    attackinputs = document.getElementById('attackinputs').value;
    attacknum = document.getElementById('attacknum').value;
    attackdiecount = document.getElementById('attackdiecount').value;
    attackdienum = document.getElementById('attackdienum').value;
    console.log(`${attackinputs} is attack number ${attacknum} with damage of ${attackdiecount} d ${attackdienum}`)
}
//calculate bonuses

//Objects
let playerobject = {
    "playerdetails":{
        "name":"",
        "class":"",
        "level":"",
        "race":"",
        "alignment":"",
        "xp":"",
    },
    "playerstats":{
        "strength":"",
        "dexterity":"",
        "constitution":"",
        "intelligence":"",
        "wisdom":"",
        "charisma":"",
        "strbonus":"",
        "dexbonus":"",
        "conbonus":"",
        "intbonus":"",
        "wisbonus":"",
        "chabonus":"",
    },
    "playerstuff":{
        "AC":"",
        "INIT":"",
        "SPEED":"",
        "SWIMSPEED":"",
        "AIRSPEED":"",
    }
}