import { MigrationInterface, QueryRunner } from 'typeorm';

export class dbInit1658769656212 implements MigrationInterface {
  name = 'dbInit1658769656212';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "students" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "name" character varying NOT NULL, "RA" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "classroom" integer, CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "classroom" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "type" character varying, "number" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_729f896c8b7b96ddf10c341e6ff" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "students" ADD CONSTRAINT "FK_66003f5c52dc44498abff05cd9d" FOREIGN KEY ("classroom") REFERENCES "classroom"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "students" DROP CONSTRAINT "FK_66003f5c52dc44498abff05cd9d"`,
    );
    await queryRunner.query(`DROP TABLE "classroom"`);
    await queryRunner.query(`DROP TABLE "students"`);
  }
}
