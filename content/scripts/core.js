$(document).on('click', '.sub-menu-link', function () {
    $(this).toggleClass('expand');
    $(this).closest('li').find('.sub-menu').toggleClass('expand');
})

$('#btnMenuToggle').on('click', function () {
    $(this).closest('.nav').toggleClass('expand');
});

/*
var ctxBackground = $('#cvsBackground')[0].getContext('2d');
var ctxForeground = $('#cvsForeground')[0].getContext('2d');

// dimension
var width = $('.nav').width();
var height = $('.nav').height();

// character array
var charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// declaration
var fallingCharArr = [];
var fontSize = 7;

// initialization
maxColums = width / fontSize;
$('#cvsBackground')[0].width = $('#cvsForeground')[0].width = width;
$('#cvsBackground')[0].height = $('#cvsForeground')[0].height = height;

// randomize
function randomInt( min, max ) {
  return Math.floor(Math.random() * ( max - min ) + min);
}

function randomFloat( min, max ) {
  return Math.random() * ( max - min ) + min;
}

function Point(x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.draw = function(ctx) {
  this.value = charArr[randomInt(0,charArr.length-1)].toUpperCase();
  this.speed = randomFloat(0,5);

  ctxForeground.fillStyle = "rgba(255,255,255,0.8)";
  ctxForeground.font = fontSize+"px san-serif";
  ctxForeground.fillText(this.value,this.x,this.y);

  ctx.fillStyle = "#00ff00";
  ctx.font = fontSize+"px san-serif";
  ctx.fillText(this.value,this.x,this.y);

  this.y += this.speed;
  if(this.y > height) {
    this.y = randomFloat(-100,0);
    this.speed = randomFloat(0,5);
  }
}

var update = function() {
  ctxBackground.fillStyle = "rgba(0,0,0,0.05)";
  ctxBackground.fillRect(0,0,width,height);
  ctxForeground.clearRect(0,0,width,height);

  var i = fallingCharArr.length;
  while (i--) {
    fallingCharArr[i].draw(ctxBackground);
  }

  requestAnimationFrame(update);
}

update();
*/

var canvas = document.getElementById('cvsBackground'),
    ctx = canvas.getContext( '2d' ),
    canvas2 = document.getElementById('cvsForeground'),
    ctx2 = canvas2.getContext( '2d' ),
		// full screen dimensions
		cw = document.getElementsByClassName('nav')[0].clientWidth,
		ch = document.getElementsByClassName('nav')[0].clientHeight,
    charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    //maxCharCount = 100,
    fallingCharArr = [],
    fontSize = 7,
    maxColums = cw/(fontSize);
    canvas.width = canvas2.width = cw;
    canvas.height = canvas2.height = ch;


    function randomInt( min, max ) {
    	return Math.floor(Math.random() * ( max - min ) + min);
    }

    function randomFloat( min, max ) {
    	return Math.random() * ( max - min ) + min;
    }

    function Point(x,y)
    {
      this.x = x;
      this.y = y;
    }

    Point.prototype.draw = function(ctx){

      this.value = charArr[randomInt(0,charArr.length-1)].toUpperCase();
      this.speed = randomFloat(0,5);


      ctx2.fillStyle = "rgba(255,255,255,0.8)";
      ctx2.font = fontSize+"px san-serif";
      ctx2.fillText(this.value,this.x,this.y);

        ctx.fillStyle = "#00ff00";
        ctx.font = fontSize+"px san-serif";
        ctx.fillText(this.value,this.x,this.y);



        this.y += this.speed;
        if(this.y > ch)
        {
          this.y = randomFloat(-100,0);
          this.speed = randomFloat(0,5);
        }
    }

    for(var i = 0; i < maxColums ; i++) {
      fallingCharArr.push(new Point(i*fontSize,randomFloat(-500,0)));
    }


    var update = function()
    {

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,cw,ch);

    ctx2.clearRect(0,0,cw,ch);

      var i = fallingCharArr.length;

      while (i--) {
        fallingCharArr[i].draw(ctx);
        var v = fallingCharArr[i];
      }

      requestAnimationFrame(update);
    }

  update();