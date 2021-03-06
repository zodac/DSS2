package jpas;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import daos.ToDoItemDAO;
import entities.ToDoItem;

@JPA
@SuppressWarnings("unchecked")
public class ToDoItemJPA implements ToDoItemDAO {

	@PersistenceContext
	private EntityManager em;

	public List<ToDoItem> getItemsByUser(String userName) {
		return em.createNativeQuery("SELECT * FROM ToDoItem WHERE username = ?").setParameter(1, userName).getResultList();
	}

	public void addItem(ToDoItem item) {
		em.persist(item);
	}
	
	public void editItem(int itemID, String task) {
		em.createNativeQuery("UPDATE ToDoItem SET task = ? WHERE id = ?").setParameter(1, task).setParameter(2, itemID).executeUpdate();
	}

	public void removeItem(int itemID) {
		em.remove(em.find(ToDoItem.class, itemID));
	}
}
