    //Make sure jQuery has been loaded before app.js
    if (typeof jQuery === "undefined") {
      throw new Error("AdminLTE requires jQuery");
    }
    /* ------------------
     * - Custom Plugins -
     * ------------------
     * All AdminLTE custom Jquery plugins are defined below.
     */

    /*
     * BOX REFRESH BUTTON
     * ------------------
     * This is a custom plugin to use with the component BOX. It allows you to add
     * a refresh button to the box. It converts the box's state to a loading state.
     *
     * @type plugin
     * @usage $("#box-widget").boxRefresh( options );
     */
    (function ($) {

      "use strict";

      $.fn.boxRefresh = function (options) {

        // Render options
        var settings = $.extend({
          //Refresh button selector
          trigger: ".refresh-btn",
          //File source to be loaded (e.g: ajax/src.php)
          source: "",
          //Callbacks
          onLoadStart: function (box) {
            return box;
          }, //Right after the button has been clicked
          onLoadDone: function (box) {
            return box;
          } //When the source has been loaded

        }, options);

        //The overlay
        var overlay = $('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');

        return this.each(function () {
          //if a source is specified
          if (settings.source === "") {
            if (window.console) {
              window.console.log("Please specify a source first - boxRefresh()");
            }
            return;
          }
          //the box
          var box = $(this);
          //the button
          var rBtn = box.find(settings.trigger).first();

          //On trigger click
          rBtn.on('click', function (e) {
            e.preventDefault();
            //Add loading overlay
            start(box);

            //Perform ajax call
            box.find(".box-body").load(settings.source, function () {
              done(box);
            });
          });
        });

        function start(box) {
          //Add overlay and loading img
          box.append(overlay);

          settings.onLoadStart.call(box);
        }

        function done(box) {
          //Remove overlay and loading img
          box.find(overlay).remove();

          settings.onLoadDone.call(box);
        }

      };

    })(jQuery);
    /*
     * EXPLICIT BOX ACTIVATION
     * -----------------------
     * This is a custom plugin to use with the component BOX. It allows you to activate
     * a box inserted in the DOM after the app.js was loaded.
     *
     * @type plugin
     * @usage $("#box-widget").activateBox();
     */
    (function ($) {

      'use strict';

      $.fn.activateBox = function () {
        $.AdminLTE.boxWidget.activate(this);
      };

    })(jQuery);    

    /*
     * TODO LIST CUSTOM PLUGIN
     * -----------------------
     * This plugin depends on iCheck plugin for checkbox and radio inputs
     *
     * @type plugin
     * @usage $("#todo-widget").todolist( options );
     */
     console.log("adminLTE-lib");
    (function ($) {

      'use strict';

      $.fn.todolist = function (options) {
        // Render options
        var settings = $.extend({
          //When the user checks the input
          onCheck: function (ele) {
            return ele;
          },
          //When the user unchecks the input
          onUncheck: function (ele) {
            return ele;
          }
        }, options);

        return this.each(function () {

          if (typeof $.fn.iCheck != 'undefined') {
            $('input', this).on('ifChecked', function () {
              var ele = $(this).parents("li").first();
              ele.toggleClass("done");
              settings.onCheck.call(ele);
            });

            $('input', this).on('ifUnchecked', function () {
              var ele = $(this).parents("li").first();
              ele.toggleClass("done");
              settings.onUncheck.call(ele);
            });
          } else {
            $('input', this).on('change', function () {
              var ele = $(this).parents("li").first();
              ele.toggleClass("done");
              if ($('input', ele).is(":checked")) {
                settings.onCheck.call(ele);
              } else {
                settings.onUncheck.call(ele);
              }
            });
          }
        });
      };
    }(jQuery));