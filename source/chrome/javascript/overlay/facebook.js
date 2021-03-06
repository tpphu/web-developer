var WebDeveloper = WebDeveloper || {};

WebDeveloper.Overlay          = WebDeveloper.Overlay || {};
WebDeveloper.Overlay.Facebook = WebDeveloper.Overlay.Facebook || {};

$(function()
{
  $("#facebook-id-social").append(WebDeveloper.Locales.getString("facebookIdSocial")).on("click", WebDeveloper.Overlay.Facebook.facebookId);
  $("#facebook-date-time").append(WebDeveloper.Locales.getString("facebookDateTime")).on("click", WebDeveloper.Overlay.Facebook.facebookDateTime);
});

// Adds a feature on a tab
WebDeveloper.Overlay.Facebook.addFeatureOnTab = function(featureItem, tab, scriptCode)
{
  WebDeveloper.Overlay.addFeatureOnTab(featureItem, tab, "features/javascript/facebook.js", scriptCode);
};

// Clears the cache
WebDeveloper.Overlay.Facebook.facebookId = function()
{
  var featureItem = $(this);
  WebDeveloper.Overlay.getSelectedTab(function(tab)
  {
    // If the tab is valid
    if(WebDeveloper.Overlay.isValidTab(tab))
    {
      var feature = featureItem.attr("id");
      var display = !chrome.extension.getBackgroundPage().WebDeveloper.Storage.isFeatureOnTab(feature, tab);

      WebDeveloper.Overlay.Facebook.toggleFeatureOnTab(featureItem, tab, "WebDeveloper.Facebook.facebookId(" + display + ", [document]);");
    }
  });
};

// Clears the history
WebDeveloper.Overlay.Facebook.facebookDateTime = function()
{

};

// Toggles a feature on a tab
WebDeveloper.Overlay.Facebook.toggleFeatureOnTab = function(featureItem, tab, scriptCode)
{
  WebDeveloper.Overlay.toggleFeatureOnTab(featureItem, tab, "features/javascript/facebook.js", scriptCode);
};
