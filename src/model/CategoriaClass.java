package model;

public class CategoriaClass extends Connect{
	
	protected int idCategoria;
	protected String nombre_categoria;
	
	public CategoriaClass() {
		super();
		// TODO Auto-generated constructor stub
	}//prueba de cambio de origen

	public int getIdCategoria() {
		return idCategoria;
	}

	public void setIdCategoria(int idCategoria) {
		this.idCategoria = idCategoria;
	}

	public String getNombre_categoria() {
		return nombre_categoria;
	}

	public void setNombre_categoria(String nombre_categoria) {
		this.nombre_categoria = nombre_categoria;
	}

}
