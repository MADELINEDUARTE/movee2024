// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{

    head: {
      // Agrega la referencia al archivo CSS
      link: [
        { rel: 'stylesheet', href: '/public/assets/css/all-fontawesome.min.css' },
        { rel: 'stylesheet', href: '/public/assets/css/animate.min.css' },
        { rel: 'stylesheet', href: '/public/assets/css/magnific-popup.min.css' },
        { rel: 'stylesheet', href: '/public/assets/css/owl.carousel.min.css' },
        { rel: 'stylesheet', href: '/public/assets/css/jquery-ui.min.css' },
        { rel: 'stylesheet', href: '/public/assets/css/jquery.timepicker.min.css' },
        { rel: 'stylesheet', href: '/public/assets/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/public/assets/css/style.css' }
      ],
      script: [
        { src: '/public/assets/js/jquery-3.6.0.min.js',  },
        { src: '/public/assets/js/modernizr.min.js',  },
        { src: '/public/assets/js/bootstrap.bundle.min.js',  },
        { src: '/public/assets/js/imagesloaded.pkgd.min.js',  },
        { src: '/public/assets/js/jquery.magnific-popup.min.js',  },
        { src: '/public/assets/js/isotope.pkgd.min.js',  },
        { src: '/public/assets/js/jquery.appear.min.js',  },
        { src: '/public/assets/js/jquery.easing.min.js',  },
        { src: '/public/assets/js/owl.carousel.min.js',  },
        { src: '/public/assets/js/counter-up.js',  },
        { src: '/public/assets/js/jquery-ui.min.js',  },
        { src: '/public/assets/js/jquery.timepicker.min.js',  },
        { src: '/public/assets/js/wow.min.js',  },
        { src: '/public/assets/js/main.js',  }
      ]
    },
    
  }
})
