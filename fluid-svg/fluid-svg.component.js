( function() {
  'use strict';

  var fluidSvg = {
    bindings: {},
    controller: controller,
    controllerAs: 'vm',
    template: '<div class="container"></div>'
  };

  angular.module( 'ui.engineering' ).component( 'fluidSvg', fluidSvg );


  function controller( $element, $log ) {
    var vm = this;

    vm.$onInit = $onInit;


    function $onInit() {
      $log.info( 'fluidSvg', fluidSvg );

      visualizationSetup();
      demoAddRect();
    }

    function demoAddRect() {
      vm.svg.append( 'rect' )
        .classed( 'little-rect', true )
        .attr( 'x', 100 )
        .attr( 'y', 100 )
        .attr( 'width', 500 )
        .attr( 'height', 500 )
    }

    function visualizationSetup() {
      vm.container = $element[0].querySelector( '.container' );

      vm.svg = d3.select( vm.container )
        .append( 'svg' )
        .attr( 'viewBox', '0 0 3440 1440' );
    }
  }
} )();
