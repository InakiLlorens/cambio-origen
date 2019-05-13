$(document).ready(function () {
	$.getJSON("http://localhost:8080/proyecto_final/ApiProductos", function (data) {
		console.log(data);
		var html = '';

		for (i in data) {
			html += '<div class="col-md-4">';
			html += '<div class="card mb-4 shadow-sm">';
			html += '<img src="' + data[i].imagen + '">';
			html += '<div class="card-body">';
			html += '<h5>' + data[i].nombre_producto + '</h5>';
			html += '<div class="paragraph">'
			html += '<p class="card-text">' + data[i].descripcion + '</p>';
			html += '</div>'
			html += '<div class="d-flex justify-content-between align-items-center">';
			html += '<div class="btn-group">';
			html += '<button type="button" class="btn btn-success modalButton" data-toggle="modal" data-target="#productoModal" data-id="' + data[i].idProducto + '">Ver mas</button>';
			html += '</div>';
			html += '<small class="text-muted">' + data[i].precio_producto + "€" + '</small>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
		}
		$('.row').html(html);

		$('.modalButton').on("click", function () {
			var id = $(this).data("id");
			console.log(id);
			//llamada a /apiProducto?id=

			$("#productoModal .modal-title").text("Datuak kargatzen");
			$("#productoModal .modal-body").html('<div class="spinner-border text-danger" role="status"></div>');
			$('#productoModal').modal('show');
		});
	});

	getCategorias();

	/*<ul class="navbar-nav mr-auto">
				   <li class="nav-item active"><a class="nav-link" href="#">Todos<span
						   class="sr-only">(current)</span></a></li>
				   <li class="nav-item"><a class="nav-link" href="#">Mangas</a></li>


				   <li class="nav-item dropdown"><a
					   class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
					   role="button" data-toggle="dropdown" aria-haspopup="true"
					   aria-expanded="false"> Comics </a>
					   <div class="dropdown-menu" aria-labelledby="navbarDropdown">
						   <a class="dropdown-item" href="#">Europeo</a> <a
							   class="dropdown-item" href="#">Superheroes</a>
						   <div class="dropdown-divider"></div>

						   <a class="dropdown-item" href="#">Ofertas</a>

					   </div></li>


			   </ul>
			   <form class="form-inline my-2 my-lg-0">
				   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Carrito</button>
			   </form> */
});
var htmlzatia = '';
function getCategorias() {
	$.getJSON("http://localhost:8080/proyecto_final/ApiCategorias", function (dataCat) {
		console.log(dataCat);
		$.getJSON("http://localhost:8080/proyecto_final/ApiSubcategorias", function (dataSub) {
			htmlzatia='<ul class="navbar-nav mr-auto">';
			console.log(dataSub);
			for (i in dataCat) {
				var linea = '<li class="nav-item"><a class="nav-link" href="#">' + dataCat[i].nombre_categoria + '</a></li>';
				var dropdown = 0;
				for (y in dataSub) {
					
					if (dropdown == 0 && dataSub[y].idCategoria == dataCat[i].idCategoria) {
						dropdown = 1;
						linea = '<li class="nav-item dropdown"><a';
						linea += 'class="nav-link dropdown-toggle" href="#" id="navbarDropdown"';
						linea += 'role="button" data-toggle="dropdown" aria-haspopup="true"';
						linea += 'aria-expanded="false"> ' + dataCat[i].nombre_categoria + ' </a>';
						linea += '<div class="dropdown-menu" aria-labelledby="navbarDropdown">';
						linea += '<a class="dropdown-item" href="#">' + dataSub[y].nombre_categoria + '</a> ';
					}
					if (dropdown == 1 && dataSub[y].idCategoria == dataCat[i].idCategoria) {
						linea += '<a class="dropdown-item" href="#">' + dataSub[y].nombre_categoria + '</a>';
					}

				}
				console.log(dropdown);
				if (dropdown == 1) {
					linea += '</div></li>';
				}
				htmlzatia += linea;
			}
			htmlzatia += '<form class="form-inline my-2 my-lg-0"></ul> <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Carrito</button> </form> ';
			$('#navbarToggleExternalContent').html(htmlzatia);

		});
	});

}