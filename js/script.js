const regist_form = document.querySelector('#regist-form')

function openModal(id){
  regist_form.classList.add('regist-form__show');
  regist_form.innerHTML = `<div id="regist-container" class="regist-form__container container">
  <h3 class="regist-form__title">Оставить заявку</h3>
  <form id="regist" action="#" class="regist-form__body">
    <input id="name" type="text" placeholder="Имя" class="regist-form__item">
    <input id="secondname" type="text" placeholder="Фамилия" class="regist-form__item">
    <input id="phone" type="text" placeholder="Ваш телефон" class="regist-form__item">
    <input id="mail" type="text" placeholder="Ваш email" class="regist-form__item">
    <button id='submitBtn' class="regist-form__btn send-btn" type="submit">Оставить заявку</button>
  </form>
  <p class="regist-form__warning">При нажатии на кнопку “Отправить”, Вы даёте согласие на обработу своих персональных данных</p>
</div>`;

const registBody = document.querySelector('#regist')
registBody.addEventListener('mouseenter', (e)=>{
  e.target.setAttribute('autocomplete', 'off')
})

const submitBtn = document.querySelector('#submitBtn')
submitBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  saveFormData();
})

}


const openBtn = document.querySelectorAll('#openBtn')
openBtn.forEach(openBtn => {
  openBtn.addEventListener('click', function(){
    openModal();
  })
})

function closeModal(){
  regist_form.innerHTML = ''
  regist_form.classList.remove('regist-form__show')
}


window.addEventListener('click', (e)=>{
  if(e.target == regist_form){
    closeModal()
  }
})

function saveFormData(){
  const name = document.querySelector('#name').value
  const secondname = document.querySelector('#secondname').value
  const phone = document.querySelector('#phone').value
  const mail = document.querySelector('#mail').value
  
  const userData = {
    name,
    secondname,
    phone,
    mail
  };

  localStorage.setItem('userData', JSON.stringify(userData));

  console.log(userData);

}