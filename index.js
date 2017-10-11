
$(".img1" ).animate({backgroundPositionX: '100%',
      backgroundPositionY: '50%'}
  , 2000 ).delay(2000).animate({opacity: 0}, 0, function() {
        $(this)
            .css({'background-image': 'url("https://i.imgur.com/PcbBMsK.png")'})
            .animate({opacity: 1},0);
    })
$(".overlay").delay(3000).animate({width: "100%",
  left: "0"},1000).delay(1000).animate({"width":"0%"},2000).delay(2000);