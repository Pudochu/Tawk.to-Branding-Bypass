// This function is used to remove Tawk.to branding elements.
function removeBranding() {
  // Select the iframe and access its content.
  var iframe = document.querySelector("iframe[title*='chat']");
  if (iframe && iframe.contentDocument) {
      var iframeDocument = iframe.contentDocument;

      // Create a new style tag.
      var style = document.createElement('style');
      style.innerHTML = `
          a[class*='tawk-button-small'], a[class*='tawk-branding'] {
              display: none !important;
          }
      `;
      // Append the style tag to the head of the iframe.
      iframeDocument.head.appendChild(style);
  }
}

// Create a MutationObserver to monitor DOM changes.
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length) {
          removeBranding();
      }
  });
});

// Attach the observer to a target and specify the configuration options.
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Call the remove branding function for the initial load.
removeBranding();
