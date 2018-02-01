(function initializePage(){
  document.querySelector('#application-text').addEventListener('keyup', updatePreview);
  document.querySelector('#preview-toggle').addEventListener('click', togglePreview);
  document.querySelector('#application-input').addEventListener('submit', submitApplication);
  getListing().then(response => {
    addListing(response);
  });
})();




function makeElement(tag, text){
  let element = document.createElement(tag);
  element.textContent = text;
  return element;
}


function submitApplication(event){
  event.preventDefault();
  event.target.reset();
  document.querySelector("#application-preview").textContent = "";
  flashSuccessMessage("Your application was submitted!");
}

function flashSuccessMessage(message){
  document.querySelector("#message").textContent = message;
}
