var WebDeveloper = WebDeveloper || {};

WebDeveloper.Facebook                       = WebDeveloper.Facebook || {};
WebDeveloper.Facebook.divDimensionsLocale   = null;
WebDeveloper.Facebook.divDimensionsTimeout  = null;
WebDeveloper.Facebook.divDimensionsUpdating = false;

// Displays the anchors on a page
WebDeveloper.Facebook.facebookId = function(display, documents)
{
  var anchorElement    = null;
  var anchorElements   = null;
  var contentDocument  = null;
  var documentLocation = null;
  var anchorLocation   = null;
  var linkElement      = null;
  var spanElement      = null;
  var text             = null;

  // Loop through the documents
  for(var i = 0, l = documents.length; i < l; i++)
  {
    contentDocument = documents[i];

    WebDeveloper.Common.removeMatchingElements(".web-developer-display-anchors", contentDocument);

    // If displaying the anchors
    if(display)
    {
      anchorElements   = contentDocument.querySelectorAll("[id], [name]");
      documentLocation = contentDocument.location;
      anchorLocation   = documentLocation.pathname + documentLocation.search;

      // Loop through the anchor elements
      for(var j = 0, m = anchorElements.length; j < m; j++)
      {
        anchorElement = anchorElements[j];

        // If the anchor element is not the document root element
        if(anchorElement != contentDocument.documentElement)
        {
          linkElement = contentDocument.createElement("a");
          spanElement = contentDocument.createElement("span");
          text        = anchorLocation;

          // If the anchor element has an id attribute
          if(anchorElement.hasAttribute("id"))
          {
            text = "#" + anchorElement.getAttribute("id");
          }
          else if(anchorElement.hasAttribute("name"))
          {
            text = "#" + anchorElement.getAttribute("name");
          }

          linkElement.setAttribute("href", text);
          linkElement.appendChild(contentDocument.createTextNode(text));

          spanElement.setAttribute("class", "web-developer-display-anchors");
          spanElement.appendChild(linkElement);
          anchorElement.parentNode.insertBefore(spanElement, anchorElement);
        }
      }
    }

    WebDeveloper.Common.toggleStyleSheet("features/style-sheets/before.css", "web-developer-display-anchors", contentDocument, false);
  }
};