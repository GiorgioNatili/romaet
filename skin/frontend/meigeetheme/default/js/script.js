jQuery.noConflict();
jQuery(window).load(function() {

	/* Fix for IE */
		if(navigator.userAgent.indexOf('IE')!=-1 && jQuery.support.noCloneEvent){
			jQuery.support.noCloneEvent = true;
		}
	/* End fix for IE */
	

	/* More Views Slider */
	if(jQuery('#more-views-slider').length){
	  jQuery('#more-views-slider').iosSlider({
		   responsiveSlideWidth: true,
		   snapToChildren: true,
		   desktopClickDrag: true,
		   infiniteSlider: true,
		   navSlideSelector: '.sliderNavi .naviItem',
		   navNextSelector: '.more-views .next',
		   navPrevSelector: '.more-views .prev'
		 });
		 
		
	 }
	 function more_view_set_height(){
		if(jQuery('#more-views-slider').length){
			var more_view_height = 0;
			jQuery('#more-views-slider li a').each(function(){
			 if(jQuery(this).height() > more_view_height){
			  more_view_height = jQuery(this).height();
			 }
			})
			jQuery('#more-views-slider').css('min-height', more_view_height+15);
		}
	 }
	 /* More Views Slider */

	 /* Related Block Slider */
	  if(jQuery('#block-related-slider').length) {
	  jQuery('#block-related-slider').iosSlider({
		   responsiveSlideWidth: true,
		   snapToChildren: true,
		   desktopClickDrag: true,
		   infiniteSlider: true,
		   navSlideSelector: '.sliderNavi .naviItem',
		   navNextSelector: '.block-related .next',
		   navPrevSelector: '.block-related .prev'
		 });
	 } 
	 
	 function related_set_height(){
		var related_height = 0;
		jQuery('#block-related-slider li.item').each(function(){
		 if(jQuery(this).height() > related_height){
		  related_height = jQuery(this).height();
		 }
		})
		jQuery('#block-related-slider').css('min-height', related_height+30);
	}
	 /* Related Block Slider */
	 
	 /* Wishlist Block Slider */
	 function wishlist_slider(){
	  jQuery('#wishlist-slider .es-carousel').iosSlider({
		responsiveSlideWidth: true,
		snapToChildren: true,
		desktopClickDrag: true,
		infiniteSlider: true,
		navNextSelector: '#wishlist-slider .next',
		navPrevSelector: '#wishlist-slider .prev'
	  });
	 }
	 
	 function wishlist_set_height(){
		var wishlist_height = 0;
		jQuery('#wishlist-slider .es-carousel li').each(function(){
		 if(jQuery(this).height() > wishlist_height){
		  wishlist_height = jQuery(this).height();
		 }
		})
		jQuery('#wishlist-slider .es-carousel').css('min-height', wishlist_height+2);
	 }
	 
	 if(jQuery('#wishlist-slider').length){
	  whs_first_set = true;
	  wishlist_slider();
	 }
	 /* Wishlist Block Slider */
	
   /* Layered Navigation Accorion */
   if (jQuery('#layered_navigation_accordion').length) {
		jQuery('.filter-label').each(function(){
			jQuery(this).prepend('<div class="btn-nav"></div>');
		});
		jQuery('.filter-label').each(function(){
			jQuery(this).on('click', function(){
				jQuery(this).toggleClass('closed').next().slideToggle(200);
			})
		});
     
   }
   /* Layered Navigation Accorion */


  /* Product Collateral Accordion */
  if (jQuery('#collateral-accordion').length) {
	  jQuery('#collateral-accordion > div.box-collateral').hide();  
	  jQuery('#collateral-accordion > h2').click(function() {
		jQuery(this).parent().find('h2').removeClass('active');
		jQuery(this).addClass('active');
		
	    var nextDiv = jQuery(this).next();
	    var visibleSiblings = nextDiv.siblings('div:visible');
	 
	    if (visibleSiblings.length ) {
	      visibleSiblings.slideUp(300, function() {
	        nextDiv.slideToggle(500);
	      });
	    } else {
	       nextDiv.slideToggle(300);
	    }
	  });
  }
  /* Product Collateral Accordion */

  /* My Cart Accordion */
  if (jQuery('#cart-accordion').length) {
	  jQuery('#cart-accordion > div.accordion-content').hide();	  
	  
	  jQuery('#cart-accordion > h3.accordion-title').wrapInner('<span/>').click(function(){
	  
		var accordion_title_check_flag = false;
		if(jQuery(this).hasClass('active')){accordion_title_check_flag = true;}
		jQuery('#cart-accordion > h3.accordion-title').removeClass('active');
		if(accordion_title_check_flag == false){
			jQuery(this).toggleClass('active');
	    }
		
		var nextDiv = jQuery(this).next();
	    var visibleSiblings = nextDiv.siblings('div:visible');
	 
	    if (visibleSiblings.length ) {
	      visibleSiblings.slideUp(300, function() {
	        nextDiv.slideToggle(500);
	      });
	    } else {
	       nextDiv.slideToggle(300);
	    }
		
	  });
	  
	  
  }
  /* My Cart Accordion */
  
  /* Coin Slider */

	/* Fancybox */
	if (jQuery.fn.fancybox) {
		jQuery('.fancybox').fancybox();
	}
	/* Fancybox */

	/* Zoom */
	if (jQuery('#zoom').length) {
		jQuery('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
  	}
	/* Zoom */
		
	/* Responsive */
	var responsiveflag = false;
	var topSelectFlag = false;
	var menu_type = jQuery('#nav').attr('class');
	
	function mobile_menu(mode){
		switch(mode)
		 {
		 case 'animate':
		   if(!jQuery('.nav-container').hasClass('mobile')){
				jQuery(".nav-container").addClass('mobile');
				jQuery('.nav-container > ul').slideUp('fast');
				jQuery('.menu-button').removeClass('active');
				jQuery('.menu-button').on('click', function(){
					jQuery(this).toggleClass('active');
					jQuery('.nav-container > ul').slideToggle('medium');
				});
			   jQuery('.nav-container > ul a').each(function(){
					if(jQuery(this).next('ul').length){
						jQuery(this).before('<span class="menu-item-button" />')
						jQuery(this).next('ul').slideUp('fast');
						jQuery(this).prev('.menu-item-button').on('click', function(){
							jQuery(this).toggleClass('active');
							jQuery(this).nextAll('ul').slideToggle('medium');
						});
					}
			   });
		   }
		   break;
		 default:
				jQuery(".nav-container").removeClass('mobile');
				jQuery('.menu-button').off();
				jQuery('.nav-container > ul').slideDown('fast');
				jQuery('.nav-container .menu-item-button').each(function(){
					jQuery(this).nextAll('ul').slideDown('fast');
					jQuery(this).remove();
				});
		 }
	}
	
	function accordion (status){
		if(status == 'enable'){
			jQuery('.footer-columns-block h3, aside.sidebar section:not(.opc-block-progress) header').on('click', function(){
				jQuery(this).parent().toggleClass("active").find(".custom-footer-content, .block-content").slideToggle('medium');
				wishlist_slider();
			})
			if(!jQuery('aside.sidebar section:not(.opc-block-progress) header .sidebar-block-button').length){
				jQuery('aside.sidebar section:not(.opc-block-progress) header').prepend('<div class="sidebar-block-button" />');
			}
			jQuery('.footer-columns-block, aside.sidebar').addClass('accordion').find(".custom-footer-content, section:not(.opc-block-progress) .block-content").slideUp('fast');
		}else{
			jQuery('.footer-columns-block h3, aside.sidebar header').off().parent().removeClass("active").find(".custom-footer-content, .block-content").slideDown('fast');
			jQuery('.footer-columns-block, aside.sidebar').removeClass('accordion');
		}
	}
	function toDo(){
		if (jQuery(document.body).width() < 767 && responsiveflag == false){
		    accordion('enable');
			
			/* Top Menu Select */
			if(topSelectFlag == false){
				jQuery('.nav-container .sbSelector').wrapInner('<span />').prepend('<span />');
				topSelectFlag = true;
			}
			jQuery('.nav-container .sbOptions li a').on('click', function(){
				if(!jQuery('.nav-container .sbSelector span').length){
					jQuery('.nav-container .sbSelector').wrapInner('<span />').prepend('<span />');
				}
			});
			/* //Top Menu Select */
			responsiveflag = true;
		}
		else if (jQuery(document.body).width() > 767){
			accordion('disable');
			responsiveflag = false;
		}
	}
	function replacingClass () {

	   if (jQuery(document.body).width() < 480) { //Mobile
			mobile_menu('animate');
	   }
	   if (jQuery(document.body).width() > 479 && jQuery(document.body).width() < 768) { //iPhone
			mobile_menu('animate');
	   }  
	   else if (jQuery(document.body).width() > 767) { //Desktop
			mobile_menu('reset');
	   }
		if (jQuery(document.body).width() > 767 && jQuery(document.body).width() < 977){ //Tablet
			mobile_menu('reset');
	    }
		if (jQuery(document.body).width() > 1279){ //Extra Large
			mobile_menu('reset');
		}
	}
	replacingClass();
	toDo();
	more_view_set_height();
	wishlist_set_height();
	related_set_height();
	//menuHeight2();
	jQuery(window).resize(function(){toDo(); replacingClass(); more_view_set_height(); wishlist_set_height(); related_set_height();});
	/* Responsive */
	
	/* Top Menu */
	function menuHeight2 () {
		var menu_min_height = 0;
		jQuery('#nav li.tech').css('height', 'auto');
		jQuery('#nav li.tech').each(function(){
			if(jQuery(this).height() > menu_min_height){
				menu_min_height = jQuery(this).height();
			}
		});		
		jQuery('#nav li.tech').each(function(){
			jQuery(this).css('height', menu_min_height + 'px');
		});
	}
	
	/* Top Selects */
	function option_class_add(items, is_selector){
		jQuery(items).each(function(){
			if(is_selector){
				jQuery(this).removeAttr('class'); 
				jQuery(this).addClass('sbSelector');
			}			
			stripped_string = jQuery(this).html().replace(/(<([^>]+)>)/ig,"");
			RegEx=/\s/g;
			stripped_string=stripped_string.replace(RegEx,"");
			jQuery(this).addClass(stripped_string.toLowerCase());
			if(is_selector){
				tags_add();
			}
		});
	}
	option_class_add('.form-language .sbOptions li a, .form-language .sbSelector, .form-currency .sbOptions li a, .form-currency .sbSelector', false);
	jQuery('.form-language .sbOptions li a, .form-currency .sbOptions li a').on('click', function(){
		option_class_add('.form-language .sbSelector, .form-currency .sbSelector', true);
	});	
	function tags_add(){
		jQuery('.form-language .sbSelector, .form-currency .sbSelector').each(function(){
			if(!jQuery(this).find('span.text').length){
				jQuery(this).wrapInner('<span class="text" />').append('<span />').find('span:last').wrapInner('<span />');
			}
		});
	}
	tags_add();
	/* //Top Selects */	
	
	if (jQuery('body').hasClass('retina-ready')) {
		
		if(window.devicePixelRatio > 1){
			jQuery('body').addClass('retina-device');
		}
	
		/* Mobile Devices */
		if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i))){
			
			/* Mobile Devices Class */
			jQuery('body').addClass('mobile-device');
			
			/* Menu */
			jQuery(".nav-container:not('.mobile') #nav li").on({
	            click: function (){
	                if ( !jQuery(this).hasClass('touched') && jQuery(this).children('ul').length ){
						jQuery(this).addClass('touched');
						clearTouch(jQuery(this));
						return false;
	                }
	            }
	        });
			
			/* Clear Touch Function */
			function clearTouch(handlerObject){
				jQuery('body').on('click', function(){
					handlerObject.removeClass('touched closed');
					if(handlerObject.parent().attr('id') == 'categories-accordion'){
						handlerObject.children('ul').slideToggle(200);
					}
					jQuery('body').off();
				});
				handlerObject.click(function(event){
					event.stopPropagation();
				});
				handlerObject.parent().click(function(){
					handlerObject.removeClass('touched');
				});
				handlerObject.siblings().click(function(){
					handlerObject.removeClass('touched');
				});
			}
			
			var mobileDevice = true;
		}else{
			var mobileDevice = false;
		}

		
		//images with custom attributes
		if (pixelRatio > 1) {
	        jQuery('img[data-srcX2]').each(function(){
	            jQuery(this).attr('src',jQuery(this).attr('data-srcX2'));
	        });
	    }
    }
	
	/* Categories Accorion */
	if (jQuery('#categories-accordion').length){
		jQuery('#categories-accordion li.level-top.parent ul.level0').before('<div class="btn-cat"></div>');
		if(mobileDevice == true){
			jQuery('#categories-accordion li.level-top.parent').each(function(){
				jQuery(this).on({
					click: function (){
						if(!jQuery(this).hasClass('touched')){
							jQuery(this).addClass('touched closed').children('ul').slideToggle(200);
							clearTouch(jQuery(this));
							return false;
						}
					}
				});
			});
		}else{
			jQuery('#categories-accordion li.level-top.parent .btn-cat').each(function(){
				jQuery(this).toggle(function(){
					jQuery(this).addClass('closed').next().slideToggle(200);
				},function(){
					jQuery(this).removeClass('closed').next().slideToggle(200);
				})
			});
		}
	}
	/* Categories Accorion */
	
	/* Header Selects */
	jQuery(".form-language select, .form-currency select").selectbox();
	
	/* Log In/Out top links */
	jQuery('header#header .links li a.top-link-login, header#header .links li a.top-link-logout').prepend('<span class="link-marker" />').parent().css('display', 'block');
	if(!jQuery('header#header .header-links-wrapper .item-link .dropdown-links').length){
		jQuery('header#header .links li a.top-link-login').prepend('<div class="item-link-shadow" />');
	}
	
	function topLinks(){
		
		if(jQuery('.header-slider-container').length){
			if(jQuery(document.body).width() > 767){
				if(!jQuery('body.header-slider').length){
					jQuery('body').addClass('header-slider');
					if(!jQuery('.header-slider header#header .header-links-wrapper .item-link .item-shadow').length){
						jQuery('.header-slider header#header .header-links-wrapper .item-link').prepend('<div class="item-shadow" />');
					}
				}
			}else{
				jQuery('body').removeClass('header-slider');
			}
		}
	
	
		if(jQuery('body').hasClass('header-slider')){
			var isHeaderSlider = true;
		}else{
			var isHeaderSlider = false;
		}
		
		function closeEmAll(){
			jQuery('.top-cart, .dropdown-links, .header-links-wrapper .block-subscribe, .header-links-wrapper .lang-curr').each(function(){
				if(jQuery(this).hasClass('open')){
					if(isHeaderSlider == true){
						jQuery(this).removeClass('open active').children('.block-title, .dropdown-links-title').removeClass('active');
					}else{
						jQuery(this).children('.block-content, ul.links, .content-block').slideToggle("medium", function(){
							jQuery(this).parent().removeClass('open active').children('.block-title, .dropdown-links-title').removeClass('active');
						});
					}
				}
			});
		}
		
		/* Top Cart */
		if(jQuery('.top-cart').length){
			jQuery('.top-cart #mini-cart li.item:last').addClass('last');
			jQuery('.top-cart #mini-cart li.item:first').addClass('first');
			if(jQuery('.top-cart .cart-empty').length){jQuery('.top-cart').addClass('no-items')}
			jQuery('.top-cart .block-title').off();
			jQuery('.top-cart .block-title').on('click', function(){
			
				if(jQuery(this).parent().hasClass('open')){
					activeClass3 = true;
				}else{
					activeClass3 = false;
				}
				
				if(activeClass3 == false){
					closeEmAll();
					jQuery(this).addClass('active').parent().addClass('open');
					activeClass3 = true;
				}else{
					activeClass3 = false;
				}
				
				if(isHeaderSlider == false){
					jQuery(this).parent().find('.block-content').slideToggle("medium", function(){
						if(activeClass3 == false){
							jQuery(this).parent().removeClass('open').find('.block-title').removeClass('active');
						}
					});
				}else{
					if(activeClass3 == false){
						jQuery(this).parent().removeClass('open').find('.block-title').removeClass('active');
					}
				}
			});
		}
		/* Top Cart */
		
		
		/* Top Links */
		if(jQuery('.dropdown-links').length){
			jQuery('.dropdown-links .dropdown-links-title').off();
			jQuery('.dropdown-links .dropdown-links-title').on('click', function(){
				
				if(jQuery(this).parent().hasClass('open')){
					activeClass4 = true;
				}else{
					activeClass4 = false;
				}
			
				if(activeClass4 == false){
					closeEmAll();
					jQuery(this).parent().addClass('open active');
					activeClass4 = true;
				}else{
					activeClass4 = false;
				}
				
				if(isHeaderSlider == false){
					jQuery(this).parent().find('ul.links').slideToggle("medium", function(){
						if(activeClass4 == false){
							jQuery(this).parent().removeClass('open active');
						}
					});
				}else{
					if(activeClass4 == false){
						jQuery(this).parent().removeClass('open active');
					}
				}
			});
		}
		
		
		
		/* Top lang-curr block */
		if(jQuery('.header-links-wrapper .lang-curr').length){
			jQuery('.header-links-wrapper .lang-curr .block-title').off();
			jQuery('.header-links-wrapper .lang-curr .block-title').on('click', function(){
				
				if(jQuery(this).parent().hasClass('open')){
					activeClass = true;
				}else{
					activeClass = false;
				}
				
				if(activeClass == false){
					closeEmAll();
					jQuery(this).addClass('active').parent().addClass('open');
					activeClass = true;
				}else{
					activeClass = false;
				}
				
				if(isHeaderSlider == false){
					jQuery(this).parent().find('.content-block').slideToggle("medium", function(){
						if(activeClass == false){
							jQuery(this).parent().removeClass('open').find('.block-title').removeClass('active');
						}
					});
				}else{
					if(activeClass == false){
						jQuery(this).parent().removeClass('open').find('.block-title').removeClass('active');
					}
				}
			});
		}
		
		
		/* Top block-subscribe */ 
		if(jQuery('.header-links-wrapper .block-subscribe').length){
			jQuery('.header-links-wrapper .block-subscribe .block-title').off();
			jQuery('.header-links-wrapper .block-subscribe .block-title').on('click', function(){
				
				if(jQuery(this).parent().hasClass('open')){
					activeClass2 = true;
				}else{
					activeClass2 = false;
				}
				
				if(activeClass2 == false){
					closeEmAll();
					jQuery(this).addClass('active').parent().addClass('open');
					activeClass2 = true;
				}else{
					activeClass2 = false;
				}
				
				if(isHeaderSlider == false){
					jQuery(this).parent().find('.content-block').slideToggle("medium", function(){
						if(activeClass2 == false){
							jQuery(this).parent().removeClass('open').find('.block-title').removeClass('active');
						}
					});
				}else{
					if(activeClass2 == false){
						jQuery(this).parent().removeClass('open').find('.block-title').removeClass('active');
					}
				}
			});
		}
		
	
	}
	topLinks();
	jQuery(window).resize(function(){
		topLinks();
	});
	
	
	/* Cart Increase/Decrease Buttons */
	jQuery('.cart .qty, .my-wishlist .qty').each(function(){
		var thisQty = jQuery(this);
		
		var decreaseButton = thisQty.prev();
		decreaseButton.on('click', function(){
			if( !isNaN( thisQty.attr("value") ) && thisQty.attr("value") > 0 ){
			   var el_val = parseFloat(thisQty.attr("value"))-1;
			   thisQty.attr('value', el_val);
		    }
		});
		
		var increaseButton = jQuery(this).next();
		increaseButton.on('click', function(){
			if( !isNaN(thisQty.attr("value"))){
			   var el_val = parseFloat(thisQty.attr("value"))+1; 
			   thisQty.attr('value', el_val);
		    }
		});
	});
	
	/* Breadcrumbs check */
	if(!jQuery('nav.breadcrumbs').length){
		jQuery('body').addClass('blocks-wrapper-2');
	}
	
	/* Sidebar Blocks Top Shadow */
	if(jQuery('aside.sidebar').length){
		jQuery('aside.sidebar section').each(function(){
			jQuery(this).prepend('<div class="sidebar-shadow" />');
		});
	}
	
	/* ie 10 check */
	if(navigator.userAgent.indexOf('MSIE 10')!=-1){
		jQuery('body').addClass('ie10');
	}
	
});
var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;