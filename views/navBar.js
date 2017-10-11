var navStr = '\
<nav>\
	<ul id="dropdown1" class="dropdown-content">\
		<li><a href="#!">Perfil</a></li>\
		<li><a href="http://localhost:3000/">Cerrar Sesión <i class="material-icons">exit</i> </a></li>\
	</ul>\
	<div class="nav-wrapper green">\
		<a style="margin-left: 50px;" href="#" class="brand-logo"><!-- <img src="./logo.png" height="60px"></img> -->Hidroponía</a>\
		<ul id="nav-mobile" class="right hide-on-med-and-down">\
			<li><a href="#" data-activates="slide-out" class="button-collapse white-text"><i class="material-icons">menu</i>ss</a></li>\
			<li><a class="white-text" href="">Cultivos</a></li>\
			<li><a class="white-text" href="">Componentes</a></li>\
			<li><a class="dropdown-button" href="#!" data-activates="dropdown1"><i class="material-icons right">account_circle</i><i class="material-icons right">arrow_drop_down</i></a></li>\
		</ul>\
	</div>\
</nav>\
'

$('#navBar').html(navStr)