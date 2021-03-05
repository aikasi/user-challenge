import { Param } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  GetOutput,
  CreateOutput,
  GetOutput1,
  common,
  GetEpisodesOutput,
} from './dtos/create-episode.dto';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';
import { Episode } from './entities/episode.entity';
import { Podcast } from './entities/podcast.entity';
import { PodcastsService } from './podcasts.service';

@Resolver()
export class PodcastResolver {
  constructor(private readonly podcastService: PodcastsService) {}

  @Query(() => GetOutput)
  async getAllPodcasts() {
    return this.podcastService.getAllPodcasts();
  }

  @Mutation(() => CreateOutput)
  createPodcast(@Args('input') { title, category }: CreatePodcastDto) {
    return this.podcastService.createPodcast({ title, category });
  }
  @Query(() => GetOutput1)
  getPodcast(@Args('id') id: string): GetOutput1 {
    return this.podcastService.getPodcast(id);
  }
  @Mutation(() => common)
  deletePodcast(@Args('id') id: string) {
    return this.podcastService.deletePodcast(id);
  }
  @Mutation(() => common)
  updatePodcast(
    @Args('id') id: string,
    @Args('input') updatePodcastDto: UpdatePodcastDto,
  ) {
    return this.podcastService.updatePodcast(id, updatePodcastDto);
  }
  @Query(() => GetEpisodesOutput)
  getEpisodes(@Args('id') podcastId: string): GetEpisodesOutput {
    return this.podcastService.getEpisodes(podcastId);
  }
  // createEpisode
  // deleteEpisode
  // findEpisode
  // updateEpisode
}
