DROP TYPE "TwinRoutingTT";
CREATE TYPE "TwinRoutingTT" AS TABLE ("segment" BIGINT, "sourceNodeID" VARCHAR(100), "targetNodeID" VARCHAR(100), "dirtyLevel" INT);

CREATE OR REPLACE PROCEDURE "ENTERPRISE_TWIN"."TwinRoutingShortestPath" (IN startNodeID VARCHAR(100), IN targetNodeID VARCHAR(100), OUT totalSegments BigInt, OUT routing "TwinRoutingTT")
 LANGUAGE GRAPH READS SQL DATA AS
  BEGIN
	Graph g = Graph("ENTERPRISE_TWIN", "GRAPH");
	
	Graph gP = Subgraph(:g, e IN Edges(:g) WHERE :e."edgeType"=='path' and :e."dirtyLevel" < 6 );
	
	Vertex sourceVertex = Vertex(:gP, :startNodeID);
	Vertex targetVertex = Vertex(:gP, :targetNodeID);
	WeightedPath<BigInt> p = SHORTEST_PATH(:gP, :sourceVertex, :targetVertex);
	totalSegments = Length(:p);

	routing = SELECT :segment, :e."sourceNodeID",  :e."targetNodeID", :e."dirtyLevel" FOREACH e in Edges(:p) WITH ORDINALITY AS segment;
	
	
  END;
  
  CALL "TwinRoutingShortestPath"('ROOM-3A-104', 'ROOM-5C-114', ?, ?);