const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  console.log('before install event: ' + event)
  // triggered events stored in window with deferred prompt
  window.deferredPrompt = event;

  // Remove the hidden class from the button.
  butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // store the prompt event
  const promptEvent = window.deferredPrompt;
  console.log(promptEvent);
  // if there is no prompt event, return
  if (!promptEvent) {
    return;
  }

  // show the prompt event
  promptEvent.prompt();

  // reset the deferred prompt variable since it can only be used once
  window.deferredPrompt = null;

  // hide the install button
  butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('Installation has occurred')
  // clear the prompt
  window.deferredPrompt = null;
});