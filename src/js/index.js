// content was loaded
document.addEventListener('DOMContentLoaded', () => {

  // variables
  const accordionButtons = document.querySelectorAll('.accordion__button');
  const accordionContents = document.querySelectorAll('.accordion__content');

  // function click accordion buttons
  const onCLickAccordionButtons = (itemAcc) => {
    itemAcc.addEventListener('click', event => {
      event.preventDefault();
      const context = itemAcc.nextElementSibling;

      if (context.style.maxHeight) {
        context.style.maxHeight = null;
        itemAcc.parentElement.classList.remove('is-open');
      } else {
        context.style.maxHeight = context.scrollHeight + 'px';
        itemAcc.parentElement.classList.add('is-open');
      }

      accordionContents.forEach(itemCon => {
        if (itemCon !== context) {
          itemCon.style.maxHeight = null;
          // itemAcc.classList.remove('is-open');
        }
      })

      accordionButtons.forEach(item => {
        if (item !== itemAcc) {
          item.parentElement.classList.remove('is-open');
        }
      });

      
    })
  };
  
  // initialization functions
  const init = () => {
    accordionButtons.forEach(onCLickAccordionButtons);
  }

  init();
  
});