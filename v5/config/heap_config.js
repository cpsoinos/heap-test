!function(){var SERVER_SIDE_CONFIG={};function a(e){var n;return-1===e.indexOf('core')&&e.push('core'),e.sort(function(e,n){return e<n?-1:n<e?1:0}).join('-')}function i(){var e=a(SERVER_SIDE_CONFIG.sdk?.plugins||[]),n=heap&&heap.clientConfig&&heap.clientConfig.sdk||{},i=n.domain||SERVER_SIDE_CONFIG.sdk.domain,r=n.version||SERVER_SIDE_CONFIG.sdk.version,t;return i+'/v5/'+(n.version||!SERVER_SIDE_CONFIG.sdk.isExperimentalVersion?'heapjs-static':'heapjs-experimental')+'/'+r+'/'+e+'/heap.js'}function e(){var e=i(),n=document.createElement('script');n.type='text/javascript',n.src=e,n.async=!0;var e=document.getElementsByTagName('script')[0];e.parentNode.insertBefore(n,e)}window.heap.serverConfig=SERVER_SIDE_CONFIG,window.heap.init(window.heap.envId,window.heap.clientConfig,window.heap.serverConfig),e()}();
