package by.iba.hackaton.twin.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the "nodes" database table.
 * 
 */
@Entity
@Table(schema="\"ENTERPRISE_TWIN\"", name="\"nodes\"")
@NamedQueries({ @NamedQuery(name="Node.findAll", query="SELECT n FROM Node n"),
				@NamedQuery(name = "NodeById", query = "SELECT n FROM Node n WHERE n.nodeID LIKE :id"),
				@NamedQuery(name = "Node.FindByType", query = "SELECT n FROM Node n WHERE n.nodeType = :type")
			})

public class Node implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="\"nodeID\"")
	private String nodeID;

	@Column(name="\"floor\"")
	private String floor;

//	@Column(name="\"geometry\"")
//	private Object geometry;

	@Column(name="\"levelID\"")
	private String levelID;

	@Column(name="\"nodeType\"")
	private String nodeType;

	@Column(name="\"originalJSON\"")
	private String originalJSON;

	public Node() {
	}

	public String getNodeID() {
		return this.nodeID;
	}

	public void setNodeID(String nodeID) {
		this.nodeID = nodeID;
	}

	public String getFloor() {
		return this.floor;
	}

	public void setFloor(String floor) {
		this.floor = floor;
	}

//	public Object getGeometry() {
//		return this.geometry;
//	}

//	public void setGeometry(Object geometry) {
//		this.geometry = geometry;
//	}

	public String getLevelID() {
		return this.levelID;
	}

	public void setLevelID(String levelID) {
		this.levelID = levelID;
	}

	public String getNodeType() {
		return this.nodeType;
	}

	public void setNodeType(String nodeType) {
		this.nodeType = nodeType;
	}

	public String getOriginalJSON() {
		return this.originalJSON;
	}

	public void setOriginalJSON(String originalJSON) {
		this.originalJSON = originalJSON;
	}

}