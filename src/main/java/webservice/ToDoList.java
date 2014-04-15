package webservice;

import java.util.Date;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import services.ToDoItemService;
import services.UserService;
import entities.ToDoItem;

@Path("/ToDoList")
@Stateless
@LocalBean
public class ToDoList {
	@EJB
	private ToDoItemService toDoEJB;
	@EJB
	private UserService userEJB;
	
	@GET
    @Path("/{userName}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<ToDoItem> getItemsByUser(@PathParam("userName") String userName) {
        return toDoEJB.getItemsByUser(userName);
    }
	
	@GET
	@Path("Add/{user}/{task}")
	@Produces(MediaType.APPLICATION_JSON)
    public void addItem(@PathParam("user") String userName, @PathParam("task") String task){
    	ToDoItem item = new ToDoItem();
    	item.setDate(new Date());
    	item.setTask(task);
    	item.setUser(userEJB.getUserByUsername(userName));
    	
    	toDoEJB.addItem(item);
    }
	
	@GET
	@Path("Edit/{itemID}/{task}")
	@Produces(MediaType.APPLICATION_JSON)
    public void editItem(@PathParam("itemID") int itemID, @PathParam("task") String task){
    	toDoEJB.editItem(itemID, task);
    }
	
	@GET
	@Path("Remove/{itemID}")
	@Produces(MediaType.APPLICATION_JSON)
    public void removeItem(@PathParam("itemID") int itemID){
    	toDoEJB.removeItem(itemID);
    }
}