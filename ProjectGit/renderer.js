function getBranch() {
  return document.getElementById('branch').value;
}

function getMessage() {
  return document.getElementById('commitMsg').value;
}

function displayOutput(data) {
  document.getElementById('output').textContent = data;
}

window.electronAPI.onOutput(displayOutput);

function runCommand(cmd) {
  window.electronAPI.runCommand(cmd);
}

function runSwitch() {
  runCommand(`git switch R${getBranch()}`);
}

function runReset() {
  runCommand(`git reset --hard origin/${getBranch()} && git pull`);
}

function runPull() {
  runCommand(`git pull`);
}

function runCommit() {
  runCommand(`git commit -a -m "RELEASE:${getBranch()} ${getMessage()}"`);
}

function runPush() {
  const branch = getBranch();
  runCommand(`git push origin ${branch}:${branch}`);
}