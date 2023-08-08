// GLOBAL JS FUNCTIONS
		$(function(){
				$(":input:not(input[type=button],input[type=submit],button):enabled:not([readonly]):visible:first").focus();
			});
// Show Password on Logon page
		function showPassword() {
			var field = document.querySelector('#password input');
			if (field.type === "password") {
				field.type = "text";
				$("#showPass .fa-eye-slash").removeClass("fa-eye-slash");
				$("#showPass i").addClass("fa-eye");
				$("#showPass").addClass("corporate");
			} else {
				field.type = "password";
				$("#showPass").removeClass("corporate");
				$("#showPass .fa-eye").removeClass("fa-eye");
				$("#showPass i").addClass("fa-eye-slash");
			}
		};			
// Wait page loading
		$(document).ready(function() {
// Add tablesorter-ice class to .tablesorter objects
			$(".tablesorter").addClass("tablesorter-ice");
// Login page input placeholder
			if(window.location.href.indexOf("logon/logon") > -1){
				document.querySelector('#userid input').setAttribute('required','required');
				document.querySelector('#password input').setAttribute('required','required');
				document.querySelector('#userid input').setAttribute('placeholder','🔒 User ID');
				document.querySelector('#password input').setAttribute('placeholder','🔑 Password');
				document.querySelector('#login').setAttribute('autocomplete','on');
				document.querySelector('#password input').setAttribute('autocomplete','current-password');
				document.querySelector('.hidden').setAttribute('hidden','');
				$("#password .right").append("<button id='showPass' type='button' onclick='showPassword()'><i class='fa-regular fa-eye-slash'></i></button>"); 
			};
// Save Menu state 
			var menuUpdated = window.localStorage.getItem('nav', menuUpdated);	
			if (window.localStorage.getItem('nav') === 'active') {
				$("#nav").css({display: 'block'});
				$("#content").css({width: '80%'});
				$("#subnav").css({width: '80%'});
			} else {
				$("#content").css({width: '100%'});
				$("#subnav").css({width: '100%'});
			};
			if (menuUpdated === null) {
				window.localStorage.setItem('nav', 'active');
				$("#nav").toggleClass("active");
				$("#toggle").toggleClass("active");
			} else {
				window.localStorage.getItem('nav', menuUpdated);
				$("#nav").toggleClass(menuUpdated);
				$("#toggle").toggleClass(menuUpdated);
			}
// Save Theme state			
			var themeUpdated = window.localStorage.getItem('html', themeUpdated);	
			if (window.localStorage.getItem('html') === 'light-theme') {
				$("#html").toggleClass("light-theme");
				$("#theme-toggle").prop( "checked", false );
			} else {
				$("#html").toggleClass("dark-theme");
				$("#theme-toggle").prop( "checked", true );
			};
			if (themeUpdated === null) {
				window.localStorage.setItem('html', 'light-theme');
				$("#html").toggleClass("light-theme");
				$("#theme-toggle").prop( "checked", false );
			} else {
				window.localStorage.getItem('html', themeUpdated);
				$("html").toggleClass(themeUpdated);
			}
			
// Save Degree state
			var degreeUpdated = window.localStorage.getItem('toggle-degree', degreeUpdated);	
			if (window.localStorage.getItem('toggle-degree') === 'celsius') {
				$("#toggle-degree").prop( "checked", false );
				$("#temp-cap-normal").html("50°<sup>C</sup>");
				$("#temp-cap-medium").html("50°<sup>C</sup>");
				$("#temp-cap-hot").html("75°<sup>C</sup>");
			} else {
				$("#toggle-degree").prop( "checked", true );
				$("#temp-cap-normal").html("122°<sup>F</sup>");
				$("#temp-cap-medium").html("122°<sup>F</sup>");
				$("#temp-cap-hot").html("167°<sup>F</sup>");
			};
			if (degreeUpdated === null) {
				window.localStorage.setItem('toggle-degree', 'celsius');
				$("#toggle-degree").prop( "checked", false );
			} else {
				window.localStorage.getItem('toggle-degree', degreeUpdated);
			}
		});
// Toggle collapse menu
			function toggleMenu() {  
			var menuUpdated = window.localStorage.getItem('nav', menuUpdated);
				$("#nav").toggleClass("active");
				$("#toggle").toggleClass("active");
			if (window.localStorage.getItem('nav') === 'active') {
				menuUpdated = 'not_active';
				$("#nav").css({display: 'none'});
				$("#content").animate({width: '100%'});
				$("#subnav").animate({width: '100%'});
				$("#nav").toggleClass("not_active");
				$("#toggle").toggleClass("not_active");
			} else {
				menuUpdated = 'active';
				$("#nav").slideToggle(900);
				$("#nav").removeClass("not_active");
				$("#content").animate({width: '80%'});
				$("#subnav").animate({width: '80%'});
				$("#nav").css({display: 'block'});
				$("#toggle").removeClass("not_active");	
			}
			window.localStorage.setItem('nav', menuUpdated);
			};		
// Toogle degree °C <=> F°
			function toggleDegree() { 
			var degreeUpdated = window.localStorage.getItem('toggle-degree', degreeUpdated);
			if (window.localStorage.getItem('toggle-degree') === 'celsius') {
				degreeUpdated = 'fahrenheit';
				$("#temp-cap-normal").html("122°<sup>F</sup>");
				$("#temp-cap-medium").html("122°<sup>F</sup>");
				$("#temp-cap-hot").html("167°<sup>F</sup>");
			} else {
				degreeUpdated = 'celsius';
				$("#temp-cap-normal").html("50°<sup>C</sup>");
				$("#temp-cap-medium").html("50°<sup>C</sup>");
				$("#temp-cap-hot").html("75°<sup>C</sup>");
			}
			window.localStorage.setItem('toggle-degree', degreeUpdated);
			};
// Toogle Dark Theme			
			function toggleTheme() {
			var themeUpdated = window.localStorage.getItem('html', themeUpdated);
			$("#html").toggleClass("light-theme");
			if (window.localStorage.getItem('html') === 'light-theme') {
				themeUpdated = 'dark-theme';
				$("html").toggleClass("dark-theme");
				$("html").removeClass("light-theme");
			} else {
				themeUpdated = 'light-theme';
				$("html").toggleClass("light-theme");
				$("html").removeClass("dark-theme");
			}
			window.localStorage.setItem('html', themeUpdated);
			};