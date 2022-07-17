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