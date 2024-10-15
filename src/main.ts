import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; 
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe())
  const config = new DocumentBuilder()
      .setTitle(' Todo REST API')
      .setDescription('A rest api to list users todos/tasks, authorization implemented using jwt token. the API is made using Nestjs')
      .setVersion('1.0')
      .addBearerAuth()
      .addTag('todos')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/Swagger', app, document,{
      customCssUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
      customJs:[
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js'
      ],
    });
  await app.listen(3000);
}
bootstrap();
