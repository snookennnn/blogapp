import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePostsTable implements MigrationInterface {
  name = 'CreatePostsTable1628606343741';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "post" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "title" character varying NOT NULL,
        "description" character varying NOT NULL,
        "content" text NOT NULL,
        "imageUrl" character varying,
        PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "post"`);
  }
}
