import { Param } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { Podcast } from './entities/podcast.entity';
import { PodcastsService } from './podcasts.service';

@Resolver()
export class PodcastResolver {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Query(() => [Podcast])
  async getAllPodcasts(): Promise<{ podcasts: Podcast[]; err: string | null }> {
    return this.podcastsService.getAllPodcasts();
  }
  @Mutation(() => Boolean)
  async createPodcast(
    @Args('input') createPodcastDto: CreatePodcastDto,
  ): Promise<boolean> {
    try {
      await this.podcastsService.createPodcast(createPodcastDto);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
    //1
  }
  @Query(() => Podcast)
  async getPodcast(@Param('id') id: string) {
    return this.podcastsService.getPodcast(id);
  }
  // @Mutation(() => )
  //  deletePodcast
  // updatePodcast
  // getEpisodes
  // createEpisode
  // deleteEpisode
  // findEpisode
  // updateEpisode
}
