


//Menu Hamburguer

var btnMenu = document.getElementById('blocoMenu')

var fechar = document.getElementById('btnFechar')

var botaoFechar = document.getElementById('blocoMenu')



function abrir() {
	
	btnMenu.style.transform = 'translateX(0%)'

	btnMenu.style.transition = '0.5s'	

	fechar.style.visibility = 'visible'

}


function fechaMenu(){

	botaoFechar.style.transform = 'translateX(-100%)'

	fechar.style.visibility = 'hidden'

	
}






