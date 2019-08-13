function imprimir(){
  var objeto=document.getElementById('receipt');
  var ventana=window.open('','popimpr');
  ventana.document.write(objeto.innerHTML); 
  ventana.document.close(); 
  ventana.print(); 
  ventana.close(); 
}

function seleccionar(t,internal_name){
	var class_name = t.className,
		seleccionados = document.getElementsByClassName("seleccion_store"),
		store_code = document.getElementById('store_code_selected');
	
	for (i = 0; i < seleccionados.length; i++) {
		seleccionados[i].className = seleccionados[i].className.replace(/\bseleccion_store\b/,'');
	}

	if(class_name.search("seleccion_store") == -1){
		t.className += "seleccion_store";
		store_code.value = internal_name;
	}		
};