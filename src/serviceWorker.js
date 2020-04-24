function registerValidSW(swUrl, config) {
  navigator.serviceWorker
        .register(swUrl, config)
        .then(function(reg) {
            console.log('Registration succeeded. Scope is ' + reg.scope);
        })
        .catch(function(error) {
            console.log('Registration failed with ' + error);
        });
}

export function register(config) {
  window.addEventListener('load', () => {
    let swUrl = `${process.env.PUBLIC_URL}/sw_cors.js`;
    if (config.scope === '/no-cors') {
      swUrl = `${process.env.PUBLIC_URL}/sw_nocors.js`;
    }

    registerValidSW(swUrl, config);
  });
}

export function unregister() {
  navigator.serviceWorker.ready
    .then(registration => {
      registration.unregister();
    })
    .catch(error => {
      console.error(error.message);
    });
}
