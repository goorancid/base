Meteor.startup(function(){

      Template.mapBox.onRendered(function () {
        //jvectormap data
        var visitorsData = {
          "US": 398, //USA
          "SA": 400, //Saudi Arabia
          "CA": 1000, //Canada
          "DE": 500, //Germany
          "FR": 760, //France
          "CN": 300, //China
          "AU": 700, //Australia
          "BR": 600, //Brazil
          "IN": 800, //India
          "GB": 320, //Great Britain
          "RU": 3000 //Russia
        };
        //World map by jvectormap
        $('#world-map').vectorMap({
          map: 'world_mill_en',
          backgroundColor: "transparent",
          regionStyle: {
            initial: {
              fill: '#e4e4e4',
              "fill-opacity": 1,
              stroke: 'none',
              "stroke-width": 0,
              "stroke-opacity": 1
            }
          },
          series: {
            regions: [{
                values: visitorsData,
                scale: ["#92c1dc", "#ebf4f9"],
                normalizeFunction: 'polynomial'
              }]
          },
          onRegionLabelShow: function (e, el, code) {
            if (typeof visitorsData[code] != "undefined")
              el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
          }
        });

        //Sparkline charts
        var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
        $('#sparkline-1').sparkline(myvalues, {
          type: 'line',
          lineColor: '#92c1dc',
          fillColor: "#ebf4f9",
          height: '50',
          width: '80'
        });
        myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
        $('#sparkline-2').sparkline(myvalues, {
          type: 'line',
          lineColor: '#92c1dc',
          fillColor: "#ebf4f9",
          height: '50',
          width: '80'
        });
        myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
        $('#sparkline-3').sparkline(myvalues, {
          type: 'line',
          lineColor: '#92c1dc',
          fillColor: "#ebf4f9",
          height: '50',
          width: '80'
        });

        //date range picker
        $('.daterange').daterangepicker({
          ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          },
          startDate: moment().subtract(29, 'days'),
          endDate: moment()
        }, function (start, end) {
          window.alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        });

      });

      Template.chat.onRendered(function(){
        //SLIMSCROLL FOR CHAT WIDGET
        $('#chat-box').slimScroll({
        height: '250px'
        });
      });

      Template.calendar.onRendered(function(){
        //The Calender
        $("#calendar").datepicker();
      });

      Template.todoList.onRendered(function(){
        /* The todo list plugin */
        $(".todo-list").todolist({
          onCheck: function (ele) {
            window.console.log("The element has been checked");
            return ele;
          },
          onUncheck: function (ele) {
            window.console.log("The element has been unchecked");
            return ele;
          }
        });

        //jQuery UI sortable for the todo list
        $(".todo-list").sortable({
          placeholder: "sort-highlight",
          handle: ".handle",
          forcePlaceholderSize: true,
          zIndex: 999999
        });
      });

      Template.adminLayout.onRendered(function(){
        //Make the dashboard widgets sortable Using jquery UI
        $(".connectedSortable").sortable({
          placeholder: "sort-highlight",
          connectWith: ".connectedSortable",
          handle: ".box-header, .nav-tabs",
          forcePlaceholderSize: true,
          zIndex: 999999
        });
        $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");
      });

      Template.quickEmail.onRendered(function(){
        //bootstrap WYSIHTML5 - text editor
        $(".textarea").wysihtml5();
      });

      Template.customTabs.onRendered(function () {
        /* Morris.js Charts */
        // Sales chart
        var area = new Morris.Area({
          element: 'revenue-chart',
          resize: true,
          data: [
            {y: '2011 Q1', item1: 2666, item2: 2666},
            {y: '2011 Q2', item1: 2778, item2: 2294},
            {y: '2011 Q3', item1: 4912, item2: 1969},
            {y: '2011 Q4', item1: 3767, item2: 3597},
            {y: '2012 Q1', item1: 6810, item2: 1914},
            {y: '2012 Q2', item1: 5670, item2: 4293},
            {y: '2012 Q3', item1: 4820, item2: 3795},
            {y: '2012 Q4', item1: 15073, item2: 5967},
            {y: '2013 Q1', item1: 10687, item2: 4460},
            {y: '2013 Q2', item1: 8432, item2: 5713}
          ],
          xkey: 'y',
          ykeys: ['item1', 'item2'],
          labels: ['Item 1', 'Item 2'],
          lineColors: ['#a0d0e0', '#3c8dbc'],
          hideHover: 'auto'
        });
        var line = new Morris.Line({
          element: 'line-chart',
          resize: true,
          data: [
            {y: '2011 Q1', item1: 2666},
            {y: '2011 Q2', item1: 2778},
            {y: '2011 Q3', item1: 4912},
            {y: '2011 Q4', item1: 3767},
            {y: '2012 Q1', item1: 6810},
            {y: '2012 Q2', item1: 5670},
            {y: '2012 Q3', item1: 4820},
            {y: '2012 Q4', item1: 15073},
            {y: '2013 Q1', item1: 10687},
            {y: '2013 Q2', item1: 8432}
          ],
          xkey: 'y',
          ykeys: ['item1'],
          labels: ['Item 1'],
          lineColors: ['#efefef'],
          lineWidth: 2,
          hideHover: 'auto',
          gridTextColor: "#fff",
          gridStrokeWidth: 0.4,
          pointSize: 4,
          pointStrokeColors: ["#efefef"],
          gridLineColor: "#efefef",
          gridTextFamily: "Open Sans",
          gridTextSize: 10
        });

        //Donut Chart
        var donut = new Morris.Donut({
          element: 'sales-chart',
          resize: true,
          colors: ["#3c8dbc", "#f56954", "#00a65a"],
          data: [
            {label: "Download Sales", value: 12},
            {label: "In-Store Sales", value: 30},
            {label: "Mail-Order Sales", value: 20}
          ],
          hideHover: 'auto'
        });

        //Fix for charts under tabs
        $('.box ul.nav a').on('shown.bs.tab', function () {
          area.redraw();
          donut.redraw();
          line.redraw();
        });
        //######### End Morris ##################
      });

      Template.solidGraph.onRendered(function () {
        /* jQueryKnob */
        $(".knob").knob();
      });

      Template.visitorPanel.onRendered(function() {
        /* jVector Maps
         * ------------
         * Create a world map with markers
         */
        $('#world-map-markers').vectorMap({
          map: 'world_mill_en',
          normalizeFunction: 'polynomial',
          hoverOpacity: 0.7,
          hoverColor: false,
          backgroundColor: 'transparent',
          regionStyle: {
            initial: {
              fill: 'rgba(210, 214, 222, 1)',
              "fill-opacity": 1,
              stroke: 'none',
              "stroke-width": 0,
              "stroke-opacity": 1
            },
            hover: {
              "fill-opacity": 0.7,
              cursor: 'pointer'
            },
            selected: {
              fill: 'yellow'
            },
            selectedHover: {
            }
          },
          markerStyle: {
            initial: {
              fill: '#00a65a',
              stroke: '#111'
            }
          },
          markers: [
            {latLng: [41.90, 12.45], name: 'Vatican City'},
            {latLng: [43.73, 7.41], name: 'Monaco'},
            {latLng: [-0.52, 166.93], name: 'Nauru'},
            {latLng: [-8.51, 179.21], name: 'Tuvalu'},
            {latLng: [43.93, 12.46], name: 'San Marino'},
            {latLng: [47.14, 9.52], name: 'Liechtenstein'},
            {latLng: [7.11, 171.06], name: 'Marshall Islands'},
            {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
            {latLng: [3.2, 73.22], name: 'Maldives'},
            {latLng: [35.88, 14.5], name: 'Malta'},
            {latLng: [12.05, -61.75], name: 'Grenada'},
            {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
            {latLng: [13.16, -59.55], name: 'Barbados'},
            {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
            {latLng: [-4.61, 55.45], name: 'Seychelles'},
            {latLng: [7.35, 134.46], name: 'Palau'},
            {latLng: [42.5, 1.51], name: 'Andorra'},
            {latLng: [14.01, -60.98], name: 'Saint Lucia'},
            {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
            {latLng: [1.3, 103.8], name: 'Singapore'},
            {latLng: [1.46, 173.03], name: 'Kiribati'},
            {latLng: [-21.13, -175.2], name: 'Tonga'},
            {latLng: [15.3, -61.38], name: 'Dominica'},
            {latLng: [-20.2, 57.5], name: 'Mauritius'},
            {latLng: [26.02, 50.55], name: 'Bahrain'},
            {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
          ]
        });

        /* SPARKLINE CHARTS
         * ----------------
         * Create a inline charts with spark line
         */

        //-----------------
        //- SPARKLINE BAR -
        //-----------------
        $('.sparkbar').each(function () {
          var $this = $(this);
          $this.sparkline('html', {
            type: 'bar',
            height: $this.data('height') ? $this.data('height') : '30',
            barColor: $this.data('color')
          });
        });
      });

      Template.montlyRecapReport.onRendered(function(){
            //-----------------------
            //- MONTHLY SALES CHART -
            //-----------------------

            // Get context with jQuery - using jQuery's .get() method.
            var salesChartCanvas = $("#salesChart").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            var salesChart = new Chart(salesChartCanvas);

            var salesChartData = {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                {
                  label: "Electronics",
                  fillColor: "rgb(210, 214, 222)",
                  strokeColor: "rgb(210, 214, 222)",
                  pointColor: "rgb(210, 214, 222)",
                  pointStrokeColor: "#c1c7d1",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgb(220,220,220)",
                  data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                  label: "Digital Goods",
                  fillColor: "rgba(60,141,188,0.9)",
                  strokeColor: "rgba(60,141,188,0.8)",
                  pointColor: "#3b8bba",
                  pointStrokeColor: "rgba(60,141,188,1)",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(60,141,188,1)",
                  data: [28, 48, 40, 19, 86, 27, 90]
                }
              ]
            };

            var salesChartOptions = {
              //Boolean - If we should show the scale at all
              showScale: true,
              //Boolean - Whether grid lines are shown across the chart
              scaleShowGridLines: false,
              //String - Colour of the grid lines
              scaleGridLineColor: "rgba(0,0,0,.05)",
              //Number - Width of the grid lines
              scaleGridLineWidth: 1,
              //Boolean - Whether to show horizontal lines (except X axis)
              scaleShowHorizontalLines: true,
              //Boolean - Whether to show vertical lines (except Y axis)
              scaleShowVerticalLines: true,
              //Boolean - Whether the line is curved between points
              bezierCurve: true,
              //Number - Tension of the bezier curve between points
              bezierCurveTension: 0.3,
              //Boolean - Whether to show a dot for each point
              pointDot: false,
              //Number - Radius of each point dot in pixels
              pointDotRadius: 4,
              //Number - Pixel width of point dot stroke
              pointDotStrokeWidth: 1,
              //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
              pointHitDetectionRadius: 20,
              //Boolean - Whether to show a stroke for datasets
              datasetStroke: true,
              //Number - Pixel width of dataset stroke
              datasetStrokeWidth: 2,
              //Boolean - Whether to fill the dataset with a color
              datasetFill: true,
              //String - A legend template
              legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",
              //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
              maintainAspectRatio: true,
              //Boolean - whether to make the chart responsive to window resizing
              responsive: true
            };

            //Create the line chart
            salesChart.Line(salesChartData, salesChartOptions);
      });

      Template.browerUsagePieChart.onRendered(function(){
           //-------------
            //- PIE CHART -
            //-------------
            // Get context with jQuery - using jQuery's .get() method.
            var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
            var pieChart = new Chart(pieChartCanvas);
            var PieData = [
              {
                value: 700,
                color: "#f56954",
                highlight: "#f56954",
                label: "Chrome"
              },
              {
                value: 500,
                color: "#00a65a",
                highlight: "#00a65a",
                label: "IE"
              },
              {
                value: 400,
                color: "#f39c12",
                highlight: "#f39c12",
                label: "FireFox"
              },
              {
                value: 600,
                color: "#00c0ef",
                highlight: "#00c0ef",
                label: "Safari"
              },
              {
                value: 300,
                color: "#3c8dbc",
                highlight: "#3c8dbc",
                label: "Opera"
              },
              {
                value: 100,
                color: "#d2d6de",
                highlight: "#d2d6de",
                label: "Navigator"
              }
            ];
            var pieOptions = {
              //Boolean - Whether we should show a stroke on each segment
              segmentShowStroke: true,
              //String - The colour of each segment stroke
              segmentStrokeColor: "#fff",
              //Number - The width of each segment stroke
              segmentStrokeWidth: 1,
              //Number - The percentage of the chart that we cut out of the middle
              percentageInnerCutout: 50, // This is 0 for Pie charts
              //Number - Amount of animation steps
              animationSteps: 100,
              //String - Animation easing effect
              animationEasing: "easeOutBounce",
              //Boolean - Whether we animate the rotation of the Doughnut
              animateRotate: true,
              //Boolean - Whether we animate scaling the Doughnut from the centre
              animateScale: false,
              //Boolean - whether to make the chart responsive to window resizing
              responsive: true,
              // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
              maintainAspectRatio: false,
              //String - A legend template
              legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
              //String - A tooltip template
              tooltipTemplate: "<%=value %> <%=label%> users"
            };
            //Create pie or douhnut chart
            // You can switch between pie and douhnut using the method below.
            pieChart.Doughnut(PieData, pieOptions);
      });

      Template.slidersPage.onRendered(function(){
       /* BOOTSTRAP SLIDER */
        $('.slider').slider();

        /* ION SLIDER */
        $("#range_1").ionRangeSlider({
          min: 0,
          max: 5000,
          from: 1000,
          to: 4000,
          type: 'double',
          step: 1,
          prefix: "$",
          prettify: false,
          hasGrid: true
        });
        $("#range_2").ionRangeSlider();

        $("#range_5").ionRangeSlider({
          min: 0,
          max: 10,
          type: 'single',
          step: 0.1,
          postfix: " mm",
          prettify: false,
          hasGrid: true
        });
        $("#range_6").ionRangeSlider({
          min: -50,
          max: 50,
          from: 0,
          type: 'single',
          step: 1,
          postfix: "°",
          prettify: false,
          hasGrid: true
        });

        $("#range_4").ionRangeSlider({
          type: "single",
          step: 100,
          postfix: " light years",
          from: 55000,
          hideMinMax: true,
          hideFromTo: false
        });
        $("#range_3").ionRangeSlider({
          type: "double",
          postfix: " miles",
          step: 10000,
          from: 25000000,
          to: 35000000,
          onChange: function (obj) {
            var t = "";
            for (var prop in obj) {
              t += prop + ": " + obj[prop] + "\r\n";
            }
            $("#result").html(t);
          },
          onLoad: function (obj) {
            //
          }
        });

      });

      Template.composePage.onRendered(function(){
        $("#compose-textarea").wysihtml5();
      });

      Template.mailboxPage.onRendered(function(){
          $(function () {
            //Enable iCheck plugin for checkboxes
            //iCheck for checkbox and radio inputs
            $('.mailbox-messages input[type="checkbox"]').iCheck({
              checkboxClass: 'icheckbox_flat-blue',
              radioClass: 'iradio_flat-blue'
            });

            //Enable check and uncheck all functionality
            $(".checkbox-toggle").click(function () {
              var clicks = $(this).data('clicks');
              if (clicks) {
                //Uncheck all checkboxes
                $(".mailbox-messages input[type='checkbox']").iCheck("uncheck");
                $(".fa", this).removeClass("fa-check-square-o").addClass('fa-square-o');
              } else {
                //Check all checkboxes
                $(".mailbox-messages input[type='checkbox']").iCheck("check");
                $(".fa", this).removeClass("fa-square-o").addClass('fa-check-square-o');
              }
              $(this).data("clicks", !clicks);
            });

            //Handle starring for glyphicon and font awesome
            $(".mailbox-star").click(function (e) {
              e.preventDefault();
              //detect type
              var $this = $(this).find("a > i");
              var glyph = $this.hasClass("glyphicon");
              var fa = $this.hasClass("fa");

              //Switch states
              if (glyph) {
                $this.toggleClass("glyphicon-star");
                $this.toggleClass("glyphicon-star-empty");
              }

              if (fa) {
                $this.toggleClass("fa-star");
                $this.toggleClass("fa-star-o");
              }
            });
          });  
      });

      Template.dataTablesPage.onRendered(function(){
        $("#example1").DataTable();
        $('#example2').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": false,
          "ordering": true,
          "info": true,
          "autoWidth": false
        });
      });

      Template.calendarPage.onRendered(function(){
            /* initialize the external events
             -----------------------------------------------------------------*/
            function ini_events(ele) {
              ele.each(function () {

                // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
                // it doesn't need to have a start or end
                var eventObject = {
                  title: $.trim($(this).text()) // use the element's text as the event title
                };

                // store the Event Object in the DOM element so we can get to it later
                $(this).data('eventObject', eventObject);

                // make the event draggable using jQuery UI
                $(this).draggable({
                  zIndex: 1070,
                  revert: true, // will cause the event to go back to its
                  revertDuration: 0  //  original position after the drag
                });

              });
            }
            ini_events($('#external-events div.external-event'));

            /* initialize the calendar
             -----------------------------------------------------------------*/
            //Date for the calendar events (dummy data)
            var date = new Date();
            var d = date.getDate(),
                    m = date.getMonth(),
                    y = date.getFullYear();
            $('#calendar').fullCalendar({
              header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
              },
              buttonText: {
                today: 'today',
                month: 'month',
                week: 'week',
                day: 'day'
              },
              //Random default events
              events: [
                {
                  title: 'All Day Event',
                  start: new Date(y, m, 1),
                  backgroundColor: "#f56954", //red
                  borderColor: "#f56954" //red
                },
                {
                  title: 'Long Event',
                  start: new Date(y, m, d - 5),
                  end: new Date(y, m, d - 2),
                  backgroundColor: "#f39c12", //yellow
                  borderColor: "#f39c12" //yellow
                },
                {
                  title: 'Meeting',
                  start: new Date(y, m, d, 10, 30),
                  allDay: false,
                  backgroundColor: "#0073b7", //Blue
                  borderColor: "#0073b7" //Blue
                },
                {
                  title: 'Lunch',
                  start: new Date(y, m, d, 12, 0),
                  end: new Date(y, m, d, 14, 0),
                  allDay: false,
                  backgroundColor: "#00c0ef", //Info (aqua)
                  borderColor: "#00c0ef" //Info (aqua)
                },
                {
                  title: 'Birthday Party',
                  start: new Date(y, m, d + 1, 19, 0),
                  end: new Date(y, m, d + 1, 22, 30),
                  allDay: false,
                  backgroundColor: "#00a65a", //Success (green)
                  borderColor: "#00a65a" //Success (green)
                },
                {
                  title: 'Click for Google',
                  start: new Date(y, m, 28),
                  end: new Date(y, m, 29),
                  url: 'http://google.com/',
                  backgroundColor: "#3c8dbc", //Primary (light-blue)
                  borderColor: "#3c8dbc" //Primary (light-blue)
                }
              ],
              editable: true,
              droppable: true, // this allows things to be dropped onto the calendar !!!
              drop: function (date, allDay) { // this function is called when something is dropped

                // retrieve the dropped element's stored Event Object
                var originalEventObject = $(this).data('eventObject');

                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = $.extend({}, originalEventObject);

                // assign it the date that was reported
                copiedEventObject.start = date;
                copiedEventObject.allDay = allDay;
                copiedEventObject.backgroundColor = $(this).css("background-color");
                copiedEventObject.borderColor = $(this).css("border-color");

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                  // if so, remove the element from the "Draggable Events" list
                  $(this).remove();
                }

              }
            });

            /* ADDING EVENTS */
            var currColor = "#3c8dbc"; //Red by default
            //Color chooser button
            var colorChooser = $("#color-chooser-btn");
            $("#color-chooser > li > a").click(function (e) {
              e.preventDefault();
              //Save color
              currColor = $(this).css("color");
              //Add color effect to button
              $('#add-new-event').css({"background-color": currColor, "border-color": currColor});
            });
            $("#add-new-event").click(function (e) {
              e.preventDefault();
              //Get value and make sure it is not null
              var val = $("#new-event").val();
              if (val.length == 0) {
                return;
              }

              //Create events
              var event = $("<div />");
              event.css({"background-color": currColor, "border-color": currColor, "color": "#fff"}).addClass("external-event");
              event.html(val);
              $('#external-events').prepend(event);

              //Add draggable funtionality
              ini_events(event);

              //Remove event from text input
              $("#new-event").val("");
            });
      }); // Template.calendarPage.onRendered

      Template.chartjsPage.onRendered(function(){
          /* ChartJS
           * -------
           * Here we will create a few charts using ChartJS
           */

          //--------------
          //- AREA CHART -
          //--------------

          // Get context with jQuery - using jQuery's .get() method.
          var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
          // This will get the first returned node in the jQuery collection.
          var areaChart = new Chart(areaChartCanvas);

          var areaChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                label: "Electronics",
                fillColor: "rgba(210, 214, 222, 1)",
                strokeColor: "rgba(210, 214, 222, 1)",
                pointColor: "rgba(210, 214, 222, 1)",
                pointStrokeColor: "#c1c7d1",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
              },
              {
                label: "Digital Goods",
                fillColor: "rgba(60,141,188,0.9)",
                strokeColor: "rgba(60,141,188,0.8)",
                pointColor: "#3b8bba",
                pointStrokeColor: "rgba(60,141,188,1)",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(60,141,188,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
              }
            ]
          };

          var areaChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: "rgba(0,0,0,.05)",
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: true,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
          };

          //Create the line chart
          areaChart.Line(areaChartData, areaChartOptions);

          //-------------
          //- LINE CHART -
          //--------------
          var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
          var lineChart = new Chart(lineChartCanvas);
          var lineChartOptions = areaChartOptions;
          lineChartOptions.datasetFill = false;
          lineChart.Line(areaChartData, lineChartOptions);

          //-------------
          //- PIE CHART -
          //-------------
          // Get context with jQuery - using jQuery's .get() method.
          var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
          var pieChart = new Chart(pieChartCanvas);
          var PieData = [
            {
              value: 700,
              color: "#f56954",
              highlight: "#f56954",
              label: "Chrome"
            },
            {
              value: 500,
              color: "#00a65a",
              highlight: "#00a65a",
              label: "IE"
            },
            {
              value: 400,
              color: "#f39c12",
              highlight: "#f39c12",
              label: "FireFox"
            },
            {
              value: 600,
              color: "#00c0ef",
              highlight: "#00c0ef",
              label: "Safari"
            },
            {
              value: 300,
              color: "#3c8dbc",
              highlight: "#3c8dbc",
              label: "Opera"
            },
            {
              value: 100,
              color: "#d2d6de",
              highlight: "#d2d6de",
              label: "Navigator"
            }
          ];
          var pieOptions = {
            //Boolean - Whether we should show a stroke on each segment
            segmentShowStroke: true,
            //String - The colour of each segment stroke
            segmentStrokeColor: "#fff",
            //Number - The width of each segment stroke
            segmentStrokeWidth: 2,
            //Number - The percentage of the chart that we cut out of the middle
            percentageInnerCutout: 50, // This is 0 for Pie charts
            //Number - Amount of animation steps
            animationSteps: 100,
            //String - Animation easing effect
            animationEasing: "easeOutBounce",
            //Boolean - Whether we animate the rotation of the Doughnut
            animateRotate: true,
            //Boolean - Whether we animate scaling the Doughnut from the centre
            animateScale: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true,
            // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: true,
            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
          };
          //Create pie or douhnut chart
          // You can switch between pie and douhnut using the method below.
          pieChart.Doughnut(PieData, pieOptions);

          //-------------
          //- BAR CHART -
          //-------------
          var barChartCanvas = $("#barChart").get(0).getContext("2d");
          var barChart = new Chart(barChartCanvas);
          var barChartData = areaChartData;
          barChartData.datasets[1].fillColor = "#00a65a";
          barChartData.datasets[1].strokeColor = "#00a65a";
          barChartData.datasets[1].pointColor = "#00a65a";
          var barChartOptions = {
            //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
            scaleBeginAtZero: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: true,
            //String - Colour of the grid lines
            scaleGridLineColor: "rgba(0,0,0,.05)",
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - If there is a stroke on each bar
            barShowStroke: true,
            //Number - Pixel width of the bar stroke
            barStrokeWidth: 2,
            //Number - Spacing between each of the X value sets
            barValueSpacing: 5,
            //Number - Spacing between data sets within X values
            barDatasetSpacing: 1,
            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
            //Boolean - whether to make the chart responsive
            responsive: true,
            maintainAspectRatio: true
          };

          barChartOptions.datasetFill = false;
          barChart.Bar(barChartData, barChartOptions);
      });

      Template.flotPage.onRendered(function(){
          $(function () {
            /*
             * Flot Interactive Chart
             * -----------------------
             */
            // We use an inline data source in the example, usually data would
            // be fetched from a server
            console.log("flot page")
            var data = [], totalPoints = 100;
            function getRandomData() {

              if (data.length > 0)
                data = data.slice(1);

              // Do a random walk
              while (data.length < totalPoints) {

                var prev = data.length > 0 ? data[data.length - 1] : 50,
                        y = prev + Math.random() * 10 - 5;

                if (y < 0) {
                  y = 0;
                } else if (y > 100) {
                  y = 100;
                }

                data.push(y);
              }

              // Zip the generated y values with the x values
              var res = [];
              for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]]);
              }

              return res;
            }

            var interactive_plot = $.plot("#interactive", [getRandomData()], {
              grid: {
                borderColor: "#f3f3f3",
                borderWidth: 1,
                tickColor: "#f3f3f3"
              },
              series: {
                shadowSize: 0, // Drawing is faster without shadows
                color: "#3c8dbc"
              },
              lines: {
                fill: true, //Converts the line chart to area chart
                color: "#3c8dbc"
              },
              yaxis: {
                min: 0,
                max: 100,
                show: true
              },
              xaxis: {
                show: true
              }
            });

            var updateInterval = 500; //Fetch data ever x milliseconds
            var realtime = "on"; //If == to on then fetch data every x seconds. else stop fetching
            function update() {

              interactive_plot.setData([getRandomData()]);

              // Since the axes don't change, we don't need to call plot.setupGrid()
              interactive_plot.draw();
              if (realtime === "on")
                setTimeout(update, updateInterval);
            }

            //INITIALIZE REALTIME DATA FETCHING
            if (realtime === "on") {
              update();
            }
            //REALTIME TOGGLE
            $("#realtime .btn").click(function () {
              if ($(this).data("toggle") === "on") {
                realtime = "on";
              }
              else {
                realtime = "off";
              }
              update();
            });
            /*
             * END INTERACTIVE CHART
             */


            /*
             * LINE CHART
             * ----------
             */
            //LINE randomly generated data

            var sin = [], cos = [];
            for (var i = 0; i < 14; i += 0.5) {
              sin.push([i, Math.sin(i)]);
              cos.push([i, Math.cos(i)]);
            }
            var line_data1 = {
              data: sin,
              color: "#3c8dbc"
            };
            var line_data2 = {
              data: cos,
              color: "#00c0ef"
            };
            $.plot("#line-chart", [line_data1, line_data2], {
              grid: {
                hoverable: true,
                borderColor: "#f3f3f3",
                borderWidth: 1,
                tickColor: "#f3f3f3"
              },
              series: {
                shadowSize: 0,
                lines: {
                  show: true
                },
                points: {
                  show: true
                }
              },
              lines: {
                fill: false,
                color: ["#3c8dbc", "#f56954"]
              },
              yaxis: {
                show: true,
              },
              xaxis: {
                show: true
              }
            });
            //Initialize tooltip on hover
            $('<div class="tooltip-inner" id="line-chart-tooltip"></div>').css({
              position: "absolute",
              display: "none",
              opacity: 0.8
            }).appendTo("body");
            $("#line-chart").bind("plothover", function (event, pos, item) {

              if (item) {
                var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);

                $("#line-chart-tooltip").html(item.series.label + " of " + x + " = " + y)
                        .css({top: item.pageY + 5, left: item.pageX + 5})
                        .fadeIn(200);
              } else {
                $("#line-chart-tooltip").hide();
              }

            });
            /* END LINE CHART */

            /*
             * FULL WIDTH STATIC AREA CHART
             * -----------------
             */
            var areaData = [[2, 88.0], [3, 93.3], [4, 102.0], [5, 108.5], [6, 115.7], [7, 115.6],
              [8, 124.6], [9, 130.3], [10, 134.3], [11, 141.4], [12, 146.5], [13, 151.7], [14, 159.9],
              [15, 165.4], [16, 167.8], [17, 168.7], [18, 169.5], [19, 168.0]];
            $.plot("#area-chart", [areaData], {
              grid: {
                borderWidth: 0
              },
              series: {
                shadowSize: 0, // Drawing is faster without shadows
                color: "#00c0ef"
              },
              lines: {
                fill: true //Converts the line chart to area chart
              },
              yaxis: {
                show: false
              },
              xaxis: {
                show: false
              }
            });

            /* END AREA CHART */

            /*
             * BAR CHART
             * ---------
             */

            var bar_data = {
              data: [["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9]],
              color: "#3c8dbc"
            };
            $.plot("#bar-chart", [bar_data], {
              grid: {
                borderWidth: 1,
                borderColor: "#f3f3f3",
                tickColor: "#f3f3f3"
              },
              series: {
                bars: {
                  show: true,
                  barWidth: 0.5,
                  align: "center"
                }
              },
              xaxis: {
                mode: "categories",
                tickLength: 0
              }
            });
            /* END BAR CHART */

            /*
             * DONUT CHART
             * -----------
             */

            var donutData = [
              {label: "Series2", data: 30, color: "#3c8dbc"},
              {label: "Series3", data: 20, color: "#0073b7"},
              {label: "Series4", data: 50, color: "#00c0ef"}
            ];
            $.plot("#donut-chart", donutData, {
              series: {
                pie: {
                  show: true,
                  radius: 1,
                  innerRadius: 0.5,
                  label: {
                    show: true,
                    radius: 2 / 3,
                    formatter: labelFormatter,
                    threshold: 0.1
                  }

                }
              },
              legend: {
                show: false
              }
            });
            /*
             * END DONUT CHART
             */

          });

          /*
           * Custom Label formatter
           * ----------------------
           */
          function labelFormatter(label, series) {
            return '<div style="font-size:13px; text-align:center; padding:2px; color: #fff; font-weight: 600;">'
                    + label
                    + "<br>"
                    + Math.round(series.percent) + "%</div>";
          }

      });

      Template.inlinePage.onRendered(function(){
          $(function () {
            /* jQueryKnob */

            $(".knob").knob({
              /*change : function (value) {
               //console.log("change : " + value);
               },
               release : function (value) {
               console.log("release : " + value);
               },
               cancel : function () {
               console.log("cancel : " + this.value);
               },*/
              draw: function () {

                // "tron" case
                if (this.$.data('skin') == 'tron') {

                  var a = this.angle(this.cv)  // Angle
                          , sa = this.startAngle          // Previous start angle
                          , sat = this.startAngle         // Start angle
                          , ea                            // Previous end angle
                          , eat = sat + a                 // End angle
                          , r = true;

                  this.g.lineWidth = this.lineWidth;

                  this.o.cursor
                          && (sat = eat - 0.3)
                          && (eat = eat + 0.3);

                  if (this.o.displayPrevious) {
                    ea = this.startAngle + this.angle(this.value);
                    this.o.cursor
                            && (sa = ea - 0.3)
                            && (ea = ea + 0.3);
                    this.g.beginPath();
                    this.g.strokeStyle = this.previousColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                    this.g.stroke();
                  }

                  this.g.beginPath();
                  this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                  this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                  this.g.stroke();

                  this.g.lineWidth = 2;
                  this.g.beginPath();
                  this.g.strokeStyle = this.o.fgColor;
                  this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                  this.g.stroke();

                  return false;
                }
              }
            });
            /* END JQUERY KNOB */

            //INITIALIZE SPARKLINE CHARTS
            $(".sparkline").each(function () {
              var $this = $(this);
              $this.sparkline('html', $this.data());
            });

            /* SPARKLINE DOCUMENTAION EXAMPLES http://omnipotent.net/jquery.sparkline/#s-about */
            drawDocSparklines();
            drawMouseSpeedDemo();

          });
          function drawDocSparklines() {

            // Bar + line composite charts
            $('#compositebar').sparkline('html', {type: 'bar', barColor: '#aaf'});
            $('#compositebar').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7],
                    {composite: true, fillColor: false, lineColor: 'red'});


            // Line charts taking their values from the tag
            $('.sparkline-1').sparkline();

            // Larger line charts for the docs
            $('.largeline').sparkline('html',
                    {type: 'line', height: '2.5em', width: '4em'});

            // Customized line chart
            $('#linecustom').sparkline('html',
                    {height: '1.5em', width: '8em', lineColor: '#f00', fillColor: '#ffa',
                      minSpotColor: false, maxSpotColor: false, spotColor: '#77f', spotRadius: 3});

            // Bar charts using inline values
            $('.sparkbar').sparkline('html', {type: 'bar'});

            $('.barformat').sparkline([1, 3, 5, 3, 8], {
              type: 'bar',
              tooltipFormat: '{{value:levels}} - {{value}}',
              tooltipValueLookups: {
                levels: $.range_map({':2': 'Low', '3:6': 'Medium', '7:': 'High'})
              }
            });

            // Tri-state charts using inline values
            $('.sparktristate').sparkline('html', {type: 'tristate'});
            $('.sparktristatecols').sparkline('html',
                    {type: 'tristate', colorMap: {'-2': '#fa7', '2': '#44f'}});

            // Composite line charts, the second using values supplied via javascript
            $('#compositeline').sparkline('html', {fillColor: false, changeRangeMin: 0, chartRangeMax: 10});
            $('#compositeline').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7],
                    {composite: true, fillColor: false, lineColor: 'red', changeRangeMin: 0, chartRangeMax: 10});

            // Line charts with normal range marker
            $('#normalline').sparkline('html',
                    {fillColor: false, normalRangeMin: -1, normalRangeMax: 8});
            $('#normalExample').sparkline('html',
                    {fillColor: false, normalRangeMin: 80, normalRangeMax: 95, normalRangeColor: '#4f4'});

            // Discrete charts
            $('.discrete1').sparkline('html',
                    {type: 'discrete', lineColor: 'blue', xwidth: 18});
            $('#discrete2').sparkline('html',
                    {type: 'discrete', lineColor: 'blue', thresholdColor: 'red', thresholdValue: 4});

            // Bullet charts
            $('.sparkbullet').sparkline('html', {type: 'bullet'});

            // Pie charts
            $('.sparkpie').sparkline('html', {type: 'pie', height: '1.0em'});

            // Box plots
            $('.sparkboxplot').sparkline('html', {type: 'box'});
            $('.sparkboxplotraw').sparkline([1, 3, 5, 8, 10, 15, 18],
                    {type: 'box', raw: true, showOutliers: true, target: 6});

            // Box plot with specific field order
            $('.boxfieldorder').sparkline('html', {
              type: 'box',
              tooltipFormatFieldlist: ['med', 'lq', 'uq'],
              tooltipFormatFieldlistKey: 'field'
            });

            // click event demo sparkline
            $('.clickdemo').sparkline();
            $('.clickdemo').bind('sparklineClick', function (ev) {
              var sparkline = ev.sparklines[0],
                      region = sparkline.getCurrentRegionFields();
              value = region.y;
              alert("Clicked on x=" + region.x + " y=" + region.y);
            });

            // mouseover event demo sparkline
            $('.mouseoverdemo').sparkline();
            $('.mouseoverdemo').bind('sparklineRegionChange', function (ev) {
              var sparkline = ev.sparklines[0],
                      region = sparkline.getCurrentRegionFields();
              value = region.y;
              $('.mouseoverregion').text("x=" + region.x + " y=" + region.y);
            }).bind('mouseleave', function () {
              $('.mouseoverregion').text('');
            });
          }

          /**
           ** Draw the little mouse speed animated graph
           ** This just attaches a handler to the mousemove event to see
           ** (roughly) how far the mouse has moved
           ** and then updates the display a couple of times a second via
           ** setTimeout()
           **/
          function drawMouseSpeedDemo() {
            var mrefreshinterval = 500; // update display every 500ms
            var lastmousex = -1;
            var lastmousey = -1;
            var lastmousetime;
            var mousetravel = 0;
            var mpoints = [];
            var mpoints_max = 30;
            $('html').mousemove(function (e) {
              var mousex = e.pageX;
              var mousey = e.pageY;
              if (lastmousex > -1) {
                mousetravel += Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
              }
              lastmousex = mousex;
              lastmousey = mousey;
            });
            var mdraw = function () {
              var md = new Date();
              var timenow = md.getTime();
              if (lastmousetime && lastmousetime != timenow) {
                var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
                mpoints.push(pps);
                if (mpoints.length > mpoints_max)
                  mpoints.splice(0, 1);
                mousetravel = 0;
                $('#mousespeed').sparkline(mpoints, {width: mpoints.length * 2, tooltipSuffix: ' pixels per second'});
              }
              lastmousetime = timenow;
              setTimeout(mdraw, mrefreshinterval);
            };
            // We could use setInterval instead, but I prefer to do it this way
            setTimeout(mdraw, mrefreshinterval);
          }
      });

      Template.morrisPage.onRendered(function(){
          $(function () {
            "use strict";

            // AREA CHART
            var area = new Morris.Area({
              element: 'revenue-chart',
              resize: true,
              data: [
                {y: '2011 Q1', item1: 2666, item2: 2666},
                {y: '2011 Q2', item1: 2778, item2: 2294},
                {y: '2011 Q3', item1: 4912, item2: 1969},
                {y: '2011 Q4', item1: 3767, item2: 3597},
                {y: '2012 Q1', item1: 6810, item2: 1914},
                {y: '2012 Q2', item1: 5670, item2: 4293},
                {y: '2012 Q3', item1: 4820, item2: 3795},
                {y: '2012 Q4', item1: 15073, item2: 5967},
                {y: '2013 Q1', item1: 10687, item2: 4460},
                {y: '2013 Q2', item1: 8432, item2: 5713}
              ],
              xkey: 'y',
              ykeys: ['item1', 'item2'],
              labels: ['Item 1', 'Item 2'],
              lineColors: ['#a0d0e0', '#3c8dbc'],
              hideHover: 'auto'
            });

            // LINE CHART
            var line = new Morris.Line({
              element: 'line-chart',
              resize: true,
              data: [
                {y: '2011 Q1', item1: 2666},
                {y: '2011 Q2', item1: 2778},
                {y: '2011 Q3', item1: 4912},
                {y: '2011 Q4', item1: 3767},
                {y: '2012 Q1', item1: 6810},
                {y: '2012 Q2', item1: 5670},
                {y: '2012 Q3', item1: 4820},
                {y: '2012 Q4', item1: 15073},
                {y: '2013 Q1', item1: 10687},
                {y: '2013 Q2', item1: 8432}
              ],
              xkey: 'y',
              ykeys: ['item1'],
              labels: ['Item 1'],
              lineColors: ['#3c8dbc'],
              hideHover: 'auto'
            });

            //DONUT CHART
            var donut = new Morris.Donut({
              element: 'sales-chart',
              resize: true,
              colors: ["#3c8dbc", "#f56954", "#00a65a"],
              data: [
                {label: "Download Sales", value: 12},
                {label: "In-Store Sales", value: 30},
                {label: "Mail-Order Sales", value: 20}
              ],
              hideHover: 'auto'
            });
            //BAR CHART
            var bar = new Morris.Bar({
              element: 'bar-chart',
              resize: true,
              data: [
                {y: '2006', a: 100, b: 90},
                {y: '2007', a: 75, b: 65},
                {y: '2008', a: 50, b: 40},
                {y: '2009', a: 75, b: 65},
                {y: '2010', a: 50, b: 40},
                {y: '2011', a: 75, b: 65},
                {y: '2012', a: 100, b: 90}
              ],
              barColors: ['#00a65a', '#f56954'],
              xkey: 'y',
              ykeys: ['a', 'b'],
              labels: ['CPU', 'DISK'],
              hideHover: 'auto'
            });
          });
      });

      Template.advanceFormPage.onRendered(function(){
          $(function () {
            //Initialize Select2 Elements
            $(".select2").select2();

            //Datemask dd/mm/yyyy
            $("#datemask").inputmask("dd/mm/yyyy", {"placeholder": "dd/mm/yyyy"});
            //Datemask2 mm/dd/yyyy
            $("#datemask2").inputmask("mm/dd/yyyy", {"placeholder": "mm/dd/yyyy"});
            //Money Euro
            $("[data-mask]").inputmask();

            //Date range picker
            $('#reservation').daterangepicker();
            //Date range picker with time picker
            $('#reservationtime').daterangepicker({timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A'});
            //Date range as a button
            $('#daterange-btn').daterangepicker(
                {
                  ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                  },
                  startDate: moment().subtract(29, 'days'),
                  endDate: moment()
                },
            function (start, end) {
              $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            }
            );

            //Colorpicker
            $(".my-colorpicker1").colorpicker();
            //color picker with addon
            $(".my-colorpicker2").colorpicker();

            //Timepicker
            $(".timepicker").timepicker({
              showInputs: false
            });
          });
      });

      Template.generalFormPage.onRendered(function(){
        console.log("generalFormPage")
      });


}); // Meteor.starup 