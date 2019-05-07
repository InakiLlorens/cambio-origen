package model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class ProductoModel extends ProductoClass{
	
	private ArrayList<ProductoClass> list = new ArrayList<ProductoClass>();

	// ---- CONSTRUCTOR----

	public ProductoModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ArrayList<ProductoClass> getList() {
		return list;
	}

	// ---- methods
	public void loadData() throws SQLException 
	{
		Statement st = this.con.createStatement();
		ResultSet rs = st.executeQuery("SELECT * FROM producto");
		
		while (rs.next()) // reads the table line by line
		{ 
			ProductoModel newC = new ProductoModel();
			newC.setIdProducto(Integer.parseInt(rs.getString(1)));
			newC.setNombre_producto(rs.getString(2));
			newC.setPrecio_producto(Double.parseDouble(rs.getString(3)));
			newC.setDescripcion(rs.getString(4));
			newC.setStock(Integer.parseInt(rs.getString(5)));
			newC.setImagen(rs.getString(6));
			this.list.add(newC);
		}
		this.con.close();
	}

}