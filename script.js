const slider = document.getElementById('slider');
const cards = [...document.querySelectorAll('.product-card')];
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;

function goTo(i){
  index = (i + cards.length) % cards.length;
  cards[index].scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
  cards.forEach((card,n)=>card.classList.toggle('active', n===index));
}
prev.addEventListener('click',()=>goTo(index-1));
next.addEventListener('click',()=>goTo(index+1));

let startX=0;
slider.addEventListener('touchstart',e=>startX=e.touches[0].clientX,{passive:true});
slider.addEventListener('touchend',e=>{
  const dx=e.changedTouches[0].clientX-startX;
  if(Math.abs(dx)>45) goTo(index+(dx<0?1:-1));
},{passive:true});

slider.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight') goTo(index+1);
  if(e.key==='ArrowLeft') goTo(index-1);
});

document.querySelectorAll('.size-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    btn.parentElement.querySelectorAll('.size-btn').forEach(x=>x.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

document.getElementById('menuBtn').addEventListener('click',()=>{
  const nav=document.querySelector('.topbar nav');
  nav.style.display = nav.style.display==='flex' ? '' : 'flex';
  nav.style.position='absolute';
  nav.style.top='70px';
  nav.style.left='0';
  nav.style.right='0';
  nav.style.padding='20px';
  nav.style.borderRadius='14px';
  nav.style.background='rgba(9,11,14,.95)';
  nav.style.flexDirection='column';
});
