package daos;

import java.util.List;

import entities.User;

public interface UserDAO {
	void addUser(User user);
	User getUser(String userName);
	List<User> findAllUsers();
}