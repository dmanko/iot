CREATE COLUMN TABLE "ENTERPRISE_TWIN"."edges" (
    "key" INTEGER CS_INT NOT NULL,
	"sourceNodeID" VARCHAR(100) NOT NULL,
	"targetNodeID" VARCHAR(100) NOT NULL,
	"edgeType" VARCHAR(100) NOT NULL,
	PRIMARY KEY ("key")
);