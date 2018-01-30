$(document).ready(function(){"use strict";var $colorsHTML='<style>.styleSwitcher {background:#fff; position:fixed; top:200px; width:155px;left:-157px;z-index:9999}'+'.switcher.dark{background:#555;}'+'.styleSwitcher ul li{display:inline-block;}'+'.styleSwitcher ul {display:block; padding:10px; margin:0}'+'.styleSwitcher ul li a {display:block; text-indent:-3000px; overflow:hidden; border:1px solid #555; width:20px; height:20px; margin:0 5px 5px 0;}'+'.styleSwitcher h1 {padding:0 0 0 10px;font-size:14px; text-transform:uppercase; color:#555;border:none; margin:0; text-align:left;}'+'.styleSwitcher h1:after {content:none;}'+'.styleSwitcher #showHideSwitcher{outline:none; width:50px; height:50px; position:absolute; right:-50px; background:#fff; top:0; font-size:24px; text-align:center; line-height:50px; color:#555;}'+'</style>'+'<div class="styleSwitcher">'+'<a href="#" id="showHideSwitcher"><i class="icon-glyph-15"></i></a>'+'<h1>style switcher</h1><ul class="switcher">'+'<li><a href="css/orange.css" style="background:#F86D18">Orange</a></li>'+'<li><a href="css/yellow.css" style="background:#FFCC00">Yellow</a></li>'+'<li><a href="css/sea-green.css" style="background:#3CB6B6">Sea green</a></li>'+'<li><a href="css/green.css" style="background:#99C250">Green</a></li>'+'<li><a href="css/blue.css" style="background:#136597">Dark blue</a></li>'+'<li><a href="css/light.css" style="background:#44BCDD">Light blue</a></li>'+'<li><a href="css/pink.css" style="background:#F897F5">Pink</a></li>'+'<li><a href="css/coffee.css" style="background:#A38757">Coffee</a></li>'+'<li><a href="css/red.css" style="background:#E44832">Red</a></li>'+'<li><a href="css/purple.css" style="background:#C44AD0">Purple</a></li>'+'</ul>'+'</div>';$("body").append($colorsHTML);var s=document.createElement("script");s.type="text/javascript";s.src="js-plugin/jquery-cookie/jquery.cookie.js";$("body").append(s);if($.cookie("css")){$("#colors").attr("href",$.cookie("css"));}
$(".switcher li a").click(function(){$("#colors").attr("href",$(this).attr("href"));$.cookie("css",$(this).attr("href"));return false;});$('#showHideSwitcher').click(function(e){if($('.styleSwitcher').css('left')==='-157px'){$('.styleSwitcher').animate({'left':0},300,'easeOutQuart',function(){});}else{$('.styleSwitcher').animate({'left':-157},300,'easeInQuart',function(){});}
e.preventDefault();});});window.onload=function(){"use strict";gaSSDSLoad("");};var isMobile=false;var isDesktop=false;$(window).on("load resize",function(e){if(Modernizr.mq('only all and (max-width: 767px)')){isMobile=true;}else{isMobile=false;}
if(Modernizr.mq('only all and (max-width: 1024px)')){isDesktop=false;}else{isDesktop=true;}
toTop(isMobile);});$(document).ready(function(){"use strict";if($('#fullScreenWrapper').length){fullscreenImage($('#fullScreenWrapper'),'activated');}
var $starter=$(window).height()-($('#mainHeader').height());$(window).scroll(function(){if($('#fullScreen').length)
{if($(window).scrollTop()>=$starter){$('#mainHeader').slideDown();}else if($(window).scrollTop()==0){$('#mainHeader').slideUp();}}});if(!Modernizr.input.placeholder){$('[placeholder]').focus(function(){var input=$(this);if(input.val()==input.attr('placeholder')){input.val('');input.removeClass('placeholder');}}).blur(function(){var input=$(this);if(input.val()==''||input.val()==input.attr('placeholder')){input.addClass('placeholder');input.val(input.attr('placeholder'));}}).blur();$('[placeholder]').parents('form').submit(function(){$(this).find('[placeholder]').each(function(){var input=$(this);if(input.val()==input.attr('placeholder')){input.val('');}})});}
if($("a.image-link").length){$("a.image-link").click(function(e){var items=[];items.push({src:$(this).attr('href')});if($(this).data('gallery')){var $arraySrc=$(this).data('gallery').split(',');$.each($arraySrc,function(i,v){items.push({src:v});});}
$.magnificPopup.open({type:'image',mainClass:'mfp-fade',items:items,gallery:{enabled:true}});e.preventDefault();});}
if($("a.image-iframe").length){$('a.image-iframe').magnificPopup({type:'iframe',mainClass:'mfp-fade'});}
$('.tips').tooltip({placement:'top'});$('.accordion').on('show hide',function(e){$('.accordion-toggle').removeClass('active');$(e.target).siblings('.accordion-heading').find('.accordion-toggle').addClass('active');$(e.target).siblings('.accordion-heading').find('.accordion-toggle i').toggleClass('icon-plus icon-minus',200);});$('.slideContact').click(function(e){if($(window).width()>=800){$('#contact').slideToggle('normal','easeInQuad',function(){$('#contactinfoWrapper').css('margin-left',0);$('#mapSlideWrapper').css('margin-left',3000);$('#contactinfoWrapper').fadeToggle();});$('#closeContact').fadeToggle();return false;}else{return true;}
e.preventDefault();});$('#closeContact').click(function(e){$('#contactinfoWrapper').fadeOut('normal','easeInQuad',function(){$('#contactinfoWrapper').css('margin-left',0);$('#mapSlideWrapper').css('margin-left',3000);});$('#contact').slideUp('normal','easeOutQuad');$(this).fadeOut();e.preventDefault();});$('#mapTrigger').click(function(e){$('#mapSlideWrapper').css('display','block');initialize('mapWrapper');$('#contactinfoWrapper, #contactinfoWrapperPage').animate({marginLeft:'-2000px'},400,function(){});$('#mapSlideWrapper').animate({marginLeft:'25px'},400,function(){});appendBootstrap();e.preventDefault();});if($('#mapWrapper').length)
appendBootstrap();$('#mapTriggerLoader').click(function(e){$('#mapSlide').css('display','block');$('#contactSlide').animate({marginLeft:'-2000px'},400,function(){});$('#mapSlide').animate({marginLeft:'0'},400,function(){$('#contactSlide').css('display','none');});appendBootstrap();e.preventDefault();});$('#mapReturn').click(function(e){$('#contactSlide').css('display','block');$('#mapSlide').animate({marginLeft:'3000px'},400,function(){});$('#contactSlide').animate({marginLeft:'0'},400,function(){$('#mapSlide').css('display','none');});e.preventDefault();});if($('#portfolio-carousel').length){$("#portfolio-carousel").owlCarousel();}
if($('.nekoDataOwl').length){$('.nekoDataOwl').each(function(index){$(this).owlCarousel({items:$(this).data('neko_items'),navigation:$(this).data('neko_navigation'),singleItem:$(this).data('neko_singleitem'),autoPlay:$(this).data('neko_autoplay'),itemsScaleUp:$(this).data('neko_itemsscaleup'),navigationText:['<i class="icon-left-open"></i>','<i class="icon-right-open"></i>'],pagination:$(this).data('neko_pagination'),paginationNumbers:$(this).data('neko_paginationnumbers'),autoHeight:$(this).data('neko_autoheight'),mouseDrag:$(this).data('neko_mousedrag'),transitionStyle:$(this).data('neko_transitionstyle'),responsive:true});});}
if($('.imgHover').length){$('.imgHover article').hover(function(){var $this=$(this);var fromTop=($('.imgWrapper',$this).height()/2 - $('.iconLinks', $this).height()/2);
$('.iconLinks',$this).css('margin-top',fromTop);$('.mediaHover',this).stop(1).animate({opacity:1},200,function(){});$('.iconLinks',$this).css('display','block');if(Modernizr.csstransitions){$('.iconLinks a').addClass('animated');$('.iconLinks a',$this).removeClass('flipOutX');$('.iconLinks a:first-child',$this).addClass('fadeInLeftBig');$('.iconLinks a:not(:first-child)',$this).addClass('fadeInRightBig');}else{$('.iconLinks',$this).stop(true,false).fadeIn('fast');}},function(){var $this=$(this);$('.mediaHover',this).stop(1).animate({opacity:0},200,function(){});if(Modernizr.csstransitions){$('.iconLinks a:first-child',$this).removeClass('fadeInLeftBig');$('.iconLinks a:not(:first-child)',$this).removeClass('fadeInRightBig');}else{$('.iconLinks',$this).stop(true,false).fadeOut('fast');}});}
$('.socialIcon').hover(function(){$(this).stop(true,true).addClass('socialHoverClass',300);},function(){$(this).removeClass('socialHoverClass',300);});$('.tabs li, .accordion h2').hover(function(){$(this).stop(true,true).addClass('speBtnHover',300);},function(){$(this).stop(true,true).removeClass('speBtnHover',100);});$('.alert').delegate('button','click',function(){$(this).parent().fadeOut('fast');});if($('.colorHover').length){var array=[];$('.colorHover').hover(function(){array[0]=$(this).attr('src');$(this).attr('src',$(this).attr('src').replace('-off',''));},function(){$(this).attr('src',array[0]);});}
if($('.boxIcon').length){$('.boxIcon').hover(function(){var $this=$(this);$this.css('opacity','1');$this.addClass('hover');$('.boxContent>p').css('bottom','-50px');$this.find('.boxContent>p').stop(true,false).css('display','block');$this.find('.iconWrapper i').addClass('triggeredHover');$this.find('.boxContent>p').stop(true,false).animate({'margin-top':'0px'},300,function(){});},function(){var $this=$(this);$this.removeClass('hover');$this.find('.boxContent>p').stop(true,false).css('display','none');$this.find('.boxContent>p').css('margin-top','250px');$this.find('.iconWrapper i').removeClass('triggeredHover');});}
$('#quoteTrigger').click(function(e){if(!$('#quoteFormWrapper').is(':visible')){$('html, body').animate({scrollTop:$("#quoteWrapper").offset().top},300);}
var $this=$(this);$('#quoteFormWrapper').slideToggle('fast',function(){$this.text($('#quoteFormWrapper').is(':visible')?"Close form":"I have a project");});e.preventDefault();});if($('#shareme').length){var params={url:($('#shareme').data('url')!='')?$('#shareme').data('url'):window.location.href,title:$('#shareme').data('title'),desc:$('#shareme').data('desc'),via:'LittleNeko1',hashtags:'premium template, awesome web design'},links=SocialShare.generateSocialUrls(params),$target=$('#shareme');$target.html('');for(var i=0;i<links.length;i++){var link=links[i];$target.append('<a class="neko-share-btn btn '+ link.class+'" target="_blank" href="'+ link.url+'" title="'+ link.name+'"><i class="'+link.icon+'" style="position"></i></a>');}
$target.find('a').on('click',SocialShare.doPopup);}
if($('.previewTrigger').length){$('.mask').css('height',$('.previewTrigger').height());$('.mask').css('width',$('.previewTrigger').width());$('.previewTrigger').hover(function(){var $this=$(this);$this.children('.mask').fadeIn('fast');if(Modernizr.csstransitions){$('.iconWrapper',$this).addClass('animated');$('.iconWrapper',$this).css('display','block');$('.iconWrapper',$this).removeClass('flipOutX');$('.iconWrapper',$this).addClass('bounceInDown');}else{$('.iconWrapper',$this).stop(true,false).fadeIn('fast');}},function(){var $this=$(this);$this.children('.mask').fadeOut('fast');if(Modernizr.csstransitions){$('.iconWrapper',$this).removeClass('bounceInDown');$('.iconWrapper',$this).addClass('flipOutX');$('.iconWrapper',$this).css('display','none');$('.iconWrapper',$this).removeClass('animated');}else{$('.iconWrapper',$this).stop(true,false).fadeOut('fast');}});}
$('.nav a').on('click',function(){if($('.navbar-toggle').css('display')!='none')
$('.navbar-toggle').click();});if($('.activateAppearAnimation').length){nekoAnimAppear();$('.reloadAnim').click(function(e){$(this).parent().parent().find('img').removeClass().addClass('img-responsive');nekoAnimAppear();e.preventDefault();});}
if($('#superslides').length){var $slides=$('#superslides');Hammer($slides[0]).on("swipeleft",function(e){$slides.data('superslides').animate('next');});Hammer($slides[0]).on("swiperight",function(e){$slides.data('superslides').animate('prev');});$slides.superslides({inherit_width_from:'#fullScreenWrapper',inherit_height_from:'#fullScreenWrapper',play:4000});}});$(window).load(function(){"use strict";$('#status').fadeOut('slow',function(){$('#preloader').fadeOut('slow',function(){});});if($('.isotopeWrapper').length){var $container=$('.isotopeWrapper');var $resize=$('.isotopeWrapper').attr('id');$container.isotope({layoutMode:'sloppyMasonry',itemSelector:'.isotopeItem',resizable:false,});$('#filter a').click(function(e){e.preventDefault();$('#filter a').removeClass('current');$(this).addClass('current');var selector=$(this).attr('data-filter');$container.isotope({filter:selector,animationOptions:{duration:300,easing:'easeOutQuart'}});if(isDesktop===true&&$('[id^="parallaxSlice"]').length){setTimeout(function(){$.stellar('refresh');},800);}
return false;});$(window).smartresize(function(){$container.isotope({masonry:{columnWidth:$container.width()/ $resize
}});});}
$('.iconBoxV3 a').hover(function(){if(Modernizr.csstransitions){$(this).stop(false,true).toggleClass('hover',150);$('i',this).css('-webkit-transform','rotateZ(360deg)');$('i',this).css('-moz-transform','rotateZ(360deg)');$('i',this).css('-o-transform','rotateZ(360deg)');$('i',this).css('transform','rotateZ(360deg)');}else{$(this).stop(false,true).toggleClass('hover',150);}},function(){if(Modernizr.csstransitions){$(this).stop(false,true).toggleClass('hover',150);$('i',this).css('-webkit-transform','rotateZ(0deg)');$('i',this).css('-moz-transform','rotateZ(0deg)');$('i',this).css('-o-transform','rotateZ(0deg)');$('i',this).css('transform','rotateZ(0deg)');}else{$(this).stop(false,true).toggleClass('hover',150);}});if($('.scrollMenu').length){$('#globalWrapper').on('click','#mainHeader .nav li a, .scrollLink',function(event){var $anchor=$(this),content=$anchor.attr('href'),checkURL=content.match(/^#([^\/]+)$/i);if(checkURL){event.preventDefault();var Hheight=($('.fixed-header').length)?$('#mainHeader').outerHeight(true):$('.navbar-header').height(),computedOffset=$($anchor.attr('href')).offset().top- parseInt(Hheight)+1;$('html, body').stop().animate({scrollTop:computedOffset+"px"},1200,'easeInOutExpo');}else{}});var isMobile=false;if(Modernizr.mq('only all and (max-width: 1024px)')){isMobile=true;}
if(isMobile===false&&$('[id^="parallaxSlice"]').length&&!$('.ie8').length)
{$(window).stellar({horizontalScrolling:false,responsive:true,verticalOffset:0,horizontalOffset:0});}}});function nekoAnimAppear(){$("[data-nekoAnim]").each(function(){var $this=$(this);$this.addClass("nekoAnim-invisible");if($(window).width()>767){$this.appear(function(){var delay=($this.data("nekodelay")?$this.data("nekodelay"):1);if(delay>1)$this.css("animation-delay",delay+"ms");$this.addClass("nekoAnim-animated");$this.addClass('nekoAnim-'+$this.data("nekoanim"));setTimeout(function(){$this.addClass("nekoAnim-visible");},delay);},{accX:0,accY:-150});}else{$this.addClass("nekoAnim-visible");}});}
jQuery(function(){"use strict";if(jQuery("#contactfrm").length){jQuery("#contactfrm").validate({errorPlacement:function(error,element){error.insertBefore(element);},submitHandler:function(form){jQuery(form).ajaxSubmit({target:".result"});},onkeyup:false,onclick:false,highlight:function(element){$(element).closest('.form-group').addClass('has-error');},errorElement:"div",success:function(element){element.closest('.form-group').removeClass('has-error');},rules:{name:{required:true,minlength:3},email:{required:true,email:true},phone:{required:true,minlength:10,digits:true},comment:{required:true,minlength:10,maxlength:350}}});}
if(jQuery("#projectQuote").length){jQuery("#projectQuote").validate({errorPlacement:function(error,element){error.insertBefore(element);},submitHandler:function(form){jQuery(form).ajaxSubmit({target:".quoteResult"});},onkeyup:false,rules:{name:{required:true,minlength:3},email:{required:true,email:true},company:{required:true,minlength:2},quoteType:{required:true},comment:{required:true,minlength:10,maxlength:350}}});}});function animateTxt(curSlide,action){"use strict";if(action==='in'){var i=0;var animaDelay=0;$('.slideN'+curSlide+':not([class*=clone])>.caption').css('display','block');$('.slideN'+curSlide+':not([class*=clone])>.caption>div').each(function(){if(Modernizr.csstransitions){$(this).css('-webkit-animation-delay',animaDelay+'s');$(this).css('-moz-animation-delay',animaDelay+'s');$(this).css('-0-animation-delay',animaDelay+'s');$(this).css('-ms-animation-delay',animaDelay+'s');$(this).css('animation-delay-delay',animaDelay+'s');$(this).show().addClass('animated').addClass($(this).attr('data-animation'));}else{var timing;$('.slideN'+curSlide+':not([class*=clone])>.caption>div').hide();if(i===0){timing=0;}else if(i===1){timing=300;}else{timing=300*i;}
$(this).delay(timing).fadeIn('fast');}
i++;animaDelay=animaDelay+0.2;});}else{var j=0;$('.slideN'+curSlide+':not([class*=clone])>.caption').css('display','none');$('.slideN'+curSlide+':not([class*=clone])>.caption>div').each(function(){if(Modernizr.csstransitions){$(this).removeClass($(this).attr('data-animation')).removeClass('animated').hide();}else{$(this).hide();}
j++;});}}
function appendBootstrap(){"use strict";var script=document.createElement("script");script.type="text/javascript";script.src="//maps.google.com/maps/api/js?sensor=false&callback=initialize";document.body.appendChild(script);}
function initialize(id){"use strict";var image='images/icon-map.png';var overlayTitle='Agencies';var locations=[['Madison Square Garden','4 Pennsylvania Plaza, New York, NY'],['Best town ever','Santa Cruz',36.986021,-122.02216399999998],['Located in the Midwestern United States','Kansas'],['I\'ll definitly be there one day','Chicago',41.8781136,-87.62979819999998]];id=(id===undefined)?'mapWrapper':id;var map=new google.maps.Map(document.getElementById(id),{mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:false,zoomControl:true,zoomControlOptions:{style:google.maps.ZoomControlStyle.LARGE,position:google.maps.ControlPosition.LEFT_CENTER},streetViewControl:true,scaleControl:false,zoom:14,styles:[{"featureType":"water","stylers":[{"color":"#6196AD"},]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#FCFFF5"},]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#dde1d4"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#73AB7D"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#7e7341"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#dee6e6"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]});var myLatlng;var marker,i;var bounds=new google.maps.LatLngBounds();var infowindow=new google.maps.InfoWindow({content:"loading..."});for(i=0;i<locations.length;i++){if(locations[i][2]!==undefined&&locations[i][3]!==undefined){var content='<div class="infoWindow">'+locations[i][0]+'<br>'+locations[i][1]+'</div>';(function(content){myLatlng=new google.maps.LatLng(locations[i][2],locations[i][3]);marker=new google.maps.Marker({position:myLatlng,icon:image,title:overlayTitle,map:map});google.maps.event.addListener(marker,'click',(function(){return function(){infowindow.setContent(content);infowindow.open(map,this);};})(this,i));if(locations.length>1){bounds.extend(myLatlng);map.fitBounds(bounds);}else{map.setCenter(myLatlng);}})(content);}else{var geocoder=new google.maps.Geocoder();var info=locations[i][0];var addr=locations[i][1];var latLng=locations[i][1];(function(info,addr){geocoder.geocode({'address':latLng},function(results){myLatlng=results[0].geometry.location;marker=new google.maps.Marker({position:myLatlng,icon:image,title:overlayTitle,map:map});var $content='<div class="infoWindow">'+info+'<br>'+addr+'</div>';google.maps.event.addListener(marker,'click',(function(){return function(){infowindow.setContent($content);infowindow.open(map,this);};})(this,i));if(locations.length>1){bounds.extend(myLatlng);map.fitBounds(bounds);}else{map.setCenter(myLatlng);}});})(info,addr);}}}
function gaSSDSLoad(acct){"use strict";var gaJsHost=(("https:"===document.location.protocol)?"https://ssl.":"http://www."),pageTracker,s;s=document.createElement('script');s.src=gaJsHost+'google-analytics.com/ga.js';s.type='text/javascript';s.onloadDone=false;function init(){pageTracker=_gat._getTracker(acct);pageTracker._trackPageview();}
s.onload=function(){s.onloadDone=true;init();};s.onreadystatechange=function(){if(('loaded'===s.readyState||'complete'===s.readyState)&&!s.onloadDone){s.onloadDone=true;init();}};document.getElementsByTagName('head')[0].appendChild(s);}
$(window).on("resize",function(e){if($('#fullScreenWrapper').length){fullscreenImage($('#fullScreenWrapper'),'activated');}});function fullscreenImage(obj,header){var Hheight=(header=='activated'&&$('#mainHeader').css('display')!='none')?$('#mainHeader').outerHeight(true):0;obj.css({height:$(window).height()- Hheight})}
function toTop(mobile){if(mobile==false){if(!$('#nekoToTop').length)
$('body').append('<a href="#" id="neko-to-top"><i class="icon-glyph-39"></i></a>');$(window).scroll(function(){if($(this).scrollTop()>100){$('#neko-to-top').slideDown('fast');}else{$('#neko-to-top').slideUp('fast');}});$('#neko-to-top').click(function(e){e.preventDefault();$("html, body").animate({scrollTop:0},800,'easeInOutCirc');});}else{if($('#neko-to-top').length)
$('#neko-to-top').remove();}}