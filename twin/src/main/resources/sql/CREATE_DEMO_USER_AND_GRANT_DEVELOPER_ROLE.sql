-- RUN FROM SQL EDITOR AS SYSTEM USER

-- CREATE DEVELOPER USER
CREATE USER DEMO1 PASSWORD "Leonardo_2018";

-- AUTHORIZATIONS
GRANT MODELING TO DEMO1;
GRANT CREATE SCHEMA TO DEMO1;
CALL GRANT_ACTIVATED_ROLE('sap.hana.xs.ide.roles::Developer','DEMO1');