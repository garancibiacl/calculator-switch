   const el1 = document.querySelector('.calculator');
      const btnDark = document.querySelector('.btn--dark');
      btnDark.addEventListener('click' ,function() {
        if(el1.classList.contains('dark')) {
          el1.classList.remove('dark');
          this.classList.remove('btn--light');
          document.querySelector('body').style.background = '#dde1e7';
        }
        else {
          el1.classList.add('dark');
          this.classList.add('btn--light')
          document.querySelector('body').style.background = '#272727';
        }
      })


      $(function(){


        // minimize (looks kinda cool?)
          $(".min").click(function(){
              $("calculator").stop().animate({
                  width: "0px", height: "0px", marginLeft: "700px", marginTop: "1000px"
              }, 500);
              setTimeout(function(){$(".cal").css("display", "none")}, 600);
          });
        //close window. refresh to get back
          $(".close").click(function(){
              $(".calculator").css("display", "none");
          })
        })