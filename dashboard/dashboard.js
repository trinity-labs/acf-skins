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
// Save collapse menu state 
			var updated = window.localStorage.getItem('nav', updated);	
			if (window.localStorage.getItem('nav') === 'active') {
				$("#nav").css({display: 'block'});
				$("#content").css({width: '80%'});
				$("#subnav").css({width: '80%'});
			} else {
				$("#content").css({width: '100%'});
				$("#subnav").css({width: '100%'});
			};
			if (updated === '') {
				window.localStorage.setItem('nav', 'active');
				$("#nav").toggleClass("active");
				$("#toggle").toggleClass("active");
			} else {
				window.localStorage.getItem('nav', updated);
				$("#nav").toggleClass(updated);
				$("#toggle").toggleClass(updated);
			}
// Save theme state			
			var updated = window.localStorage.getItem('html', updated);	
			if (window.localStorage.getItem('html') === 'light-theme') {
				$("#html").toggleClass("light-theme");
			} else {
				$("#html").toggleClass("dark-theme");
				$("#theme-toggle").prop( "checked", true );
			};
			if (updated === '') {
				window.localStorage.setItem('html', 'light-theme');
				$("#html").toggleClass("light-theme");
			} else {
				window.localStorage.getItem('html', updated);
				$("html").toggleClass(updated);
			}
			
// Save degree conversion state 
			var updated = window.localStorage.getItem('toogle-degree', updated);	
			if (window.localStorage.getItem('toogle-degree') === 'celsius') {
				updated = 'fahrenheit';
				$("#toggle-degree").toggleClass("fahrenheit");
			} else {
				updated = 'celsius';
				$("#toggle-degree").toggleClass("celsius");
			};
		});
// Toogle collapse menu
			function toggleMenu() {  
			var updated = window.localStorage.getItem('nav', updated);
				$("#nav").toggleClass("active");
				$("#toggle").toggleClass("active");
			if (window.localStorage.getItem('nav') === 'active') {
				updated = 'not_active';
				$("#nav").css({display: 'none'});
				$("#content").animate({width: '100%'});
				$("#subnav").animate({width: '100%'});
				$("#nav").toggleClass("not_active");
				$("#toggle").toggleClass("not_active");
			} else {
				updated = 'active';
				$("#nav").slideToggle(900);
				$("#nav").removeClass("not_active");
				$("#content").animate({width: '80%'});
				$("#subnav").animate({width: '80%'});
				$("#nav").css({display: 'block'});
				$("#toggle").removeClass("not_active");	
			}
			window.localStorage.setItem('nav', updated);
			};		
// Toogle degree °C <=> F°
			function toggleDegree() { 
			var updated = window.localStorage.getItem('toggle-degree', updated);
			if (window.localStorage.getItem('toggle-degree') === 'celsius') {
				updated = 'fahrenheit';
				$("#toggle-degree").toggleClass("fahrenheit");
				$("#toggle-degree").removeClass("celsius");
			} else {
				updated = 'celsius';
				$("#toggle-degree").toggleClass("celsius");
				$("#toggle-degree").removeClass("fahrenheit");
			}
			window.localStorage.setItem('toggle-degree', updated);
			};
// Toogle Dark Theme			
			function darkMode() {
			var updated = window.localStorage.getItem('html', updated);
			$("#html").toggleClass("light-theme");
			if (window.localStorage.getItem('html') === 'light-theme') {
				updated = 'dark-theme';
				$("html").toggleClass("dark-theme");
				$("html").removeClass("light-theme");
			} else {
				updated = 'light-theme';
				$("html").toggleClass("light-theme");
				$("html").removeClass("dark-theme");
			}
			window.localStorage.setItem('html', updated);
			};