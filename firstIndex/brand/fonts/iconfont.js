;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-share" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M152.953066 419.605683c-48.864918 0-88.457658 41.352827-88.457658 92.405573 0 51.030234 39.59274 92.38306 88.457658 92.38306 48.863894 0 88.479147-41.352827 88.479147-92.38306C241.432213 460.957487 201.81696 419.605683 152.953066 419.605683zM526.499737 419.605683c-48.864918 0-88.456634 41.352827-88.456634 92.405573 0 51.030234 39.591717 92.38306 88.456634 92.38306 48.863894 0 88.48017-41.352827 88.48017-92.38306C614.979908 460.957487 575.363631 419.605683 526.499737 419.605683zM900.046409 419.605683c-48.864918 0-88.456634 41.352827-88.456634 92.405573 0 51.030234 39.591717 92.38306 88.456634 92.38306 48.865941 0 88.48017-41.352827 88.48017-92.38306C988.526579 460.957487 948.912349 419.605683 900.046409 419.605683z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M928.930761 209.035874c-6.482645-7.765871-16.08228-12.266371-26.206872-12.266371L318.779324 196.769502c-18.8493 0-34.132378 15.283078-34.132378 34.132378s15.283078 34.132378 34.132378 34.132378l543.021527 0-43.965328 240.974283-518.791683 65.435315L223.449141 184.154183c-2.191922-11.266601-9.891278-20.649296-20.490683-25.032116l-94.071516-38.764885c-17.415648-7.166213-37.390585 1.116427-44.564985 18.565844-7.182586 17.415648 1.124614 37.382399 18.549471 44.564985l77.096912 31.765471 99.93813 512.014326c3.125177 16.033162 17.165961 27.598568 33.498952 27.598568l536.529673 0c18.8493 0 34.132378-15.283078 34.132378-34.132378s-15.283078-34.132378-34.132378-34.132378L321.520761 686.60162l-9.369392-48.00227 539.049053-67.99358c14.766308-1.866511 26.632567-13.08297 29.299303-27.732621l55.797817-305.838593C938.122097 227.068576 935.422615 216.819141 928.930761 209.035874z"  ></path>'+
      ''+
      '<path d="M758.267846 799.170418c-28.28316 0-51.208289 22.922059-51.208289 51.198056 0 28.275997 22.925129 51.198056 51.208289 51.198056 28.261671 0 51.187823-22.922059 51.187823-51.198056C809.455669 822.092477 786.529517 799.170418 758.267846 799.170418z"  ></path>'+
      ''+
      '<path d="M397.200394 850.368474m-51.198056 0a50.032 50.032 0 1 0 102.396111 0 50.032 50.032 0 1 0-102.396111 0Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fenxiang" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M863.13 1021.765 147.622 1021.765c-79.021 0-143.084-64.064-143.084-143.114L4.538 163.141c0-79.02 66.439-159.777 145.459-159.777l400.098 0 0 72.73L149.997 76.094c-39.51 0-72.745 33.234-72.745 72.745L76.064 878.65c0 39.54 32.047 71.556 71.557 71.556l729.826-1.187c39.511 0 72.746-33.235 72.746-72.745L950.193 476.176l72.744 0 0 400.098C1022.938 955.295 942.15 1021.765 863.13 1021.765zM986.564 330.702c-20.653 0.031-36.402-16.694-36.371-36.372l-1.098-173.805L395.619 648.443c-14.531 13.831-38.048 13.831-52.579 0-14.5-13.86-14.5-36.281 0-50.142L891.795 74.921l-159.838 1.173c-20.652 0.045-36.402-16.694-36.372-36.373 0.03-19.679 15.72-36.342 36.372-36.357l253.785 0c20.654-0.046 37.195 15.765 37.195 35.428L1022.937 294.33C1022.907 314.008 1007.188 330.671 986.564 330.702z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-leftarrow" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M742.15896 181.604104 411.902234 511.86083l334.575078 334.575078-0.016373 0.019443c10.934027 11.337209 17.672498 26.746154 17.672498 43.742247 0 34.814923-28.221762 63.034639-63.032592 63.034639-16.996093 0-32.409131-6.740518-43.745317-17.674545l-0.01842 0.019443L279.136441 557.37749l0.01842-0.019443c-11.885701-11.464099-19.288299-27.541263-19.288299-45.360094 0-0.046049 0.004093-0.092098 0.004093-0.137123 0-0.049119-0.004093-0.095167-0.004093-0.141216 0-17.818831 7.402597-33.895995 19.288299-45.360094l-0.01842-0.019443L657.336086 88.140433l0.162706 0.163729c11.320836-10.855232 26.676569-17.537422 43.602054-17.537422 34.81083 0 63.032592 28.218692 63.032592 63.031569C764.132414 152.919808 755.605204 170.044838 742.15896 181.604104z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-kefu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M190.591634 960.526793c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-69.493701 82.050731-119.721821 226.370569-139.847472l0-9.63279c-97.876029-74.998152-97.876029-213.985554-97.876029-298.616496 0-139.675458 82.222745-223.102301 219.834033-223.102301l7.396607 0c137.611288 0 219.834033 83.426844 219.834033 223.102301 0 10.320847-0.172014 20.641693-0.344028 31.306568-0.516042 17.717453-14.965228 31.650596-32.854695 31.134554-17.717453-0.516042-31.650596-15.137242-31.134554-32.854695 0.344028-9.976818 0.344028-19.781623 0.344028-29.586427 0-105.616664-52.464304-159.113052-155.844784-159.113052l-7.396607 0c-103.38048 0-155.844784 53.496388-155.844784 159.113052 0 102.176382 6.364522 206.244919 83.082815 255.096926 9.288762 5.84848 14.793214 15.997312 14.793214 27.006215L448.956828 817.067025c0 16.341341-12.385016 30.102469-28.554342 31.82261-128.494541 13.589115-197.816227 51.260205-197.816227 79.642533C222.586259 946.077608 208.137074 960.526793 190.591634 960.526793z"  ></path>'+
      ''+
      '<path d="M833.752394 960.526793c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-28.554342-69.321687-66.053418-197.816227-79.642533-16.341341-1.720141-28.726356-15.48127-28.726356-31.82261l0-54.700487c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 26.318159c144.319839 19.953637 226.370569 70.353771 226.370569 139.847472C865.747018 946.077608 851.469847 960.526793 833.752394 960.526793z"  ></path>'+
      ''+
      '<path d="M612.198219 673.435243c-44.035612 0-76.890307-4.472367-77.750378-4.644381-15.825298-4.816395-25.286074-20.813707-21.845792-37.155048 3.268268-16.169326 18.40551-26.834201 34.918864-25.286074 79.814547 8.77272 201.600538 1.204099 222.930287-43.175542 7.568621-15.825298 26.662187-22.705863 42.659499-14.965228 15.997312 7.568621 22.705863 26.834201 14.965228 42.659499C794.705191 660.36217 687.368386 673.435243 612.198219 673.435243z"  ></path>'+
      ''+
      '<path d="M896.021502 639.892491c-17.717453 0-31.994625-14.277171-31.994625-31.994625l0-111.809172-42.831514-15.309256c-12.729044-4.472367-21.32975-16.685369-21.32975-30.102469 0-160.489165-129.182597-291.219889-287.951621-291.219889-158.769024 0-287.951621 130.730724-287.951621 291.219889 0 10.320847-4.988409 19.953637-13.417101 25.974131l-18.577524 13.245087 0 118.00168c0 17.717453-14.277171 31.994625-31.994625 31.994625s-31.994625-14.277171-31.994625-31.994625l0-134.34302c0-10.320847 4.988409-19.953637 13.417101-25.974131l18.921552-13.589115C169.089871 245.980178 323.386528 95.639845 511.913993 95.639845c186.463296 0 339.555854 147.072065 351.252814 332.331262l43.51957 15.48127c12.729044 4.472367 21.32975 16.685369 21.32975 30.102469l0 134.34302C928.016126 625.61532 913.738955 639.892491 896.021502 639.892491z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-iconzhenghe69" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M513.29024 928.333824l-0.023552 0c-16.083968 0-31.468544-6.872064-42.210304-18.852864-3.391488-3.786752-338.204672-377.704448-342.64576-383.05792l-0.116736-0.142336C88.766464 478.04416 66.998272 417.882112 66.998272 356.877312c0-148.06016 122.60352-268.516352 273.303552-268.516352 63.888384 0 124.18048 21.1968 172.635136 60.214272C561.393664 109.55776 621.686784 88.36096 685.574144 88.36096c150.699008 0 273.301504 120.456192 273.301504 268.516352 0 60.993536-21.434368 120.738816-60.35456 168.229888l-0.841728 0.984064L555.5456 909.392896C544.787456 921.434112 529.388544 928.333824 513.29024 928.333824zM175.576064 487.047168c9.911296 11.334656 249.984 279.524352 337.680384 377.459712l338.14016-378.8288c29.693952-36.458496 46.040064-82.173952 46.040064-128.800768 0-114.182144-95.040512-207.076352-211.861504-207.076352-57.428992 0-111.034368 21.92384-150.940672 61.732864l-21.696512 21.643264-21.695488-21.644288c-39.90528-39.808-93.508608-61.73184-150.938624-61.73184-116.822016 0-211.863552 92.894208-211.863552 207.076352C128.438272 403.59936 145.175552 449.813504 175.576064 487.047168z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)