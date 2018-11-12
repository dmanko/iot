package by.iba.hackaton.twin.model;

import java.io.Serializable;
import java.math.BigInteger;

import javax.persistence.*;


/**
 * The persistent class for the "edges" database table.
 * 
 */
@Entity
@Table(schema="\"ENTERPRISE_TWIN\"", name="\"edges\"")

@NamedQueries({ @NamedQuery(name="Edge.findAll", query="SELECT e FROM Edge e"),
				@NamedQuery(name = "EdgeById", query = "SELECT e FROM Edge e WHERE e.key = :id")
			})


@NamedStoredProcedureQuery(
		name = "TwinRoutingSP", 
		procedureName = "TwinRoutingShortestPath", 
		parameters = { 
			@StoredProcedureParameter(mode = ParameterMode.IN, type = String.class, name = "startNodeID"), 
			@StoredProcedureParameter(mode = ParameterMode.IN, type = String.class, name = "targetNodeID"), 
			@StoredProcedureParameter(mode = ParameterMode.OUT, type = BigInteger.class, name = "totalSegments"),
			@StoredProcedureParameter(mode = ParameterMode.OUT, type = String.class, name = "nodeChain")
		}
	)

public class Edge implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="\"key\"")
	private int key;

	@Column(name="\"edgeType\"")
	private String edgeType;

	@Column(name="\"sourceNodeID\"")
	private String sourceNodeID;

	@Column(name="\"targetNodeID\"")
	private String targetNodeID;

	public Edge() {
	}

	public int getKey() {
		return this.key;
	}

	public void setKey(int key) {
		this.key = key;
	}

	public String getEdgeType() {
		return this.edgeType;
	}

	public void setEdgeType(String edgeType) {
		this.edgeType = edgeType;
	}

	public String getSourceNodeID() {
		return this.sourceNodeID;
	}

	public void setSourceNodeID(String sourceNodeID) {
		this.sourceNodeID = sourceNodeID;
	}

	public String getTargetNodeID() {
		return this.targetNodeID;
	}

	public void setTargetNodeID(String targetNodeID) {
		this.targetNodeID = targetNodeID;
	}

}