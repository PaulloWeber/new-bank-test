/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { useContainer } from 'class-validator'
import { AppModule } from './app.module'

function generateDocumentation (app) {
  const config = new DocumentBuilder()
    .setTitle('New Bank API')
    .setDescription('')
    .setVersion('1.0')
    .addTag('new-bank')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
}

async function bootstrap () {
  const app = await NestFactory.create(AppModule)

  generateDocumentation(app)

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000)
  useContainer(app.select(AppModule), { fallbackOnErrors: true })
}

bootstrap();
