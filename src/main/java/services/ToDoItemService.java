package services;

import java.util.List;

import javax.ejb.Remote;
import javax.jws.WebService;

import entities.ToDoItem;

@WebService
@Remote
public interface ToDoItemService {
	List<ToDoItem> getItemsByUser(String userName);
	void addItem(ToDoItem item);
	void editItem(int itemID, String task);
	void removeItem(int itemID);
}
