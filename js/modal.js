const modal=document.querySelector(".modal"),productButton=document.querySelector(".product__button"),buyButtons=document.querySelectorAll(".buy__button");productButton&&productButton.addEventListener("click",(t=>{t.preventDefault(),modal.showModal()})),buyButtons&&buyButtons.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),modal.showModal()}))})),modal.addEventListener("pointerdown",(t=>{t.preventDefault();const e=modal.getBoundingClientRect();(t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom)&&modal.close()}));