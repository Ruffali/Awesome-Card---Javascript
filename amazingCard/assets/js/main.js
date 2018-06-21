$( document ).ready(function() {
    $("#main .card").click(function(){
        $("#main .card").css({"transition": "all 0.8s ease"});
        $("#main .curvedRight").css({"transition": "all 1.5s ease"});
        $("#main .curvedLeft").css({"transition": "all 1.5s ease"});
        $("body").css({"transition": "all 1.5s ease"});
    });
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").click(function(){
        $("#main .card").css({"transition": "all 0.8s ease"});
        $("#main .curvedRight").css({"transition": "all 1.5s ease"});
        $("#main .curvedLeft").css({"transition": "all 1.5s ease"});
    });
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").click(function(){
        $("#main .card").css({"transition": "all 0.8s ease"});
        $("#main .curvedRight").css({"transition": "all 1.5s ease"});
        $("#main .curvedLeft").css({"transition": "all 1.5s ease"});
    });
    $(document).keypress(function(e) {
        if(e.which == 13) {
            $("#main .card").css({"transition": "all 0.8s ease"});
            $("#main .curvedRight").css({"transition": "all 1.5s ease"});
            $("#main .curvedLeft").css({"transition": "all 1.5s ease"});
        }
    });
    $(document).keypress(function(e) {
        if(e.which == 27) {
            $("#main .card").css({"transition": "all 0.8s ease"});
            $("#main .curvedRight").css({"transition": "all 1.5s ease"});
            $("#main .curvedLeft").css({"transition": "all 1.5s ease"});
        }
    });


    $("#mainView .card").click(function(){
        $("#mainView .card").css({"transition": "all 0.8s ease"});
    });
    
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").click(function(){
        if( $("#main .myCard").css({"transform":"rotate(0deg)"})){
            $("#main .myCard").css({"transform-origin": "bottom right",
                            "transform": "rotate(75deg)"});
                            $("#mainView .myCard11").css({"z-index":"10"});
            $("#main .curvedRight").css({"opacity": "1"});
            $("#main .curvedLeft").css({"opacity": "1"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").css({"color":"white", "background-color":"black"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").css({"color":"#9b9b9b", "background-color":"rgba(1, 0, 5, 0.3)"});
        }
    })

    $("#main .myCard11").click(function(){
        if( $("#main .myCard").css({"transform":"rotate(0deg)"})){
            $("#main .myCard").css({"transform-origin": "bottom right",
                            "transform": "rotate(75deg)"});
                            $("#mainView .myCard11").css({"z-index":"10"});
            $("#main .curvedRight").css({"opacity": "1"});
            $("#main .curvedLeft").css({"opacity": "1"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").css({"color":"white", "background-color":"black"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").css({"color":"#9b9b9b", "background-color":"rgba(1, 0, 5, 0.3)"});
        }
    })
    $(document).keypress(function(e) {
        if(e.which == 13) {
            if( $("#main .myCard").css({"transform":"rotate(0deg)"})){
                $("#main .myCard").css({"transform-origin": "bottom right",
                                "transform": "rotate(75deg)"});
                                $("#mainView .myCard11").css({"z-index":"10"});
                $("#main .curvedRight").css({"opacity": "1"});
                $("#main .curvedLeft").css({"opacity": "1"});
                $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").css({"color":"white", "background-color":"black"});
                $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").css({"color":"#9b9b9b", "background-color":"rgba(1, 0, 5, 0.3)"});
            }
        }
    });
   
    
    
    $("#main .myCard11").dblclick(function(){
        if( $("#main .myCard").css({"transform":"rotate(75deg)"})){
            $("#main .myCard").css({"transform": "rotate(0deg)"});
            $("#main .curvedRight").css({"opacity": "0"});
            $("#main .curvedLeft").css({"opacity": "0"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").css({"color":"white", "background-color":"black"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").css({"color":"#9b9b9b", "background-color":"rgba(1, 0, 5, 0.3)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").click(function(){
        if( $("#main .myCard").css({"transform":"rotate(75deg)"})){
            $("#main .myCard").css({"transform": "rotate(0deg)"});
            $("#main .curvedRight").css({"opacity": "0"});
            $("#main .curvedLeft").css({"opacity": "0"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").css({"color":"#9b9b9b", "background-color":"rgba(1, 0, 5, 0.3)"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").css({"color":"white", "background-color":"black"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11").css({"background":"linear-gradient(to top, #1D1D1D, #76787c)"});
            $("#mainView .myCard11").css({"z-index":"10"});
            $("#mainView .myCard10").css({"z-index":"0"});
            $("#mainView .myCard9").css({"z-index":"0"});
            $("#mainView .myCard8").css({"z-index":"0"});
            $("#mainView .myCard7").css({"z-index":"0"});
            $("#mainView .myCard6").css({"z-index":"0"});
            $("#mainView .myCard5").css({"z-index":"0"});
            $("#mainView .myCard4").css({"z-index":"0"});
            $("#mainView .myCard3").css({"z-index":"0"});
            $("#mainView .myCard2").css({"z-index":"0"});
            $("#mainView .myCard").css({"z-index":"0"});
        }
    })
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            if( $("#main .myCard").css({"transform":"rotate(75deg)"})){
                $("#main .myCard").css({"transform": "rotate(0deg)"});
                $("#main .curvedRight").css({"opacity": "0"});
                $("#main .curvedLeft").css({"opacity": "0"});
                $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").css({"color":"#9b9b9b", "background-color":"rgba(1, 0, 5, 0.3)"});
                $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").css({"color":"white", "background-color":"black"});
                $("#mainExplane .container-fluid .row .col-md-12 .myCard11").css({"background":"linear-gradient(to top, #1D1D1D, #76787c)"});
                $("#mainView .myCard11").css({"z-index":"10"});
                $("#mainView .myCard10").css({"z-index":"0"});
                $("#mainView .myCard9").css({"z-index":"0"});
                $("#mainView .myCard8").css({"z-index":"0"});
                $("#mainView .myCard7").css({"z-index":"0"});
                $("#mainView .myCard6").css({"z-index":"0"});
                $("#mainView .myCard5").css({"z-index":"0"});
                $("#mainView .myCard4").css({"z-index":"0"});
                $("#mainView .myCard3").css({"z-index":"0"});
                $("#mainView .myCard2").css({"z-index":"0"});
                $("#mainView .myCard").css({"z-index":"0"});
            }
       }
   });
    


    $("#main .myCard11").click(function(){
        if( $("#main .myCard2").css({"transform":"rotate(0deg)"})){
            $("#main .myCard2").css({"background-color": "yellow",
                            "transform-origin": "bottom right",
                            "transform": "rotate(75deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").click(function(){
        if( $("#main .myCard2").css({"transform":"rotate(0deg)"})){
            $("#main .myCard2").css({"background-color": "yellow",
                            "transform-origin": "bottom right",
                            "transform": "rotate(75deg)"});
        }
    })
    $(document).keypress(function(e) {
        if(e.which == 13) {
            if( $("#main .myCard2").css({"transform":"rotate(0deg)"})){
                $("#main .myCard2").css({"background-color": "yellow",
                                "transform-origin": "bottom right",
                                "transform": "rotate(75deg)"});
            }
        }
    });
   
    $("#main .myCard11").dblclick(function(){
        if( $("#main .myCard2").css({"transform":"rotate(75deg)"})){
            $("#main .myCard2").css({"transform": "rotate(0deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").click(function(){
        if( $("#main .myCard2").css({"transform":"rotate(75deg)"})){
            $("#main .myCard2").css({"transform": "rotate(0deg)"});
        }
    })
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            if( $("#main .myCard2").css({"transform":"rotate(75deg)"})){
                $("#main .myCard2").css({"transform": "rotate(0deg)"});
            } 
        }
    });
    


    $("#main .myCard11").click(function(){
        if( $("#main .myCard3").css({"transform":"rotate(0deg)"})){
            $("#main .myCard3").css({"background-color": "blue",
                            "transform-origin": "bottom right",
                            "transform": "rotate(60deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").click(function(){
        if( $("#main .myCard3").css({"transform":"rotate(0deg)"})){
            $("#main .myCard3").css({"background-color": "blue",
                            "transform-origin": "bottom right",
                            "transform": "rotate(60deg)"});
        }
    })
     $(document).keypress(function(e) {
        if(e.which == 13) {
            if( $("#main .myCard3").css({"transform":"rotate(0deg)"})){
                $("#main .myCard3").css({"background-color": "blue",
                                "transform-origin": "bottom right",
                                "transform": "rotate(60deg)"});
            }
        }
    });
   
    $(".myCard11").dblclick(function(){
        if( $("#main .myCard3").css({"transform":"rotate(60deg)"})){
            $("#main .myCard3").css({"transform": "rotate(0deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").click(function(){
        if( $("#main .myCard3").css({"transform":"rotate(60deg)"})){
            $("#main .myCard3").css({"transform": "rotate(0deg)"});
        }
    })
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            if( $("#main .myCard3").css({"transform":"rotate(60deg)"})){
                $("#main .myCard3").css({"transform": "rotate(0deg)"});
            }
        }
    });


    $("#main .myCard11").click(function(){
        if( $("#main .myCard4").css({"transform":"rotate(0deg)"})){
            $("#main .myCard4").css({"background-color": "green",
                            "transform-origin": "bottom right",
                            "transform": "rotate(45deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").click(function(){
        if( $("#main .myCard4").css({"transform":"rotate(0deg)"})){
            $("#main .myCard4").css({"background-color": "green",
                            "transform-origin": "bottom right",
                            "transform": "rotate(45deg)"});
        }
    })
      $(document).keypress(function(e) {
        if(e.which == 13) {
            if( $("#main .myCard4").css({"transform":"rotate(0deg)"})){
                $("#main .myCard4").css({"background-color": "green",
                                "transform-origin": "bottom right",
                                "transform": "rotate(45deg)"});
            }
        }
    });
    $("#main .myCard11").dblclick(function(){
        if( $("#main .myCard4").css({"transform":"rotate(45deg)"})){
            $("#main .myCard4").css({"transform": "rotate(0deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").click(function(){
        if( $("#main .myCard4").css({"transform":"rotate(45deg)"})){
            $("#main .myCard4").css({"transform": "rotate(0deg)"});
        }
    })
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            if( $("#main .myCard4").css({"transform":"rotate(45deg)"})){
                $("#main .myCard4").css({"transform": "rotate(0deg)"});
            }
        }
    });


    $("#main .myCard11").click(function(){
        if( $("#main .myCard5").css({"transform":"rotate(0deg)"})){
            $("#main .myCard5").css({"background-color": "gray",
                            "transform-origin": "bottom right",
                            "transform": "rotate(30deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").click(function(){
        if( $("#main .myCard5").css({"transform":"rotate(0deg)"})){
            $("#main .myCard5").css({"background-color": "gray",
                            "transform-origin": "bottom right",
                            "transform": "rotate(30deg)"});
        }
    })
      $(document).keypress(function(e) {
        if(e.which == 13) {
            if( $("#main .myCard5").css({"transform":"rotate(0deg)"})){
                $("#main .myCard5").css({"background-color": "gray",
                                "transform-origin": "bottom right",
                                "transform": "rotate(30deg)"});
            } 
        }
    });
    $("#main .myCard11").dblclick(function(){
        if( $("#main .myCard5").css({"transform":"rotate(30deg)"})){
            $("#main .myCard5").css({"transform": "rotate(0deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").click(function(){
        if( $("#main .myCard5").css({"transform":"rotate(30deg)"})){
            $("#main .myCard5").css({"transform": "rotate(0deg)"});
        }
    })
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            if( $("#main .myCard5").css({"transform":"rotate(30deg)"})){
                $("#main .myCard5").css({"transform": "rotate(0deg)"});
            }  
        }
    });



    $("#main .myCard11").click(function(){
        if( $("#main .myCard6").css({"transform":"rotate(0deg)"})){
            $("#main .myCard6").css({"background-color": "black",
                            "transform-origin": "bottom right",
                            "transform": "rotate(15deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").click(function(){
        if( $("#main .myCard6").css({"transform":"rotate(0deg)"})){
            $("#main .myCard6").css({"background-color": "black",
                            "transform-origin": "bottom right",
                            "transform": "rotate(15deg)"});
        }
    })
     $(document).keypress(function(e) {
        if(e.which == 13) {
            if( $("#main .myCard6").css({"transform":"rotate(0deg)"})){
                $("#main .myCard6").css({"background-color": "black",
                                "transform-origin": "bottom right",
                                "transform": "rotate(15deg)"});
            }
        }
    });
    $("#main .myCard11").dblclick(function(){
        if( $("#main .myCard6").css({"transform":"rotate(15deg)"})){
            $("#main .myCard6").css({"transform": "rotate(0deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").click(function(){
        if( $("#main .myCard6").css({"transform":"rotate(15deg)"})){
            $("#main .myCard6").css({"transform": "rotate(0deg)"});
        }
    })
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            if( $("#main .myCard6").css({"transform":"rotate(15deg)"})){
                $("#main .myCard6").css({"transform": "rotate(0deg)"});
            } 
        }
    });



    $("#main .myCard11").click(function(){
        if( $("#main .myCard7").css({"transform":"rotate(0deg)"})){
            $("#main .myCard7").css({"background-color": "rgb(134, 134, 71)",
                            "transform-origin": "bottom right",
                            "transform": "rotate(-1deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").click(function(){
        if( $("#main .myCard7").css({"transform":"rotate(0deg)"})){
            $("#main .myCard7").css({"background-color": "rgb(134, 134, 71)",
                            "transform-origin": "bottom right",
                            "transform": "rotate(-1deg)"});
        }
    })
     $(document).keypress(function(e) {
        if(e.which == 13) {
            if( $("#main .myCard7").css({"transform":"rotate(0deg)"})){
                $("#main .myCard7").css({"background-color": "rgb(134, 134, 71)",
                                "transform-origin": "bottom right",
                                "transform": "rotate(-1deg)"});
            }
        }
    });
    $("#main .myCard11").dblclick(function(){
        if( $("#main .myCard7").css({"transform":"rotate(-1deg)"})){
            $("#main .myCard7").css({"transform": "rotate(0deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").click(function(){
        if( $("#main .myCard7").css({"transform":"rotate(-1deg)"})){
            $("#main .myCard7").css({"transform": "rotate(0deg)"});
        }
    })
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            if( $("#main .myCard7").css({"transform":"rotate(-1deg)"})){
                $("#main .myCard7").css({"transform": "rotate(0deg)"});
            }
        }
    });



    $("#main .myCard11").click(function(){
        if( $("#main .myCard8").css({"transform":"rotate(0deg)"})){
            $("#main .myCard8").css({"background-color": "rgb(93, 93, 145)",
                            "transform-origin": "bottom right",
                            "transform": "rotate(-15deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").click(function(){
        if( $("#main .myCard8").css({"transform":"rotate(0deg)"})){
            $("#main .myCard8").css({"background-color": "rgb(93, 93, 145)",
                            "transform-origin": "bottom right",
                            "transform": "rotate(-15deg)"});
        }
    })
    $(document).keypress(function(e) {
        if(e.which == 13) {
            if( $("#main .myCard8").css({"transform":"rotate(0deg)"})){
                $("#main .myCard8").css({"background-color": "rgb(93, 93, 145)",
                                "transform-origin": "bottom right",
                                "transform": "rotate(-15deg)"});
            }
        }
    });
    $("#main .myCard11").dblclick(function(){
        if( $("#main .myCard8").css({"transform":"rotate(-15deg)"})){
            $("#main .myCard8").css({"transform": "rotate(0deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").click(function(){
        if( $("#main .myCard8").css({"transform":"rotate(-15deg)"})){
            $("#main .myCard8").css({"transform": "rotate(0deg)"});
        }
    })
     $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            if( $("#main .myCard8").css({"transform":"rotate(-15deg)"})){
                $("#main .myCard8").css({"transform": "rotate(0deg)"});
            }
        }
    });



    $("#main .myCard11").click(function(){
        if( $("#main .myCard9").css({"transform":"rotate(0deg)"})){
            $("#main .myCard9").css({"background-color": "rgb(221, 14, 169)",
                            "transform-origin": "bottom right",
                            "transform": "rotate(-30deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").click(function(){
        if( $("#main .myCard9").css({"transform":"rotate(0deg)"})){
            $("#main .myCard9").css({"background-color": "rgb(221, 14, 169)",
                            "transform-origin": "bottom right",
                            "transform": "rotate(-30deg)"});
        }
    })
    $("#main .myCard11").dblclick(function(){
        if( $("#main .myCard9").css({"transform":"rotate(-30deg)"})){
            $("#main .myCard9").css({"transform": "rotate(0deg)"});
        }
    })

    $(document).keypress(function(e) {
        if(e.which == 13) {
            if( $("#main .myCard9").css({"transform":"rotate(0deg)"})){
                $("#main .myCard9").css({"background-color": "rgb(221, 14, 169)",
                                "transform-origin": "bottom right",
                                "transform": "rotate(-30deg)"});
            }
        }
    });
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").click(function(){
        if( $("#main .myCard9").css({"transform":"rotate(-30deg)"})){
            $("#main .myCard9").css({"transform": "rotate(0deg)"});
        }
    })
     $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            if( $("#main .myCard9").css({"transform":"rotate(-30deg)"})){
                $("#main .myCard9").css({"transform": "rotate(0deg)"});
            } 
        }
    });


    $("#main .myCard11").click(function(){
        if( $("#main .myCard10").css({"transform":"rotate(0deg)"})){
            $("#main .myCard10").css({"background-color": "rgb(192, 89, 20)",
                            "transform-origin": "bottom right",
                            "transform": "rotate(-45deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").click(function(){
        if( $("#main .myCard10").css({"transform":"rotate(0deg)"})){
            $("#main .myCard10").css({"background-color": "rgb(192, 89, 20)",
                            "transform-origin": "bottom right",
                            "transform": "rotate(-45deg)"});
        }
    })
    $(document).keypress(function(e) {
        if(e.which == 13) {
            if( $("#main .myCard10").css({"transform":"rotate(0deg)"})){
                $("#main .myCard10").css({"background-color": "rgb(192, 89, 20)",
                                "transform-origin": "bottom right",
                                "transform": "rotate(-45deg)"});
            }  
        }
    });
    $("#main .myCard11").dblclick(function(){
        if( $("#main .myCard10").css({"transform":"rotate(-45deg)"})){
            $("#main .myCard10").css({"transform": "rotate(0deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").click(function(){
        if( $("#main .myCard10").css({"transform":"rotate(-45deg)"})){
            $("#main .myCard10").css({"transform": "rotate(0deg)"});
        }
    })
     $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            if( $("#main .myCard10").css({"transform":"rotate(-45deg)"})){
                $("#main .myCard10").css({"transform": "rotate(0deg)"});
            }
        }
    });



    $("#main .myCard11").click(function(){
        if( $("#main .myCard11").css({"transform":"rotate(0deg)"})){
            $("#main .myCard11").css({"background-color": "rgb(26, 243, 7)",
                            "transform-origin": "bottom right",
                            "transform": "rotate(-60deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressEnter button").click(function(){
        if( $("#main .myCard11").css({"transform":"rotate(0deg)"})){
            $("#main .myCard11").css({"background-color": "rgb(26, 243, 7)",
                            "transform-origin": "bottom right",
                            "transform": "rotate(-60deg)"});
        }
    })
    $(document).keypress(function(e) {
        if(e.which == 13) {
            if( $("#main .myCard11").css({"transform":"rotate(0deg)"})){
                $("#main .myCard11").css({"background-color": "rgb(26, 243, 7)",
                                "transform-origin": "bottom right",
                                "transform": "rotate(-60deg)"});
            } 
        }
    });
    $("#main .myCard11").dblclick(function(){
        if( $("#main .myCard11").css({"transform":"rotate(-60deg)"})){
            $("#main .myCard11").css({"transform": "rotate(0deg)"});
        }
    })
    $("#mainExplane .container-fluid .row .col-md-12 .myCard11 .pressClose button").click(function(){
        if( $("#main .myCard11").css({"transform":"rotate(-60deg)"})){
            $("#main .myCard11").css({"transform": "rotate(0deg)"});
            $("body").css({"background-image":"url(http://www.openwallpaper.info/wp-content/uploads/2018/04/free-wallpaper-for-computer-awesome-backgrounds-google-search-fonts-amp-pages-pinterest-of-free-wallpaper-for-computer.png)"})
        }
    })
     $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            if( $("#main .myCard11").css({"transform":"rotate(-60deg)"})){
                $("#main .myCard11").css({"transform": "rotate(0deg)"});
                $("body").css({"background-image":"url(http://www.openwallpaper.info/wp-content/uploads/2018/04/free-wallpaper-for-computer-awesome-backgrounds-google-search-fonts-amp-pages-pinterest-of-free-wallpaper-for-computer.png)"})
            }
        }
    });




    // Come to Center Start
    $("#main .myCard11").click(function(){
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11").css({"background":"linear-gradient(to top, #1D1D1D, #76787c)"});
            $("body").css({"background-image":"url(http://www.openwallpaper.info/wp-content/uploads/2018/04/free-wallpaper-for-computer-awesome-backgrounds-google-search-fonts-amp-pages-pinterest-of-free-wallpaper-for-computer.png)"})
        })

    $("#main .myCard10").click(function(){
        if( $("#main .myCard10").css({"transform":"rotate(-60deg)"})){
            $("#main .myCard10").css({"transform": "rotate(0deg)"});
            $("#main .myCard11").css({"transform": "rotate(-15deg)"});
            $("#main .myCard9").css({"transform": "rotate(30deg)"});
            $("#main .myCard8").css({"transform": "rotate(45deg)"});
            $("#main .myCard7").css({"transform": "rotate(60deg)"});
            $("#main .myCard6").css({"transform": "rotate(75deg)"});
            $("#main .myCard5").css({"transform": "rotate(90deg)"});
            $("#main .myCard4").css({"transform": "rotate(105deg)"});
            $("#main .myCard3").css({"transform": "rotate(120deg)"});
            $("#main .myCard2").css({"transform": "rotate(135deg)"});
            $("#main .myCard").css({"transform": "rotate(150deg)"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11").css({"background":"linear-gradient(to top, #323B4A, #8792a0)"});
            $("body").css({"background-image":"url(https://wallpaper-house.com/data/out/8/wallpaper2you_254447.jpg)"})




            $("#mainView .myCard11").css({"z-index":"0"});
            $("#mainView .myCard10").css({"z-index":"10"});
            $("#mainView .myCard9").css({"z-index":"0"});
            $("#mainView .myCard8").css({"z-index":"0"});
            $("#mainView .myCard7").css({"z-index":"0"});
            $("#mainView .myCard6").css({"z-index":"0"});
            $("#mainView .myCard5").css({"z-index":"0"});
            $("#mainView .myCard4").css({"z-index":"0"});
            $("#mainView .myCard3").css({"z-index":"0"});
            $("#mainView .myCard2").css({"z-index":"0"});
            $("#mainView .myCard").css({"z-index":"0"});

        }
    })
    

    $("#main .myCard9").click(function(){
        if( $("#main .myCard9").css({"transform":"rotate(-45deg)"})){
            $("#main .myCard9").css({"transform": "rotate(0deg)"});
            $("#main .myCard11").css({"transform": "rotate(-30deg)"});
            $("#main .myCard10").css({"transform": "rotate(-15deg)"});
            $("#main .myCard8").css({"transform": "rotate(30deg)"});
            $("#main .myCard7").css({"transform": "rotate(45deg)"});
            $("#main .myCard6").css({"transform": "rotate(60deg)"});
            $("#main .myCard5").css({"transform": "rotate(75deg)"});
            $("#main .myCard4").css({"transform": "rotate(90deg)"});
            $("#main .myCard3").css({"transform": "rotate(105deg)"});
            $("#main .myCard2").css({"transform": "rotate(120deg)"});
            $("#main .myCard").css({"transform": "rotate(135deg)"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11").css({"background":"linear-gradient(to top, #0b4d6e, #8ecff0)"});
            $("body").css({"background-image":"url(http://eskipaper.com/images/awesome-light-blue-backgrounds-1.jpg)"})
            


            $("#mainView .myCard11").css({"z-index":"0"});
            $("#mainView .myCard10").css({"z-index":"0"});
            $("#mainView .myCard9").css({"z-index":"10"});
            $("#mainView .myCard8").css({"z-index":"0"});
            $("#mainView .myCard7").css({"z-index":"0"});
            $("#mainView .myCard6").css({"z-index":"0"});
            $("#mainView .myCard5").css({"z-index":"0"});
            $("#mainView .myCard4").css({"z-index":"0"});
            $("#mainView .myCard3").css({"z-index":"0"});
            $("#mainView .myCard2").css({"z-index":"0"});
            $("#mainView .myCard").css({"z-index":"0"});

        }
    })

    $("#main .myCard8").click(function(){
        if( $("#main .myCard8").css({"transform":"rotate(-30deg)"})){
            $("#main .myCard8").css({"transform": "rotate(0deg)"});
            $("#main .myCard11").css({"transform": "rotate(-45deg)"});
            $("#main .myCard10").css({"transform": "rotate(-30deg)"});
            $("#main .myCard9").css({"transform": "rotate(-15deg)"});
            $("#main .myCard7").css({"transform": "rotate(30deg)"});
            $("#main .myCard6").css({"transform": "rotate(45deg)"});
            $("#main .myCard5").css({"transform": "rotate(60deg)"});
            $("#main .myCard4").css({"transform": "rotate(75deg)"});
            $("#main .myCard3").css({"transform": "rotate(90deg)"});
            $("#main .myCard2").css({"transform": "rotate(105deg)"});
            $("#main .myCard").css({"transform": "rotate(120deg)"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11").css({"background":"linear-gradient(to top, #7e0118, #f57a91)"});
            $("body").css({"background-image":"url(http://awesomewallpaper.files.wordpress.com/2013/08/blue-pond.jpg)"})




            $("#mainView .myCard11").css({"z-index":"0"});
            $("#mainView .myCard10").css({"z-index":"0"});
            $("#mainView .myCard9").css({"z-index":"0"});
            $("#mainView .myCard8").css({"z-index":"10"});
            $("#mainView .myCard7").css({"z-index":"0"});
            $("#mainView .myCard6").css({"z-index":"0"});
            $("#mainView .myCard5").css({"z-index":"0"});
            $("#mainView .myCard4").css({"z-index":"0"});
            $("#mainView .myCard3").css({"z-index":"0"});
            $("#mainView .myCard2").css({"z-index":"0"});
            $("#mainView .myCard").css({"z-index":"0"});
        }
    })


    $("#main .myCard7").click(function(){
        if( $("#main .myCard7").css({"transform":"rotate(-15deg)"})){
            $("#main .myCard7").css({"transform": "rotate(0deg)"});
            $("#main .myCard11").css({"transform": "rotate(-60deg)"});
            $("#main .myCard10").css({"transform": "rotate(-45deg)"});
            $("#main .myCard9").css({"transform": "rotate(-30deg)"});
            $("#main .myCard8").css({"transform": "rotate(-15deg)"});
            $("#main .myCard6").css({"transform": "rotate(30deg)"});
            $("#main .myCard5").css({"transform": "rotate(45deg)"});
            $("#main .myCard4").css({"transform": "rotate(60deg)"});
            $("#main .myCard3").css({"transform": "rotate(75deg)"});
            $("#main .myCard2").css({"transform": "rotate(90deg)"});
            $("#main .myCard").css({"transform": "rotate(105deg)"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11").css({"background":"linear-gradient(to top right, #01995D, #4E54A4, #8C3C8B, #F04225, #F5C522)"});
            $("body").css({"background-image":"url(https://setaliste.com.mk/wp-content/uploads/2017/08/Sky.jpg)"})


            $("#mainView .myCard11").css({"z-index":"0"});
            $("#mainView .myCard10").css({"z-index":"0"});
            $("#mainView .myCard9").css({"z-index":"0"});
            $("#mainView .myCard8").css({"z-index":"0"});
            $("#mainView .myCard7").css({"z-index":"10"});
            $("#mainView .myCard6").css({"z-index":"0"});
            $("#mainView .myCard5").css({"z-index":"0"});
            $("#mainView .myCard4").css({"z-index":"0"});
            $("#mainView .myCard3").css({"z-index":"0"});
            $("#mainView .myCard2").css({"z-index":"0"});
            $("#mainView .myCard").css({"z-index":"0"});
        }
    })

    $("#main .myCard6").click(function(){
        if( $("#main .myCard6").css({"transform":"rotate(1deg)"})){
            $("#main .myCard6").css({"transform": "rotate(0deg)"});
            $("#main .myCard11").css({"transform": "rotate(-75deg)"});
            $("#main .myCard10").css({"transform": "rotate(-60deg)"});
            $("#main .myCard9").css({"transform": "rotate(-45deg)"});
            $("#main .myCard8").css({"transform": "rotate(-30deg)"});
            $("#main .myCard7").css({"transform": "rotate(-15deg)"});
            $("#main .myCard5").css({"transform": "rotate(30deg)"});
            $("#main .myCard4").css({"transform": "rotate(45deg)"});
            $("#main .myCard3").css({"transform": "rotate(60deg)"});
            $("#main .myCard2").css({"transform": "rotate(75deg)"});
            $("#main .myCard").css({"transform": "rotate(90deg)"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11").css({"background":"linear-gradient(to top, #04355a, #5fa9e2)"});
            $("body").css({"background-image":"url(https://wallpaperstock.net/ein-loch-in-wallpapers_4857_1680x1050.jpg)"})



            $("#mainView .myCard11").css({"z-index":"0"});
            $("#mainView .myCard10").css({"z-index":"0"});
            $("#mainView .myCard9").css({"z-index":"0"});
            $("#mainView .myCard8").css({"z-index":"0"});
            $("#mainView .myCard7").css({"z-index":"0"});
            $("#mainView .myCard6").css({"z-index":"10"});
            $("#mainView .myCard5").css({"z-index":"0"});
            $("#mainView .myCard4").css({"z-index":"0"});
            $("#mainView .myCard3").css({"z-index":"0"});
            $("#mainView .myCard2").css({"z-index":"0"});
            $("#mainView .myCard").css({"z-index":"0"});
        }
    })

    $("#main .myCard5").click(function(){
        if( $("#main .myCard5").css({"transform":"rotate(15deg)"})){
            $("#main .myCard5").css({"transform": "rotate(0deg)"});
            $("#main .myCard11").css({"transform": "rotate(-90deg)"});
            $("#main .myCard10").css({"transform": "rotate(-75deg)"});
            $("#main .myCard9").css({"transform": "rotate(-60deg)"});
            $("#main .myCard8").css({"transform": "rotate(-45deg)"});
            $("#main .myCard7").css({"transform": "rotate(-30deg)"});
            $("#main .myCard6").css({"transform": "rotate(-15deg)"});
            $("#main .myCard4").css({"transform": "rotate(30deg)"});
            $("#main .myCard3").css({"transform": "rotate(45deg)"});
            $("#main .myCard2").css({"transform": "rotate(60deg)"});
            $("#main .myCard").css({"transform": "rotate(75deg)"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11").css({"background":"linear-gradient(to top, #ffa703, #f3dcb0)"});
            $("body").css({"background-image":"url(http://jonvilma.com/images/red-20.jpg)"})



            $("#mainView .myCard11").css({"z-index":"0"});
            $("#mainView .myCard10").css({"z-index":"0"});
            $("#mainView .myCard9").css({"z-index":"0"});
            $("#mainView .myCard8").css({"z-index":"0"});
            $("#mainView .myCard7").css({"z-index":"0"});
            $("#mainView .myCard6").css({"z-index":"0"});
            $("#mainView .myCard5").css({"z-index":"10"});
            $("#mainView .myCard4").css({"z-index":"0"});
            $("#mainView .myCard3").css({"z-index":"0"});
            $("#mainView .myCard2").css({"z-index":"0"});
            $("#mainView .myCard").css({"z-index":"0"});
        }
    })

    $("#main .myCard4").click(function(){
        if( $("#main .myCard4").css({"transform":"rotate(30deg)"})){
            $("#main .myCard4").css({"transform": "rotate(0deg)"});
            $("#main .myCard11").css({"transform": "rotate(-105deg)"});
            $("#main .myCard10").css({"transform": "rotate(-90deg)"});
            $("#main .myCard9").css({"transform": "rotate(-75deg)"});
            $("#main .myCard8").css({"transform": "rotate(-60deg)"});
            $("#main .myCard7").css({"transform": "rotate(-45deg)"});
            $("#main .myCard6").css({"transform": "rotate(-30deg)"});
            $("#main .myCard5").css({"transform": "rotate(-15deg)"});
            $("#main .myCard3").css({"transform": "rotate(30deg)"});
            $("#main .myCard2").css({"transform": "rotate(45deg)"});
            $("#main .myCard").css({"transform": "rotate(60deg)"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11").css({"background":"linear-gradient(to top, #3232fa, #c1c1ff)"});
            $("body").css({"background-image":"url(https://wallpapertag.com/wallpaper/full/d/5/7/142890-cool-background-designs-2560x1600-for-iphone-5s.jpg)"})


            $("#mainView .myCard11").css({"z-index":"0"});
            $("#mainView .myCard10").css({"z-index":"0"});
            $("#mainView .myCard9").css({"z-index":"0"});
            $("#mainView .myCard8").css({"z-index":"0"});
            $("#mainView .myCard7").css({"z-index":"0"});
            $("#mainView .myCard6").css({"z-index":"0"});
            $("#mainView .myCard5").css({"z-index":"0"});
            $("#mainView .myCard4").css({"z-index":"10"});
            $("#mainView .myCard3").css({"z-index":"0"});
            $("#mainView .myCard2").css({"z-index":"0"});
            $("#mainView .myCard").css({"z-index":"0"});
        }
    })

    $("#main .myCard3").click(function(){
        if( $("#main .myCard3").css({"transform":"rotate(45deg)"})){
            $("#main .myCard3").css({"transform": "rotate(0deg)"});
            $("#main .myCard11").css({"transform": "rotate(-120deg)"});
            $("#main .myCard10").css({"transform": "rotate(-105deg)"});
            $("#main .myCard9").css({"transform": "rotate(-90deg)"});
            $("#main .myCard8").css({"transform": "rotate(-75deg)"});
            $("#main .myCard7").css({"transform": "rotate(-60deg)"});
            $("#main .myCard6").css({"transform": "rotate(-45deg)"});
            $("#main .myCard5").css({"transform": "rotate(-30deg)"});
            $("#main .myCard4").css({"transform": "rotate(-15deg)"});
            $("#main .myCard2").css({"transform": "rotate(30deg)"});
            $("#main .myCard").css({"transform": "rotate(45deg)"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11").css({"background":"linear-gradient(to top left, #120606, #78920E, #E8A60A)"});
            $("body").css({"background-image":"url(https://lh3.googleusercontent.com/proxy/QE4NVBfJrn81j24zqpMgj-FtJOn6nzMFp9TQ1rAJHVhfEmMh0_juU8_XmwKhcdgnkhf7GEi2DlMTh50=s0-d)"})




            $("#mainView .myCard11").css({"z-index":"0"});
            $("#mainView .myCard10").css({"z-index":"0"});
            $("#mainView .myCard9").css({"z-index":"0"});
            $("#mainView .myCard8").css({"z-index":"0"});
            $("#mainView .myCard7").css({"z-index":"0"});
            $("#mainView .myCard6").css({"z-index":"0"});
            $("#mainView .myCard5").css({"z-index":"0"});
            $("#mainView .myCard4").css({"z-index":"0"});
            $("#mainView .myCard3").css({"z-index":"10"});
            $("#mainView .myCard2").css({"z-index":"0"});
            $("#mainView .myCard").css({"z-index":"0"});
        }
    })

    $("#main .myCard2").click(function(){
        if( $("#main .myCard2").css({"transform":"rotate(60deg)"})){
            $("#main .myCard2").css({"transform": "rotate(0deg)"});
            $("#main .myCard11").css({"transform": "rotate(-135deg)"});
            $("#main .myCard10").css({"transform": "rotate(-120deg)"});
            $("#main .myCard9").css({"transform": "rotate(-105deg)"});
            $("#main .myCard8").css({"transform": "rotate(-90deg)"});
            $("#main .myCard7").css({"transform": "rotate(-75deg)"});
            $("#main .myCard6").css({"transform": "rotate(-60deg)"});
            $("#main .myCard5").css({"transform": "rotate(-45deg)"});
            $("#main .myCard4").css({"transform": "rotate(-30deg)"});
            $("#main .myCard3").css({"transform": "rotate(-15deg)"});
            $("#main .myCard").css({"transform": "rotate(30deg)"});
            $("#mainExplane .container-fluid .row .col-md-12 .myCard11").css({"background":"linear-gradient(to top, #3f045a, #d75fe2)"});
            $("body").css({"background-image":"url(https://wallpaperbrowse.com/media/images/4614716-background.jpg)"})
            



            $("#mainView .myCard11").css({"z-index":"0"});
            $("#mainView .myCard10").css({"z-index":"0"});
            $("#mainView .myCard9").css({"z-index":"0"});
            $("#mainView .myCard8").css({"z-index":"0"});
            $("#mainView .myCard7").css({"z-index":"0"});
            $("#mainView .myCard6").css({"z-index":"0"});
            $("#mainView .myCard5").css({"z-index":"0"});
            $("#mainView .myCard4").css({"z-index":"0"});
            $("#mainView .myCard3").css({"z-index":"0"});
            $("#mainView .myCard2").css({"z-index":"10"});
            $("#mainView .myCard").css({"z-index":"0"});
        }
    })
   
    $("#main .myCard").click(function(){
        if( $("#main .myCard").css({"transform":"rotate(75deg)"})){
            $("#main .myCard").css({"transform": "rotate(0deg)"});
            $("#main .myCard11").css({"transform": "rotate(-150deg)"});
            $("#main .myCard10").css({"transform": "rotate(-135deg)"});
            $("#main .myCard9").css({"transform": "rotate(-120deg)"});
            $("#main .myCard8").css({"transform": "rotate(-105deg)"});
            $("#main .myCard7").css({"transform": "rotate(-90deg)"});
            $("#main .myCard6").css({"transform": "rotate(-75deg)"});
            $("#main .myCard5").css({"transform": "rotate(-60deg)"});
            $("#main .myCard4").css({"transform": "rotate(-45deg)"});
            $("#main .myCard3").css({"transform": "rotate(-30deg)"});
            $("#main .myCard2").css({"transform": "rotate(-15deg)"});
            // $("body").css({"background-image":"url(http://backgroundcheckall.com/wp-content/uploads/2017/12/cool-background-tumblr-8.jpg)"})


            $("#mainView .myCard11").css({"z-index":"0"});
            $("#mainView .myCard10").css({"z-index":"0"});
            $("#mainView .myCard9").css({"z-index":"0"});
            $("#mainView .myCard8").css({"z-index":"0"});
            $("#mainView .myCard7").css({"z-index":"0"});
            $("#mainView .myCard6").css({"z-index":"0"});
            $("#mainView .myCard5").css({"z-index":"0"});
            $("#mainView .myCard4").css({"z-index":"0"});
            $("#mainView .myCard3").css({"z-index":"0"});
            $("#mainView .myCard2").css({"z-index":"0"});
            $("#mainView .myCard").css({"z-index":"10"});
        }
    })


    
});
