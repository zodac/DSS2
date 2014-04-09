package services;

import java.util.List;

import javax.ejb.Remote;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.jws.WebService;

import jpas.JPA;
import daos.ToDoItemDAO;
import entities.ToDoItem;

@Stateless
@WebService(endpointInterface="services.ToDoItemService")
@Remote(ToDoItemService.class)
public class ToDoItemEJB implements ToDoItemService {
	private ToDoItemDAO dao;
	
	@Inject
	public void setDao(@JPA ToDoItemDAO dao) {
		this.dao = dao;
	}

	public List<ToDoItem> getItemsByUser(String userName) {
		return dao.getItemsByUser(userName);
	}

	public void addItem(ToDoItem item) {
		dao.addItem(item);
	}

	public void removeItem(int itemID) {
		dao.removeItem(itemID);
	}
}
