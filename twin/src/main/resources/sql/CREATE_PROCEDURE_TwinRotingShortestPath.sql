DROP TYPE "TwinRoutingTT";
CREATE TYPE "TwinRoutingTT" AS TABLE ("segment" BIGINT, "sourceNodeID" VARCHAR(100), "targetNodeID" VARCHAR(100));

CREATE OR REPLACE PROCEDURE "TwinRoutingShortestPath" (IN startNodeID VARCHAR(100), IN targetNodeID VARCHAR(100), OUT totalSegments BigInt, OUT routing "TwinRoutingTT")
 LANGUAGE GRAPH READS SQL DATA AS
  BEGIN
	Graph g = Graph("ENTERPRISE_TWIN", "GRAPH");
	Vertex sourceVertex = Vertex(:g, :startNodeID);
	Vertex targetVertex = Vertex(:g, :targetNodeID);
	WeightedPath<BigInt> p = SHORTEST_PATH(:g, :sourceVertex, :targetVertex);
	totalSegments = Length(:p);
	
/*	nodeChain = :startNodeID;
	FOREACH e IN Edges(:p) {
		nodeChain = SYS.CONCAT(:nodeChain, ":" );
		nodeChain = SYS.CONCAT(:nodeChain, :e."targetNodeID");
		
	} */
	
	routing = SELECT :segment, :e."sourceNodeID",  :e."targetNodeID" FOREACH e in Edges(:p) WITH ORDINALITY AS segment;
  END;
  
  CALL "TwinRoutingShortestPath"('ROOM-3A-104', 'ROOM-5C-114', ?, ?);