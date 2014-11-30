var WebDeveloper = WebDeveloper || {};

WebDeveloper.Overlay          = WebDeveloper.Overlay || {};
WebDeveloper.Overlay.Facebook = WebDeveloper.Overlay.Facebook || {};

$(function()
{
  $("#facebook-id").append(WebDeveloper.Locales.getString("facebookId")).on("click", WebDeveloper.Overlay.Facebook.facebookId);
  $("#facebook-datetime").append(WebDeveloper.Locales.getString("facebookDatetime")).on("click", WebDeveloper.Overlay.Facebook.facebookDatetime);
});

// Adds a feature on a tab
WebDeveloper.Overlay.Facebook.addFeatureOnTab = function(featureItem, tab, scriptCode)
{
  WebDeveloper.Overlay.addFeatureOnTab(featureItem, tab, "features/javascript/facebook.js", scriptCode);
};

// Clears the cache
WebDeveloper.Overlay.Facebook.facebookId = function()
{
  
};

// Clears the history
WebDeveloper.Overlay.Facebook.facebookDatetime = function()
{

};

// Toggles a feature on a tab
WebDeveloper.Overlay.Facebook.toggleFeatureOnTab = function(featureItem, tab, scriptCode)
{
  WebDeveloper.Overlay.toggleFeatureOnTab(featureItem, tab, "features/javascript/facebook.js", scriptCode);
};
