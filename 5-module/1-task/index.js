function hideSelf() {
  for (let button of document.querySelectorAll('.hide-self-button')) 
    button.onclick = () => { button.hidden = 'true' };
}
