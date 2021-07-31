let firstSplit = document.querySelector('.firstSplit');



window.addEventListener('scroll',function(){
  if(scrollY>672){
    firstSplit.classList.add('active')
  }
  else if(scrollY<672){
    firstSplit.classList.remove('active')
  }
});
let friendSpan = document.querySelector('.friendSpan');
let same3 = document.querySelector('.same3');
let same1 = document.querySelector('.same1');
let friendsBtn = document.querySelector('.friendsBtn');
let images = document.querySelector('.images');
if(window.scrollY <= 323){
  same3.innerText = 'Edit Public Details';
  same1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M9.963 8.261c-.566-.585-.536-1.503.047-2.07l5.948-5.768c.291-.281.664-.423 1.035-.423.376 0 .75.146 1.035.44l-8.065 7.821zm-9.778 14.696c-.123.118-.185.277-.185.436 0 .333.271.607.607.607.152 0 .305-.057.423-.171l.999-.972-.845-.872-.999.972zm8.44-11.234l-3.419 3.314c-1.837 1.781-2.774 3.507-3.64 5.916l1.509 1.559c2.434-.79 4.187-1.673 6.024-3.455l3.418-3.315-3.892-4.019zm9.97-10.212l-8.806 8.54 4.436 4.579 8.806-8.538c.645-.626.969-1.458.969-2.291 0-2.784-3.373-4.261-5.405-2.29z" /></svg> Edit profile`
  friendSpan.innerText = 'Find friends';
  friendsBtn.innerHTML = `<button class = 'same same4'>See all friends</button>`;
  images.innerHTML = `<img class = images src= 'IMG_20210730_101905.jpg' />`
};
if(window.scrollY >= 323){
  friendsBtn.style.display = 'none';
}
