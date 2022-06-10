import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Api example')
  .setDescription('The  API description')
  .setVersion('1.0')
  .addTag('test')
  .build();
const document = SwaggerModule.createDocument(app, config);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
