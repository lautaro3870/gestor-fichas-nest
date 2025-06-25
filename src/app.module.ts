import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { ProjectsModule } from './projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './projects/entities/project.entity';
import { AreasModule } from './areas/areas.module';
import { Area } from './areas/entities/area.entity';
import { PersonalModule } from './personal/personal.module';
import { Personal } from './personal/entities/personal.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: parseInt(process.env.DB_PORT || "5433"),
      username: 'postgres',
      password: 'autos321',
      database: 'local_fundacion',
      entities: [Proyecto, Area, Personal],
      synchronize: false, // DEJAR SIEMPRE EN FALSE
      autoLoadEntities: false
    }),
    ProjectsModule,
    AreasModule,
    PersonalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
