{ // modal helpers

  let modalDepth = 0;
  
  const

    getHashModal = () => {
      if (location.hash.length < 2) return null;
      const target = document.getElementById(location.hash.substring(1));
      if (target && target.classList.contains("modal")) return target;
    },
    focusableElements = "a, button, input, select, textarea";
    getFocusable = () => document.querySelectorAll(focusableElements);
    checkHash = () => {
      if (location.hash.length > 1) {
        let target = getHashModal();
        if (target) {
          modalDepth++;
          for (const e of getFocusable()) {
            e.tabIndex = (
              e.closest(".modal") === target ?
              e.dataset.originalTabIndex :
              -1
            );
          }
          const first = target.querySelector("input, select, textarea");
          if (first) first.focus();
          else if (document.activeElement) document.activeElement.blur();
          return;
        }
      }
      for (const e of getFocusable()) e.tabIndex = (
        e.closest(".modal") ?
        -1 :
        e.dataset.originalTabIndex
      );
    }; // checkHash
    
  Object.defineProperty(document, "__defineOriginalHashes", {
    value : () => {
      for (const e of getFocusable()) {
        if (e.dataset.originalTabIndex === undefined) {
          e.dataset.originalTabIndex = e.tabIndex || 0;
        }
      }
      checkHash();
    }
  } );
  
  addEventListener("hashchange", checkHash);
  checkHash();
  modalDepth = 0;
  
  const
    modalClose = (e) => {
      e.preventDefault();
      if (modalDepth) {
        do {
          history.back();
        } while (--modalDepth);
      } else location.hash = "#";
    };
  
  /* remember, keypress won't return escape! */
  document.addEventListener("keydown", (e) => {
    const target = getHashModal();
    if (!target || (e.key !== "Escape")) return;
    modalClose(e);
  });
  
  for (let a of document.querySelectorAll("[class^=modalClose]")) {
    a.addEventListener("click", modalClose);
  }
  
}  // modal helpers
// {
//   // topnav events
//   const topnav = document.querySelector('.mandala-wrap');
//   const header = document.querySelector('.site-header');
//   topnav.addEventListener('click', function(e) {
//     let target = e.target === this;
//     if (!target) {
//       if (this.classList.contains('inactive')) {
//         e.preventDefault();
//         this.classList.replace('inactive', 'active');
//         header.classList.replace('hide', 'show');
//       }
//       else if (this.classList.contains('active')) {
//         this.classList.replace('active', 'inactive');
//         header.classList.replace('show', 'hide');
//       }
//       else {
//         e.preventDefault();
//         this.classList.add('active');
//         header.classList.add('show');
//       }
//     }
//   });
// }
