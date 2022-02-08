function makeFriendsList(friends) {
  let ulElem = document.createElement('ul');
  friends.map(person => {
    let liElem = document.createElement('li');
    liElem.innerText = `${person.firstName} ${person.lastName}`;
    ulElem.appendChild(liElem);
  });
  return ulElem;
}
