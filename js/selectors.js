$("img")
$(".pics")
$("#baby-ninja")
$('ul li')
$('div img:first-child')
$("img[alt='the beatles making faces']")
$('div:last')

function paragraphSelector(){
  return $("p")
}

function lastImageSelector(){
  return $("div img:last")
}

function ninjaBabySelector(){
  return $("#baby-ninja")
}

function divSelector(){
  return $(".pics")
}

function firstListItem(){
  return $("#pic-list ul > li:first-child")
}