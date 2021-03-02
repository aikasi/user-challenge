import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Get()
  getAll() {
    return this.podcastsService.getAll();
  }

  @Post()
  create(@Body() podData) {
    return this.podcastsService.create(podData);
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.podcastsService.getOne(id);
  }

  @Patch('/:id')
  patch(@Param('id') id: string, @Body() podData) {
    return this.podcastsService.patch(id, podData);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.podcastsService.remove(id);
  }

  @Get('/:id/episodes')
  getEpisodes(@Param('id') id: string) {
    return this.podcastsService.getEpisodes(id);
  }

  @Post('/:id/episodes')
  createEpisodes(@Param('id') id: string, @Body() episodeData) {
    return this.podcastsService.createEpisodes(id, episodeData);
  }

  @Patch('/:id/episodes/:episodeId')
  patchEpisode(
    @Param('id') id: string,
    @Param('episodeId') episodeId: string,
    @Body() podData,
  ) {
    return this.podcastsService.patchEpisode(id, episodeId, podData);
  }

  @Delete('/:id/episodes/:episodeId')
  deleteEpisode(
    @Param('id') id: string,
    @Param('episodeId') episodeId: string,
  ) {
    return this.podcastsService.deleteEpisode(id, episodeId);
  }
  //
}
