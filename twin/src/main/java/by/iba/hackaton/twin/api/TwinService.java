package by.iba.hackaton.twin.api;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.sql.DataSource;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;

import org.eclipse.persistence.config.PersistenceUnitProperties;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import by.iba.hackaton.twin.model.Edge;
import by.iba.hackaton.twin.model.Node;



/**
 * {@link TwinService}
 * 
 * @author Dzmitry Manko
 * @version 0.1
 */

/*@CrossOriginResourceSharing(
    allowAllOrigins = true, 
    allowHeaders = {
            "Accept", "Accept-Charset", "Accept-Encoding", "Accept-Datetime", 
            "Accept-Language", "Authorization", "Content-Language", "Content-Length", 
            "Content-Type", "Origin", "User-Agent"},
    exposeHeaders = {
            "Accept", "Accept-Charset", "Accept-Encoding", "Accept-Datetime", 
            "Accept-Language", "Authorization", "Content-Language", "Content-Length", 
            "Content-Type", "Origin", "User-Agent"},
    allowCredentials = true, 
    maxAge = 1209600 )
*/
@Path("/svc")
@Produces({ MediaType.APPLICATION_JSON })
public class TwinService {
	private DataSource dataSource = null;

    /**
     * Create new data access object with data source.
     */
    public TwinService() throws SQLException {
        setDataSource(getDefaultDataSource());
    }

    /**
     * Get data source which is used for the database operations.
     * @throws SQLException 
     */
    public DataSource getDataSource() throws SQLException {
    	if (this.dataSource == null) {
    		setDataSource(getDefaultDataSource());
    	}
        return dataSource;
    }

    /**
     * Set data source to be used for the database operations.
     */
    public void setDataSource(DataSource newDataSource) throws SQLException {
        this.dataSource = newDataSource;
    }
	


	@SuppressWarnings("unchecked")
	@GET
	@Path("/nodes/all")
	public List<Node> getNodes(@Context SecurityContext ctx) {
		List<Node> retVal = null;

		EntityManager em = this.getEntityManager(ctx);
		retVal = em.createNamedQuery("Node.findAll").getResultList();

		return retVal;
	}
	
	@GET
	@Path("/nodes/{id}")
	public Node getNodeById(@PathParam(value = "id") String id, @Context SecurityContext ctx) {
		Node retVal = null;

		EntityManager em = this.getEntityManager(ctx);

		try {
			Query query = em.createNamedQuery("NodeById");
			query.setParameter("id", id);
			retVal = (Node) query.getSingleResult();
			
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			em.close();
		}

		return retVal;
	}
	
	@GET
	@Path("/nodes/type={type}")
	public List<Node> getNodesByType(@PathParam(value = "type") String type, @Context SecurityContext ctx) {
		List<Node> retVal = null;

		EntityManager em = this.getEntityManager(ctx);

		try {
			Query query = em.createNamedQuery("Node.FindByType");
			query.setParameter("type", type);
			retVal = query.getResultList();
			
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			em.close();
		}

		return retVal;
	}
	
	@GET
	@Path("/nodes/like={id}")
	public List<Node> getNodesByTemplate(@PathParam(value = "id") String partialID, @Context SecurityContext ctx) {
		List<Node> retVal = null;

		EntityManager em = this.getEntityManager(ctx);

		try {
			Query query = em.createNamedQuery("NodesByTemplateID");
//			SQL LIKE Wildcards
//			% - The percent sign represents zero, one, or multiple characters
//			_ - The underscore represents a single character
			query.setParameter("id", partialID + "%");
			retVal = query.getResultList();
			
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			em.close();
		}

		return retVal;
	}
	
	
	
	
	@SuppressWarnings("unchecked")
	@GET
	@Path("/geojson/original")
	public String getOriginalGeoJSON(@Context SecurityContext ctx) throws ParseException {
		String retVal = null;

		List<Node> nodes = this.getNodes(ctx);
		
		JSONArray jsonArray = new JSONArray();
		JSONObject json = null;
		JSONParser parser = new JSONParser(); 
		String jsonS = null;
		
		Iterator<Node> nodeIterator = nodes.iterator();
		
		while (nodeIterator.hasNext()) {
			jsonS= nodeIterator.next().getOriginalJSON();
			
			if (jsonS != null) {
				json = (JSONObject) parser.parse(jsonS);
				jsonArray.add(json);
			}
			
		}
		
		retVal = jsonArray.toJSONString();

		return retVal;
	}
	
	@GET
	@Path("/geojson/{id}")
	public String getGeoJSONByNodeId(@PathParam(value = "id") String id, @Context SecurityContext ctx) {
		String retVal = null;
		
		Node node = this.getNodeById(id, ctx);
		retVal = node.getOriginalJSON();
		
//		String jsonS = node.getOriginalJSON();
//		JSONObject json = null;
//		if (jsonS != null) {
//			JSONParser parser = new JSONParser();
//			json = (JSONObject)parser.parse(jsonS);
//		}
		
		return retVal;
	}
	
	@GET
	@Path("/nodes/routing/start={id1}&finish={id2}")
	public List<String> getRoutingBetween(@PathParam(value = "id1") String nodeID1, @PathParam(value = "id2") String nodeID2, @Context SecurityContext ctx) {
		List<String> retVal = new LinkedList<String>();
		int totalRouteSegments = 0;

		EntityManager em = this.getEntityManager(ctx);
		

		try {
/*			StoredProcedureQuery storedProcedure = em.createStoredProcedureQuery("TwinRoutingSP").
					registerStoredProcedureParameter(0 , String.class , ParameterMode.IN).
					registerStoredProcedureParameter(1 , String.class , ParameterMode.IN).
					registerStoredProcedureParameter(2 , BigInteger.class , ParameterMode.OUT).
					registerStoredProcedureParameter(3 , void.class , ParameterMode.REF_CURSOR);
			
			
			storedProcedure.setParameter(0, nodeID1)
				            .setParameter(1, nodeID2)
				            .setParameter(2, totalRouteSegments)
				            .setParameter(3, retVal);

			storedProcedure.execute();*/
			
			Connection connection = getDataSource().getConnection();
	        try {
	            PreparedStatement pstmt = connection
	                    .prepareStatement(" CALL \"ENTERPRISE_TWIN\".\"TwinRoutingShortestPath\"('" + nodeID1 + "', '" + nodeID2 + "', ?, ?)");
	            ResultSet rs = pstmt.executeQuery();
	    
	            while (rs.next()) {
	                totalRouteSegments = rs.getInt(1);
	                retVal.add(Integer.toString(totalRouteSegments) + ": " + rs.getString(2) + ", " + rs.getString(3));
	               
	                
	            }
	            
	            
	        } finally {
	            if (connection != null) {
	                connection.close();
	            }
	        }
			
			System.out.println("getRoutingBetween( " + nodeID1 + " and " + nodeID2 + ") :" + totalRouteSegments);
			
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			em.close();
		}

		return retVal;
	}
	
	
	
	
	/**
	 * Returns the <code>DefaultDB</code> {@link DataSource} via JNDI.
	 * 
	 * @return <code>DefaultDB</code> {@link DataSource}
	 */
	protected DataSource getDefaultDataSource() {
		DataSource retVal = null;

		try {
			InitialContext ctx = new InitialContext();
			retVal = (DataSource) ctx.lookup("java:comp/env/jdbc/DefaultDB");

		} catch (NamingException ex) {
			ex.printStackTrace();
		}

		return retVal;
	}

	/**
	 * Returns the {@link EntityManagerFactory}.
	 * 
	 * @return The {@link EntityManagerFactory}
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	protected EntityManagerFactory getEntityManagerFactory() {
		EntityManagerFactory retVal = null;

		try {
			Map properties = new HashMap();

			DataSource ds = this.getDataSource();

			properties.put(PersistenceUnitProperties.NON_JTA_DATASOURCE, ds);

			retVal = Persistence.createEntityManagerFactory("application", properties);
		} catch (Exception ex) {
			ex.printStackTrace();
			System.out.println("!!!!ALARMA!!!!!  " + ex.getLocalizedMessage());
			
		}

		return retVal;
	}
	
	protected EntityManager getEntityManager(SecurityContext ctx) {
		
		String userName = (ctx.getUserPrincipal() != null) ? ctx.getUserPrincipal().getName() : "anonymous";
		Map<String, String> props = new HashMap<String, String>();
		props.put("tenant.id", userName);

		return this.getEntityManagerFactory().createEntityManager(props);
		
	}
		

}

