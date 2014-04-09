package daos;

import java.util.List;

import entities.ToDoItem;

public interface ToDoItemDAO {
	List<ToDoItem> getItemsByUser(String userName);
	void addItem(ToDoItem item);
	void removeItem(int itemID);
}