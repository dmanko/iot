insert into "ENTERPRISE_TWIN"."nodes" ("nodeID", "levelID", "nodeType", "floor") values('MAIN','0','geometry','0');

DROP GRAPH WORKSPACE "ENTERPRISE_TWIN"."GRAPH";

CREATE GRAPH WORKSPACE "ENTERPRISE_TWIN"."GRAPH"
	EDGE TABLE "ENTERPRISE_TWIN"."edges"
		SOURCE COLUMN "sourceNodeID"
		TARGET COLUMN "targetNodeID"
		KEY COLUMN "key"
	VERTEX TABLE "ENTERPRISE_TWIN"."nodes"
		KEY COLUMN "nodeID"
;

SELECT * FROM "SYS"."GRAPH_WORKSPACES";
