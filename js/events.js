// document.querySelector('#moreinfo1').onclick = function() {
//   document.querySelector('#event1').style.display = `block`
// }

$('#moreinfo1').on('click', function() {
  if (!$(this).hasClass('clicked')) {
    $(this).addClass('clicked');
    document.querySelector('#event1').style.display = `block`
  } else {
    $(this).removeClass('clicked');
    document.querySelector('#event1').style.display = `none`
  }
});

$('#tabletmoreinfo1').on('click', function() {
  if (!$(this).hasClass('clicked')) {
    $(this).addClass('clicked');
    document.querySelector('#tabletevent1').style.display = `flex`
  } else {
    $(this).removeClass('clicked');
    document.querySelector('#tabletevent1').style.display = `none`
  }
});

$('#desktopmoreinfo1').on('click', function() {
  if (!$(this).hasClass('clicked')) {
    $(this).addClass('clicked');
    document.querySelector('#desktopevent1').style.display = `flex`
  } else {
    $(this).removeClass('clicked');
    document.querySelector('#desktopevent1').style.display = `none`
  }
});

// document.querySelector('#moreinfo2').onclick = function() {
//   document.querySelector('#event2').style.display = `block`
// }

$('#moreinfo2').on('click', function() {
  if (!$(this).hasClass('clicked')) {
    $(this).addClass('clicked');
    document.querySelector('#event2').style.display = `block`
  } else {
    $(this).removeClass('clicked');
    document.querySelector('#event2').style.display = `none`
  }
});

$('#tabletmoreinfo2').on('click', function() {
  if (!$(this).hasClass('clicked')) {
    $(this).addClass('clicked');
    document.querySelector('#tabletevent2').style.display = `flex`
  } else {
    $(this).removeClass('clicked');
    document.querySelector('#tabletevent2').style.display = `none`
  }
});

$('#desktopmoreinfo2').on('click', function() {
  if (!$(this).hasClass('clicked')) {
    $(this).addClass('clicked');
    document.querySelector('#desktopevent2').style.display = `flex`
  } else {
    $(this).removeClass('clicked');
    document.querySelector('#desktopevent2').style.display = `none`
  }
});

// document.querySelector('#moreinfo3').onclick = function() {
//   document.querySelector('#event3').style.display = `block`
// }

$('#moreinfo3').on('click', function() {
  if (!$(this).hasClass('clicked')) {
    $(this).addClass('clicked');
    document.querySelector('#event3').style.display = `block`
  } else {
    $(this).removeClass('clicked');
    document.querySelector('#event3').style.display = `none`
  }
});

$('#tabletmoreinfo3').on('click', function() {
  if (!$(this).hasClass('clicked')) {
    $(this).addClass('clicked');
    document.querySelector('#tabletevent3').style.display = `flex`
  } else {
    $(this).removeClass('clicked');
    document.querySelector('#tabletevent3').style.display = `none`
  }
});

$('#desktopmoreinfo3').on('click', function() {
  if (!$(this).hasClass('clicked')) {
    $(this).addClass('clicked');
    document.querySelector('#desktopevent3').style.display = `flex`
  } else {
    $(this).removeClass('clicked');
    document.querySelector('#desktopevent3').style.display = `none`
  }
});

// document.querySelector('#moreinfo4').onclick = function() {
//   document.querySelector('#event4').style.display = `block`
// }

$('#moreinfo4').on('click', function() {
  if (!$(this).hasClass('clicked')) {
    $(this).addClass('clicked');
    document.querySelector('#event4').style.display = `block`
  } else {
    $(this).removeClass('clicked');
    document.querySelector('#event4').style.display = `none`
  }
});

$('#tabletmoreinfo4').on('click', function() {
  if (!$(this).hasClass('clicked')) {
    $(this).addClass('clicked');
    document.querySelector('#tabletevent4').style.display = `flex`
  } else {
    $(this).removeClass('clicked');
    document.querySelector('#tabletevent4').style.display = `none`
  }
});

$('#desktopmoreinfo4').on('click', function() {
  if (!$(this).hasClass('clicked')) {
    $(this).addClass('clicked');
    document.querySelector('#desktopevent4').style.display = `flex`
  } else {
    $(this).removeClass('clicked');
    document.querySelector('#desktopevent4').style.display = `none`
  }
});
