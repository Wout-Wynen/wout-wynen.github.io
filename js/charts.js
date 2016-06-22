window.onload = function () {
       var chart = new CanvasJS.Chart("chartBasiskennis", {

           title: {
               text: "Basiskennis van verschillende programmeertalen",
               fontFamily: "Courier New",
               fontColor: "Peru",
               fontSize: 35

           },
           animationEnabled: true,
           axisY: {
              maximum: 100,
               tickThickness: 0,
               lineThickness: 0,
               valueFormatString: " ",
               gridThickness: 0
           },
           axisX: {
               tickThickness: 0,
               lineThickness: 0,
               labelFontSize: 18,
               labelFontColor: "Peru"

           },
           data: [
           {
               indexLabelFontSize: 26,
               toolTipContent: "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{checklabel}</strong></span>",

               indexLabelPlacement: "inside",
               indexLabelFontColor: "#0099ff",
               indexLabelFontWeight: 600,
               indexLabelFontFamily: "Lucida Console",
               color: "Black",
               type: "bar",
               dataPoints: [
                   { y: 20, label: "20%", indexLabel: "Lua", checklabel: " Onvoldoende" },
                   { y: 50, label: "50%", indexLabel: "Php", checklabel: " Beperkt"  },
                   { y: 60, label: "60%", indexLabel: "Jquery", checklabel: " Voldoende"  },
                   { y: 65, label: "65%", indexLabel: "Javascript", checklabel: " Goed" },
                   { y: 65, label: "65%", indexLabel: "Html", checklabel: " Goed" },
                   { y: 70, label: "70%", indexLabel: "Css", checklabel: " Vrij Goed"  },
                   { y: 75, label: "75%", indexLabel: "C#", checklabel: " Zeer Goed" }



               ]
           }
           ]
       });

       chart.render();
       chart = {};
        var chart2 = new CanvasJS.Chart("chartVerdereKennis", {

                     title: {
                         text: "Andere softwarekennis",
                         fontFamily: "Garamond",
                         fontColor: "Peru",
                         fontSize: 35

                     },
                     animationEnabled: true,
                     axisY: {
                          maximum: 100,
                         tickThickness: 0,
                         lineThickness: 0,
                         valueFormatString: " ",
                         gridThickness: 0
                     },
                     axisX: {

                         tickThickness: 0,
                         lineThickness: 0,
                         labelFontSize: 18,
                         labelFontColor: "Peru",
                         labelFontWeight: 500

                     },
                     data: [
                     {
                         indexLabelFontSize: 26,
                         toolTipContent: "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{checklabel}</strong></span>",

                         indexLabelPlacement: "inside",
                         indexLabelFontColor: "#33cccc",
                         indexLabelFontWeight: 600,
                         indexLabelFontFamily: "Garamond",
                         color: "#006600",
                         type: "bar",
                         dataPoints: [


                             { y: 25, label: "25%", indexLabel: "Algernon", checklabel: " Beperkt" },
                             { y: 60, label: "60%", indexLabel: "Gsap", checklabel: " Goed" },
                             { y: 60, label: "60%", indexLabel: "Hugo", checklabel: " Voldoende"  },
                             { y: 65, label: "65%", indexLabel: "SQL", checklabel: " Goed" },



                         ]
                     }
                     ]
});
chart2.render();
chart2 = {};

var chart3 = new CanvasJS.Chart("chartSysteembeheer", {

             title: {
                 text: "Systeembeheer",
                 fontFamily: "Garamond",
                 fontColor: "Peru",
                 fontSize: 35

             },
             animationEnabled: true,
             axisY: {
                  maximum: 100,
                 tickThickness: 0,
                 lineThickness: 0,
                 valueFormatString: " ",
                 gridThickness: 0
             },
             axisX: {

                 tickThickness: 0,
                 lineThickness: 0,
                 labelFontSize: 18,
                 labelFontColor: "Peru",
                 labelFontWeight: 500

             },
             data: [
             {
                 indexLabelFontSize: 26,
                 toolTipContent: "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{checklabel}</strong></span>",

                 indexLabelPlacement: "inside",
                 indexLabelFontColor: "#0099ff",
                 indexLabelFontWeight: 600,
                 indexLabelFontFamily: "Garamond",
                 color: "Brown",
                 type: "bar",
                 dataPoints: [



                     { y: 50, label: "50%", indexLabel: "Cisco", checklabel: " Beperkt"  },
                     { y: 75, label: "75%", indexLabel: "Hardware(basis - stage)", checklabel: " Goed" },
                     { y: 80, label: "80%", indexLabel: "Windows server 2012", checklabel: " Zeer Goed" },



                 ]
             }
             ]
});
chart3.render();
chart3 = {};

var chart4 = new CanvasJS.Chart("chartToekomst", {

             title: {
                 text: "Wat zie ik mezelf later doen?",
                 fontFamily: "Garamond",
                 fontColor: "Peru",
                 fontSize: 35

             },
             animationEnabled: true,
             axisY: {
                  maximum: 100,
                 tickThickness: 0,
                 lineThickness: 0,
                 valueFormatString: " ",
                 gridThickness: 0
             },
             axisX: {

                 tickThickness: 0,
                 lineThickness: 0,
                 labelFontSize: 18,
                 labelFontColor: "Peru",
                 labelFontWeight: 500

             },
             data: [
             {
                 indexLabelFontSize: 26,
                 toolTipContent: "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{checklabel}</strong></span>",

                 indexLabelPlacement: "inside",
                 indexLabelFontColor: "#0099ff",
                 indexLabelFontWeight: 600,
                 indexLabelFontFamily: "Garamond",
                 color: "#660066",
                 type: "bar",
                 dataPoints: [



                     { y: 60, label: "Ja", indexLabel: "Iets anders dan informatica", checklabel: " Ja"  },
                     { y: 60, label: "Ja", indexLabel: "SoftwareOntwikkelaar", checklabel: " Ja" },
                     { y: 80, label: "Graag", indexLabel: "Systeem en netwerkbeheerder", checklabel: " Graag" },



                 ]
             }
             ]
});
chart4.render();
chart4 = {};

};
  $(document).ready(function(){

        tweenTitle = TweenMax.set("#title", {
      textShadow:"5px 0px 10px Black, 0px 5px 10px #006600, -5px 0px 10px Brown, 0px -5px 10px #660066"
        });


  });
