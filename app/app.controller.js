( function() {
  'use strict';

  // This controller is used only to drive the demo
  // You should not be using embedded controllers in your views
  // It's recommended that you move away from that, and use them for router states, and inside components
  //
  // I will use this controller for setting demo variables

  angular.module( 'ui.engineering' ).controller( 'AppController', AppController );

  function AppController( $log ) {
    var vm = this;

    vm.$onInit = $onInit;
    vm.setAspectRatio = setAspectRatio;


    function $onInit() {
      $log.info( 'AppController', vm );

      vm.demos = ['fluid-svg', 'configurable-svg'];
      // Set initial demo
      vm.demo = vm.demos[1];

      // Set initial width and height
      vm.width = 12;
      vm.height = 12;

      // List of known aspect ratios
      vm.commonAspectRatios = [
        {
          value:'21:9',
          label: 'Cinema'
        },
        {
          value: '16:9',
          label: 'Modern monitor'
        },
        {
          value:'4:3',
          label: 'Old monitor'
        }
      ];
    }

    function setAspectRatio( aspectRatio ) {
      var items = aspectRatio.split( ':' );
      vm.width = parseInt( items[0] );
      vm.height = parseInt( items[1] );
    }
  }
} )();
