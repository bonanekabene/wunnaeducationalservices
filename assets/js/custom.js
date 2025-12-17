


var level_open = document.querySelectorAll('.sidebar nav li');
level_open.forEach((level)=> {
    level.addEventListener('click', function () {
      
        level_open.forEach((l)=> l.classList.remove('active'));
        this.classList.toggle('active');
        
       
    }); 

  });

  var level_open2 = document.querySelectorAll('.modal nav li');
level_open2.forEach((level)=> {
    level.addEventListener('click', function () {
      
        level_open2.forEach((l)=> l.classList.remove('active'));
        this.classList.toggle('active');
        
       
    }); 

  });

  var link_open = document.querySelectorAll('footer .dropd');
link_open.forEach((link)=> {
    link.addEventListener('click', function () {
      
        this.classList.toggle('active');
       
    }); 

  });

    var Types = document.querySelectorAll('.content-types');
  var loadMoreBtnn = document.querySelector('.content-type .loadmore');

  let currentCountt = 0;
  var perPagee = 6; // show 12 each time

  function showTypes() {
    for (let o = currentCountt; o < currentCountt + perPagee && o < Types.length; o++) {
      Types[o].style.display = 'block';
    }
    currentCountt += perPagee;

    // hide button if no more Types
    if (currentCountt >= Types.length) {
      loadMoreBtnn.style.display = 'none';
    }
  }

  // initial load
  showTypes();

  // on button click
  loadMoreBtnn.addEventListener('click', showTypes);
  