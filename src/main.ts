import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.API_PORT);

  Logger.log(`Bank Whatsapp is listening - PORT ${process.env.API_PORT}`);
  Logger.log(
    `To see Bank Whatsapp documentation access http://localhost:${process.env.API_PORT}/doc`,
  );
}
bootstrap();
