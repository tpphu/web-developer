var WebDeveloper = WebDeveloper || {};

WebDeveloper.Overlay          = WebDeveloper.Overlay || {};
WebDeveloper.Overlay.Facebook = WebDeveloper.Overlay.Facebook || {};

$(function()
{
  $("#facebook-id-social").append(WebDeveloper.Locales.getString("facebookIdSocial")).on("click", WebDeveloper.Overlay.Facebook.facebookId);
  $("#facebook-date-time").append(WebDeveloper.Locales.getString("facebookDateTime")).on("click", WebDeveloper.Overlay.Facebook.facebookDatetime);
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
