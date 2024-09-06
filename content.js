function replaceCommitTypes() {
  const commitMessages = document.querySelectorAll('a[data-pjax="true"]');
  
  commitMessages.forEach(message => {
    const text = message.textContent.trim().toLowerCase();

    if (text.startsWith('feat:')) {
      message.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQXCfw2Ulfrfe1xG2NGkSe7FOnT0h9AEjcQ&s" alt="Feature" class="commit-icon"> ${text.replace('feat:', '')}`;
    } else if (text.startsWith('chore:')) {
      message.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQXCfw2Ulfrfe1xG2NGkSe7FOnT0h9AEjcQ&s" alt="Chore" class="commit-icon"> ${text.replace('chore:', '')}`;
    } else if (text.startsWith('refactor:')) {
      message.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQXCfw2Ulfrfe1xG2NGkSe7FOnT0h9AEjcQ&s" alt="Refactor" class="commit-icon"> ${text.replace('refactor:', '')}`;
    }
  });
}

window.addEventListener('load', function() {
  console.log('Script loaded');
  replaceCommitTypes();
});

const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes.length) {
      replaceCommitTypes();
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
