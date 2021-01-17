import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationClassStudent1610553111280 implements MigrationInterface {
    name = 'RelationClassStudent1610553111280'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "estudent_classes_class" ("estudentId" integer NOT NULL, "classId" integer NOT NULL, CONSTRAINT "PK_c70fb88128422cac86280d9b67f" PRIMARY KEY ("estudentId", "classId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_24fba36305aa23ea32db19c313" ON "estudent_classes_class" ("estudentId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d01c740dfe0457b7ee0a0b88cc" ON "estudent_classes_class" ("classId") `);
        await queryRunner.query(`ALTER TABLE "estudent_classes_class" ADD CONSTRAINT "FK_24fba36305aa23ea32db19c3136" FOREIGN KEY ("estudentId") REFERENCES "estudent"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "estudent_classes_class" ADD CONSTRAINT "FK_d01c740dfe0457b7ee0a0b88ccb" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estudent_classes_class" DROP CONSTRAINT "FK_d01c740dfe0457b7ee0a0b88ccb"`);
        await queryRunner.query(`ALTER TABLE "estudent_classes_class" DROP CONSTRAINT "FK_24fba36305aa23ea32db19c3136"`);
        await queryRunner.query(`DROP INDEX "IDX_d01c740dfe0457b7ee0a0b88cc"`);
        await queryRunner.query(`DROP INDEX "IDX_24fba36305aa23ea32db19c313"`);
        await queryRunner.query(`DROP TABLE "estudent_classes_class"`);
    }

}
