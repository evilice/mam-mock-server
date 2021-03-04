import { Module } from '@nestjs/common';
import { TestModule } from './modules/test/test.module';
import { StoragesModule } from './modules/storages/storages.module';
import { AssetsModule } from './modules/assets/assets.module';
import { MarkersModule } from './modules/markers/markers.module';
import { SubtitlesModule } from './modules/subtitles/subtitles.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TestModule,
    AuthModule,
    StoragesModule,
    AssetsModule,
    MarkersModule,
    SubtitlesModule,
  ],
})
export class AppModule {}
