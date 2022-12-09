
var mainthing
let aladd = aleff * al * altier * altier
let alyadd = alyvps * al * altier * altier

let geoadd = geoeff * geo * geotier * geotier
let geoyadd = geoyvps * geo * geotier * geotier

let altwoadd = altwoeff * altwo * altwotier * altwotier
let altwoyadd = altwoyvps * altwo * altwotier * altwotier

let pcaladd = pcaleff * pcal * pcaltier * pcaltier
let pcalyadd = pcalyvps * pcal * pcaltier * pcaltier

let caladd = caleff * cal * caltier * caltier
let calyadd = calyvps * cal * caltier * caltier

var vperclick = 1
var variable = 0
var yvar = 2342340

var acolor
var sdfdsf
var alprice = 15
var al = 0
var aleff = 1
var aleffcost = 1000
var aleffamount = 0
var alycost = 5000
var alyamount = 0
var alyvps = 0.1
var almcost = 1000
var alnetprice = 15
var almamount = 0
var altier = 1
var altiercost = 50000

var geoprice = 1500
var geo = 0
var geoeff = 100
var geoeffcost = 10000
var geoeffamount = 0
var geoycost = 75000
var geoyamount = 0
var geoyvps = 20
var geomcost = 100000
var geonetprice = 1500
var geomamount = 0
var geotier = 1
var geotiercost = 1250000
let state = 'upgrade'
let smth = "<br>"

var altwoprice = 100000
var altwo = 0
var altwoeff = 25000
var altwoeffcost = 375000
var altwoeffamount = 0
var altwoycost = 500000
var altwoyamount = 0
var altwoyvps = 200
var altwomcost = 1000000
var altwonetprice = 100000
var altwomamount = 0
var altwotier = 1
var altwotiercost = 10000000

var pcalprice = 2500000
var pcal = 0
var pcaleff = 500000
var pcaleffcost = 1000000
var pcaleffamount = 0
var pcalycost = 5000000
var pcalyamount = 0
var pcalyvps = 1500
var pcalmcost = 10000000
var pcalnetprice = 2500000
var pcalmamount = 0
var pcaltier = 1
var pcaltiercost = 250000000

var calprice = 100000000
var cal = 0
var caleff = 7500000
var caleffcost = 25000000
var caleffamount = 0
var calycost = 75000000
var calyamount = 0
var calyvps = 50000
var calmcost = 1000000000
var calnetprice = 100000000
var calmamount = 0
var caltier = 1
var caltiercost = 12500000000

var clickprice = 500
var click = 0
var clicknetprice = 500

var studentprice = 10000
var student = 0
var studentnetprice = 10000

var teacherprice = 125000
var teacher = 0
var teachernetprice = 125000

var schoolprice = 125000
var school = 0
var schoolnetprice = 125000

var schoolprice = 2500000
var school = 0
var schoolnetprice = 2500000


function setup() {

  createCanvas(windowWidth, windowHeight);

}

function add() {
  variable += vperclick
}


function getPrice(base, percent, exp) {
  return Math.round(base * Math.pow(percent, exp))
}
window.setInterval(
  function () {
    let aladd = aleff * al * altier * altier
    let alyadd = alyvps * al * altier * altier

    let geoadd = geoeff * geo * geotier * geotier
    let geoyadd = geoyvps * geo * geotier * geotier

    let altwoadd = altwoeff * altwo * altwotier * altwotier
    let altwoyadd = altwoyvps * altwo * altwotier * altwotier

    let pcaladd = pcaleff * pcal * pcaltier * pcaltier
    let pcalyadd = pcalyvps * pcal * pcaltier * pcaltier

    let caladd = caleff * cal * caltier * caltier
    let calyadd = calyvps * cal * caltier * caltier

    let vps = ((aladd / 10) + (geoadd / 10) + (altwoadd / 10) + (pcaladd / 10) + (caladd / 10)) * (Math.pow(1.1, student)) * (Math.pow(1.5, teacher)) * (Math.pow(2, school))
    let yvps = ((alyadd / 10) + (geoyadd / 10) + (altwoyadd / 10) + (pcalyadd / 10) + (calyadd / 10)) * (Math.pow(1.1, student)) * (Math.pow(1.5, teacher)) * (Math.pow(2, school))
    console.log(vps)
    variable += vps
    yvar += yvps

    document.getElementById("variables").innerHTML = parseFloat(variable).toFixed(2) + "𝑥"
    document.getElementById("yvariables").innerHTML = parseFloat(yvar).toFixed(2) + "𝑦"
    document.getElementById("xvps").innerHTML = "𝑥-vps: " + parseFloat(vps).toFixed(2)
    document.getElementById("yvps").innerHTML = "𝑦-vps: " + parseFloat(yvps).toFixed(2)


  }, 100

)

function draw() {


  let vps = (aladd / 10) + (geoadd / 10) + (altwoadd / 10) + (pcaladd / 10) + (caladd / 10)
  let yvps = (alyadd / 10) + (geoyadd / 10) + (altwoyadd / 10) + (pcalyadd / 10) + (calyadd / 10)


  document.getElementById('albuy').innerHTML = (alprice * (Math.pow(0.9, almamount) / altier)).toFixed(2) + "𝑥"
  document.getElementById('alowned').innerHTML = "Owned:" + al
  document.getElementById('alvps').innerHTML = "Vps-" + "𝑥:" + parseFloat(aleff * altier * altier).toFixed(2) + "; 𝑦:" + parseFloat(alyvps * altier * altier).toFixed(2)

  document.getElementById('geobuy').innerHTML = (geoprice * Math.pow(0.9, geomamount) / geotier).toFixed(2) + "𝑥"
  document.getElementById('geoowned').innerHTML = "Owned:" + geo
  document.getElementById('geovps').innerHTML = "Vps-" + "𝑥:" + parseFloat(geoeff * geotier * geotier).toFixed(2) + "; 𝑦:" + parseFloat(geoyvps * geotier * geotier).toFixed(2)

  document.getElementById('altwobuy').innerHTML = (altwoprice * (Math.pow(0.9, altwomamount) / altwotier)).toFixed(2) + "𝑥"
  document.getElementById('altwoowned').innerHTML = "Owned:" + altwo
  document.getElementById('altwovps').innerHTML = "Vps-" + "𝑥:" + parseFloat(altwoeff * altwotier * altwotier).toFixed(2) + "; 𝑦:" + parseFloat(altwoyvps * altwotier * altwotier).toFixed(2)

  document.getElementById('pcalbuy').innerHTML = (pcalprice * (Math.pow(0.9, pcalmamount) / pcaltier)).toFixed(2) + "𝑥"
  document.getElementById('pcalowned').innerHTML = "Owned:" + pcal
  document.getElementById('pcalvps').innerHTML = "Vps-" + "𝑥:" + parseFloat(pcaleff * pcaltier * pcaltier).toFixed(2) + "; 𝑦:" + parseFloat(pcalyvps * pcaltier * pcaltier).toFixed(2)

  document.getElementById('calbuy').innerHTML = (calprice * (Math.pow(0.9, calmamount) / caltier)).toFixed(2) + "𝑥"
  document.getElementById('calowned').innerHTML = "Owned:" + cal
  document.getElementById('calvps').innerHTML = "Vps-" + "𝑥:" + parseFloat(caleff * caltier * caltier).toFixed(2) + "; 𝑦:" + parseFloat(calyvps * caltier * caltier).toFixed(2)

  document.getElementById('clickbuy').innerHTML = (clickprice).toFixed(2) + "𝑥"
  document.getElementById('clickowned').innerHTML = "Owned:" + click
  document.getElementById('clickvps').innerHTML = "Click efficiency:" + parseFloat(vperclick).toFixed(2)

  document.getElementById('studentbuy').innerHTML = (studentprice).toFixed(2) + "𝑦"
  document.getElementById('studentowned').innerHTML = "Hired:" + student

  document.getElementById('teacherbuy').innerHTML = (teacherprice).toFixed(2) + "𝑦"
  document.getElementById('teacherowned').innerHTML = "Hired:" + teacher

  document.getElementById('schoolbuy').innerHTML = (schoolprice).toFixed(2) + "𝑦"
  document.getElementById('schoolowned').innerHTML = "Hired:" + school

  rectMode(CENTER)



  rectMode(CENTER)
  if (altier == 1) {
    document.getElementById("alb").style.borderColor = "black"
    document.getElementById("albuy").style.borderColor = "black"

  }
  if (altier == 2) {
    document.getElementById("alb").style.borderColor = "#71706e "
    document.getElementById("albuy").style.borderColor = "#71706e"
  }
  if (altier == 3) {
    document.getElementById("alb").style.borderColor = "gold"
    document.getElementById("albuy").style.borderColor = "gold"

  }
  if (altier == 4) {
    document.getElementById("alb").style.borderColor = "#50C878"
    document.getElementById("albuy").style.borderColor = "#50C878"
  }

  if (geotier == 1) {
    document.getElementById("geob").style.borderColor = "black"
    document.getElementById("geobuy").style.borderColor = "black"

  }
  if (geotier == 2) {
    document.getElementById("geob").style.borderColor = "#71706e "
    document.getElementById("geobuy").style.borderColor = "#71706e"
  }
  if (geotier == 3) {
    document.getElementById("geob").style.borderColor = "gold"
    document.getElementById("geobuy").style.borderColor = "gold"

  }
  if (geotier == 4) {
    document.getElementById("geob").style.borderColor = "#50C878"
    document.getElementById("geobuy").style.borderColor = "#50C878"
  }

  if (altwotier == 1) {
    document.getElementById("altwob").style.borderColor = "black"
    document.getElementById("altwobuy").style.borderColor = "black"

  }
  if (altwotier == 2) {
    document.getElementById("altwob").style.borderColor = "#71706e "
    document.getElementById("altwobuy").style.borderColor = "#71706e"
  }
  if (altwotier == 3) {
    document.getElementById("altwob").style.borderColor = "gold"
    document.getElementById("altwobuy").style.borderColor = "gold"

  }
  if (altwotier == 4) {
    document.getElementById("altwob").style.borderColor = "#50C878"
    document.getElementById("altwobuy").style.borderColor = "#50C878"
  }
  if (pcaltier == 1) {
    document.getElementById("pcalb").style.borderColor = "black"
    document.getElementById("pcalbuy").style.borderColor = "black"

  }
  if (pcaltier == 2) {
    document.getElementById("pcalb").style.borderColor = "#71706e "
    document.getElementById("pcalbuy").style.borderColor = "#71706e"
  }
  if (pcaltier == 3) {
    document.getElementById("pcalb").style.borderColor = "gold"
    document.getElementById("pcalbuy").style.borderColor = "gold"

  }
  if (pcaltier == 4) {
    document.getElementById("pcalb").style.borderColor = "#50C878"
    document.getElementById("pcalbuy").style.borderColor = "#50C878"
  }
  if (caltier == 1) {
    document.getElementById("calb").style.borderColor = "black"
    document.getElementById("calbuy").style.borderColor = "black"

  }
  if (caltier == 2) {
    document.getElementById("calb").style.borderColor = "#71706e "
    document.getElementById("calbuy").style.borderColor = "#71706e"
  }
  if (caltier == 3) {
    document.getElementById("calb").style.borderColor = "gold"
    document.getElementById("calbuy").style.borderColor = "gold"

  }
  if (caltier == 4) {
    document.getElementById("calb").style.borderColor = "#50C878"
    document.getElementById("calbuy").style.borderColor = "#50C878"
  }

}




function alrevert() {
  document.getElementById("aldesc").innerHTML = smth
  document.getElementById("aldesc2").innerHTML = smth

}

function albuy() {
  if (variable >= alnetprice) {

    variable -= alnetprice
    al += 1

    alprice = getPrice(15, 1.2, al)
    alnetprice = (alprice * (Math.pow(0.9, almamount) / altier)).toFixed(2)

  }
}


function aleffC() {
  document.getElementById('aldesc').innerHTML = "Cost:" + aleffcost + "𝑥"
  document.getElementById("aldesc2").innerHTML = "Increases x-variable production by 10%"

}


function aleffU() {
  if (variable >= aleffcost) {
    variable -= aleffcost
    aleffamount += 1
    aleff *= 1.1
    aleffcost = getPrice(1000, 1.1, aleffamount)


  }

}

function alyC() {
  document.getElementById('aldesc').innerHTML = "Cost:" + alycost + "𝑥"
  document.getElementById("aldesc2").innerHTML = "Increases y-variable production by 10%"

}

function alyU() {
  if (variable >= alycost) {
    variable -= alycost
    alyamount += 1
    alyvps *= 1.1
    alycost = getPrice(5000, 1.1, alyamount)
  }

}
function alMC() {
  document.getElementById('aldesc').innerHTML = "Cost:" + almcost + "𝑥"
  document.getElementById("aldesc2").innerHTML = "Decreases price by 10%"

}

function alMU() {
  if (variable >= almcost) {


    variable -= almcost
    almamount += 1
    alnetprice = (alprice * (Math.pow(0.9, almamount) / altier)).toFixed(2)
    almcost = getPrice(1000, 1.1, almamount)
  }

}
function alMC() {
  document.getElementById('aldesc').innerHTML = "Cost:" + almcost + "𝑥"
  document.getElementById("aldesc2").innerHTML = "Decreases price by 10%"

}

function alTC() {
  if (altier < 4) {
    document.getElementById('aldesc').innerHTML = "Cost:" + altiercost + "𝑥"
    document.getElementById("aldesc2").innerHTML = "Upgrades tier"
  }
  if (altier == 4) {
    document.getElementById('aldesc').innerHTML = "Max tier reached!"

  }

}

function alTU() {
  if (variable >= altiercost) {
    if (altier < 4) {
      variable -= altiercost
      altier += 1
      altiercost = getPrice(50000, 3, altier)

    }

  }
}

function georevert() {

  document.getElementById("geodesc").innerHTML = smth
  document.getElementById("geodesc2").innerHTML = smth

}

function geobuy() {
  if (variable >= geonetprice) {

    variable -= geonetprice
    geo += 1

    geoprice = getPrice(1500, 1.2, geo)
    geonetprice = (geoprice * Math.pow(0.9, geomamount) / geotier).toFixed(2)

  }
}


function geoeffC() {
  document.getElementById('geodesc').innerHTML = "Cost:" + geoeffcost + "𝑥"
  document.getElementById("geodesc2").innerHTML = "Increases x-variable production by 10%"

}


function geoeffU() {
  if (variable >= geoeffcost) {
    variable -= geoeffcost
    geoeffamount += 1
    geoeff *= 1.1
    geoeffcost = getPrice(10000, 1.1, geoeffamount)


  }

}

function geoyC() {
  document.getElementById('geodesc').innerHTML = "Cost:" + geoycost + "𝑥"
  document.getElementById("geodesc2").innerHTML = "Increases y-variable production by 10%"

}

function geoyU() {
  if (variable >= geoycost) {
    variable -= geoycost
    geoyamount += 1
    geoyvps *= 1.1
    geoycost = getPrice(75000, 1.1, geoyamount)
  }

}
function geoMC() {
  document.getElementById('geodesc').innerHTML = "Cost:" + geomcost + "𝑥"
  document.getElementById("geodesc2").innerHTML = "Decreases price by 10%"

}

function geoMU() {
  if (variable >= geomcost) {


    variable -= geomcost
    geomamount += 1
    geonetprice = (geoprice * Math.pow(0.9, geomamount) / geotier).toFixed(2)
    geomcost = getPrice(100000, 1.1, geomamount)
  }

}


function geoTC() {
  if (geotier < 4) {
    document.getElementById('geodesc').innerHTML = "Cost:" + geotiercost + "𝑥"
    document.getElementById("geodesc2").innerHTML = "Upgrades tier"
  }
  if (geotier == 4) {
    document.getElementById('geodesc').innerHTML = "Max tier reached!"

  }

}

function geoTU() {
  if (variable >= geotiercost) {
    if (geotier < 4) {
      variable -= geotiercost
      geotier += 1
      geotiercost = getPrice(1250000, 3, geotier)

    }

  }
}

function altworevert() {
  document.getElementById("altwodesc").innerHTML = smth
  document.getElementById("altwodesc2").innerHTML = smth

}

function altwobuy() {
  if (variable >= altwonetprice) {

    variable -= altwonetprice
    altwo += 1

    altwoprice = getPrice(100000, 1.2, altwo)
    altwonetprice = (altwoprice * (Math.pow(0.9, altwomamount) / altwotier)).toFixed(2)

  }
}


function altwoeffC() {
  document.getElementById('altwodesc').innerHTML = "Cost:" + altwoeffcost + "𝑥"
  document.getElementById("altwodesc2").innerHTML = "Increases x-variable production by 10%"

}


function altwoeffU() {
  if (variable >= altwoeffcost) {
    variable -= altwoeffcost
    altwoeffamount += 1
    altwoeff *= 1.1
    altwoeffcost = getPrice(375000, 1.1, altwoeffamount)


  }

}

function altwoyC() {
  document.getElementById('altwodesc').innerHTML = "Cost:" + altwoycost + "𝑥"
  document.getElementById("altwodesc2").innerHTML = "Increases y-variable production by 10%"

}

function altwoyU() {
  if (variable >= altwoycost) {
    variable -= altwoycost
    altwoyamount += 1
    altwoyvps *= 1.1
    altwoycost = getPrice(500000, 1.1, altwoyamount)


  }

}
function altwoMC() {
  document.getElementById('altwodesc').innerHTML = "Cost:" + altwomcost + "𝑥"
  document.getElementById("altwodesc2").innerHTML = "Decreases price by 10%"

}

function altwoMU() {
  if (variable >= altwomcost) {


    variable -= altwomcost
    altwomamount += 1
    altwonetprice = (altwoprice * (Math.pow(0.9, altwomamount) / altwotier)).toFixed(2)
    altwomcost = getPrice(1000000, 1.1, altwomamount)
  }

}
function altwoMC() {
  document.getElementById('altwodesc').innerHTML = "Cost:" + altwomcost + "𝑥"
  document.getElementById("altwodesc2").innerHTML = "Decreases price by 10%"

}

function altwoTC() {
  if (altwotier < 4) {
    document.getElementById('altwodesc').innerHTML = "Cost:" + altwotiercost + "𝑥"
    document.getElementById("altwodesc2").innerHTML = "Upgrades tier"
  }
  if (altwotier == 4) {
    document.getElementById('altwodesc').innerHTML = "Max tier reached!"

  }

}

function altwoTU() {
  if (variable >= altwotiercost) {
    if (altwotier < 4) {
      variable -= altwotiercost
      altwotier += 1
      altwotiercost = getPrice(10000000, 3, altwotier)
    }

  }
}

function pcalrevert() {
  document.getElementById("pcaldesc").innerHTML = smth
  document.getElementById("pcaldesc2").innerHTML = smth

}

function pcalbuy() {
  if (variable >= pcalnetprice) {

    variable -= pcalnetprice
    pcal += 1

    pcalprice = getPrice(2500000, 1.2, pcal)
    pcalnetprice = (pcalprice * (Math.pow(0.9, pcalmamount) / pcaltier)).toFixed(2)

  }
}


function pcaleffC() {
  document.getElementById('pcaldesc').innerHTML = "Cost:" + pcaleffcost + "𝑥"
  document.getElementById("pcaldesc2").innerHTML = "Increases x-variable production by 10%"

}


function pcaleffU() {
  if (variable >= pcaleffcost) {
    variable -= pcaleffcost
    pcaleffamount += 1
    pcaleff *= 1.1
    pcaleffcost = getPrice(500000, 1.1, pcaleffamount)


  }

}

function pcalyC() {
  document.getElementById('pcaldesc').innerHTML = "Cost:" + pcalycost + "𝑥"
  document.getElementById("pcaldesc2").innerHTML = "Increases y-variable production by 10%"

}

function pcalyU() {
  if (variable >= pcalycost) {
    variable -= pcalycost
    pcalyamount += 1
    pcalyvps *= 1.1
    pcalycost = getPrice(5000000, 1.1, pcalyamount)
  }

}
function pcalMC() {
  document.getElementById('pcaldesc').innerHTML = "Cost:" + pcalmcost + "𝑥"
  document.getElementById("pcaldesc2").innerHTML = "Decreases price by 10%"

}

function pcalMU() {
  if (variable >= pcalmcost) {


    variable -= pcalmcost
    pcalmamount += 1
    pcalnetprice = (pcalprice * (Math.pow(0.9, pcalmamount) / pcaltier)).toFixed(2)
    pcalmcost = getPrice(10000000, 1.1, pcalmamount)
  }

}
function pcalMC() {
  document.getElementById('pcaldesc').innerHTML = "Cost:" + pcalmcost + "𝑥"
  document.getElementById("pcaldesc2").innerHTML = "Decreases price by 10%"

}

function pcalTC() {
  if (pcaltier < 4) {
    document.getElementById('pcaldesc').innerHTML = "Cost:" + pcaltiercost + "𝑥"
    document.getElementById("pcaldesc2").innerHTML = "Upgrades tier"
  }
  if (pcaltier == 4) {
    document.getElementById('pcaldesc').innerHTML = "Max tier reached!"

  }

}

function pcalTU() {
  if (variable >= pcaltiercost) {
    if (pcaltier < 4) {
      variable -= pcaltiercost
      pcaltier += 1
      pcaltiercost = getPrice(250000000, 3, pcaltier)

    }

  }
}


function calrevert() {
  document.getElementById("caldesc").innerHTML = smth
  document.getElementById("caldesc2").innerHTML = smth

}

function calbuy() {
  if (variable >= calnetprice) {

    variable -= calnetprice
    cal += 1
    calprice = getPrice(100000000, 1.2, cal)
    calnetprice = (calprice * (Math.pow(0.9, calmamount) / caltier)).toFixed(2)

  }
}


function caleffC() {
  document.getElementById('caldesc').innerHTML = "Cost:" + caleffcost + "𝑥"
  document.getElementById("caldesc2").innerHTML = "Increases x-variable production by 10%"

}


function caleffU() {
  if (variable >= caleffcost) {
    variable -= caleffcost
    caleffamount += 1
    caleff *= 1.1
    caleffcost = getPrice(25000000, 1.1, caleffamount)


  }

}

function calyC() {
  document.getElementById('caldesc').innerHTML = "Cost:" + calycost + "𝑥"
  document.getElementById("caldesc2").innerHTML = "Increases y-variable production by 10%"

}

function calyU() {
  if (variable >= calycost) {
    variable -= calycost
    calyamount += 1
    calyvps *= 1.1
    calycost = getPrice(75000000, 1.1, calyamount)
  }

}
function calMC() {
  document.getElementById('caldesc').innerHTML = "Cost:" + calmcost + "𝑥"
  document.getElementById("caldesc2").innerHTML = "Decreases price by 10%"

}

function calMU() {
  if (variable >= calmcost) {


    variable -= calmcost
    calmamount += 1
    calnetprice = (calprice * (Math.pow(0.9, calmamount) / caltier)).toFixed(2)
    calmcost = getPrice(1000000000, 1.1, calmamount)
  }

}
function calMC() {
  document.getElementById('caldesc').innerHTML = "Cost:" + calmcost + "𝑥"
  document.getElementById("caldesc2").innerHTML = "Decreases price by 10%"

}

function calTC() {
  if (caltier < 4) {
    document.getElementById('caldesc').innerHTML = "Cost:" + caltiercost + "𝑥"
    document.getElementById("caldesc2").innerHTML = "Upgrades tier"
  }
  if (caltier == 4) {
    document.getElementById('caldesc').innerHTML = "Max tier reached!"

  }

}

function calTU() {
  if (variable >= caltiercost) {
    if (caltier < 4) {
      variable -= caltiercost
      caltier += 1
      caltiercost = getPrice(12500000000, 3, caltier)

    }

  }
}




function clickbuy() {
  if (variable >= clicknetprice) {

    variable -= clicknetprice
    click += 1
    vperclick *= 2
    if (vperclick <= 2000) {
      clickprice = getPrice(500, 1.5, click)
    } else {
      clickprice = getPrice(500, 1.5, click) + getPrice(500, 1.5, click)

    }
    clicknetprice = (clickprice).toFixed(2)

  }
}

function studentbuy() {
  if (yvar >= studentnetprice) {

    yvar -= studentnetprice
    student += 1

    studentprice = getPrice(10000, 1.2, student)
    studentnetprice = (studentprice).toFixed(2)

  }
}



function teacherbuy() {
  if (yvar >= teachernetprice) {

    yvar -= teachernetprice
    teacher += 1

    teacherprice = getPrice(125000, 1.2, teacher)
    teachernetprice = (teacherprice).toFixed(2)

  }
}


function schoolbuy() {
  if (yvar >= schoolnetprice) {

    yvar -= schoolnetprice
    school += 1

    schoolprice = getPrice(125000, 1.2, school)
    schoolnetprice = (schoolprice).toFixed(2)

  }
}


