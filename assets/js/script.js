const toggleBtn = document.querySelector('.toggle-btn');
const chatLista = document.querySelector('.chat__lista');
const chatBox = document.querySelectorAll('.chat__item');
chatLista.hidden = true;


toggleBtn.addEventListener('click', function() {
  chatLista.hidden = !chatLista.hidden;
});




    chatBox.forEach(function(chatBox){
    chatBox.addEventListener('click', function() {
      const chatInfo = this.querySelector('.chat__amount');
      const chatText = this.querySelector('.chat__text');
      if (chatInfo) {
        chatInfo.remove();
        
      }        
    });
    });

