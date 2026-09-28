const menuBtn=document.querySelector('.menu-btn');const mobileMenu=document.querySelector('.mobile-menu');const closeMenu=document.querySelector('.close-menu');
menuBtn?.addEventListener('click',()=>{mobileMenu.classList.add('open');mobileMenu.setAttribute('aria-hidden','false');document.body.classList.add('no-scroll')});
closeMenu?.addEventListener('click',()=>{mobileMenu.classList.remove('open');mobileMenu.setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll')});
document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');mobileMenu.setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll')}));
const modal=document.querySelector('.modal');const modalTitle=document.querySelector('.modal-title');const modalClose=document.querySelector('.modal-close');
document.querySelectorAll('.product-card').forEach(card=>card.addEventListener('click',e=>{if(e.target.closest('.view-btn')||e.currentTarget){modalTitle.textContent=card.dataset.product.toUpperCase();modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('no-scroll')}}));
modalClose?.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll')});
modal?.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll')}});
