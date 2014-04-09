package jpas;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import daos.UserDAO;
import entities.User;

@JPA
@SuppressWarnings("unchecked")
public class UserJPA implements UserDAO {

	@PersistenceContext
	private EntityManager em;

	public void addUser(User user) {
		if(em.find(User.class, user.getUserName()) == null){
			em.persist(user);
		}
	}

	public User getUser(String userName) {
		return em.find(User.class, userName);
	}

	public List<User> findAllUsers() {
		return (List<User>) em.createNamedQuery("User.findAll").getResultList();
	}
}
