import { Module } from '@nestjs/common';
import { EpisodeController, PodcastsController } from './podcasts.controller';
import { PodcastsService } from './podcasts.service';
import { PodcastResolver } from './podcasts.resolver';

@Module({
  controllers: [PodcastsController, EpisodeController],
  providers: [PodcastsService, PodcastResolver],
})
export class PodcastsModule {}
