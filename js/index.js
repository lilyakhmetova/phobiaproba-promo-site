document.querySelector('.iconmenu').onclick = function() {
  document.querySelector('.iconmenu').style.display = `none`
  document.querySelector('.iconcross').style.display = `block`
  document.querySelector('.fullmenu').style.display = `flex`
  document.querySelector('.shadow').style.display = `block`
}

document.querySelector('.iconcross').onclick = function() {
  document.querySelector('.iconmenu').style.display = `inherit`
  document.querySelector('.iconcross').style.display = `none`
  document.querySelector('.fullmenu').style.display = `none`
  document.querySelector('.shadow').style.display = `none`
}

document.getElementById('subscription').onclick = function() {
document.querySelector('body').style.background = '#9F57FF'
document.getElementById('subscription').innerHTML = 'ВЫ ПОДПИСАНЫ'
}
