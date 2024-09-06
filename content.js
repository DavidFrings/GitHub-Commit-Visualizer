function replaceCommitTypes() {
  const commitMessages = document.querySelectorAll('a[data-pjax="true"], .commit-title');
  
  commitMessages.forEach(message => {
    const text = message.textContent.trim().toLowerCase();

    if (text.startsWith('feat:')) {
      message.innerHTML = `<img src="https://raw.githubusercontent.com/DavidFrings/GitHub-Commit-Visualizer/main/icons/feat.png" alt="Feature" class="commit-icon"> ${text.replace('feat:', '')}`;
    } else if (text.startsWith('fix:')) {
      message.innerHTML = `<img src="https://raw.githubusercontent.com/DavidFrings/GitHub-Commit-Visualizer/main/icons/fix.png" alt="Fix" class="commit-icon"> ${text.replace('fix:', '')}`;
    } else if (text.startsWith('docs:')) {
      message.innerHTML = `<img src="https://raw.githubusercontent.com/DavidFrings/GitHub-Commit-Visualizer/main/icons/docs.png" alt="Docs" class="commit-icon"> ${text.replace('docs:', '')}`;
    } else if (text.startsWith('style:')) {
      message.innerHTML = `<img src="https://raw.githubusercontent.com/DavidFrings/GitHub-Commit-Visualizer/main/icons/style.png" alt="Style" class="commit-icon"> ${text.replace('style:', '')}`;
    } else if (text.startsWith('refactor:')) {
      message.innerHTML = `<img src="https://raw.githubusercontent.com/DavidFrings/GitHub-Commit-Visualizer/main/icons/refactor.png" alt="Refactor" class="commit-icon"> ${text.replace('refactor:', '')}`;
    }  else if (text.startsWith('test:')) {
      message.innerHTML = `<img src="https://raw.githubusercontent.com/DavidFrings/GitHub-Commit-Visualizer/main/icons/test.png" alt="Test" class="commit-icon"> ${text.replace('test:', '')}`;
    } else if (text.startsWith('chore:')) {
      message.innerHTML = `<img src="https://raw.githubusercontent.com/DavidFrings/GitHub-Commit-Visualizer/main/icons/chore.png" alt="Chore" class="commit-icon"> ${text.replace('chore:', '')}`;
    }  else if (text.startsWith('perf:')) {
      message.innerHTML = `<img src="https://raw.githubusercontent.com/DavidFrings/GitHub-Commit-Visualizer/main/icons/perf.png" alt="Performance" class="commit-icon"> ${text.replace('perf:', '')}`;
    } else if (text.startsWith('ci:')) {
      message.innerHTML = `<img src="https://raw.githubusercontent.com/DavidFrings/GitHub-Commit-Visualizer/main/icons/ci.png" alt="CI" class="commit-icon"> ${text.replace('ci:', '')}`;
    }  else if (text.startsWith('build:')) {
      message.innerHTML = `<img src="https://raw.githubusercontent.com/DavidFrings/GitHub-Commit-Visualizer/main/icons/build.png" alt="Build" class="commit-icon"> ${text.replace('build:', '')}`;
    } else if (text.startsWith('revert:')) {
      message.innerHTML = `<img src="https://raw.githubusercontent.com/DavidFrings/GitHub-Commit-Visualizer/main/icons/revert.png" alt="Revert" class="commit-icon"> ${text.replace('revert:', '')}`;
    }  else if (text.startsWith('hotfix:')) {
      message.innerHTML = `<img src="https://raw.githubusercontent.com/DavidFrings/GitHub-Commit-Visualizer/main/icons/hotfix.png" alt="HOTFIX" class="commit-icon"> ${text.replace('hotfix:', '')}`;
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
