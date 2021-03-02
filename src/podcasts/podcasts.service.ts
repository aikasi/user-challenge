import { Injectable, NotFoundException } from '@nestjs/common';
import { PodCast } from './entities/podcast.entity';

@Injectable()
export class PodcastsService {
  private podCasts: PodCast[] = [];

  getAll() {
    return this.podCasts;
  }
  create(podData) {
    this.podCasts.push({
      id: this.podCasts.length + 1,
      ...podData,
    });
  }

  getOne(id: string) {
    const podcast = this.podCasts.find((podcast) => podcast.id === +id);
    if (!podcast) {
      throw new NotFoundException(`Not Found podCast: ${id}`);
    }
    return podcast;
  }

  patch(id: string, podData) {
    const podcast = this.getOne(id);
    this.remove(id);
    this.podCasts.push({ ...podcast, ...podData });
  }
  remove(id: string) {
    this.getOne(id);
    this.podCasts = this.podCasts.filter((podCast) => podCast.id !== +id);
  }
  getEpisodes(id: string) {
    const podCast = this.getOne(id);
    if (!podCast) {
      throw new NotFoundException(`Not Found Episodes: ${id}`);
    }
    return podCast.episodes;
  }
  createEpisodes(id: string, episodeData) {
    const podCast = this.getOne(id);
    podCast.episodes.push({
      id: podCast.episodes.length + 1,
      ...episodeData,
    });
  }
  patchEpisode(id: string, episodeId: string, podData) {
    this.getOne(id);
    this.deleteEpisode(id, episodeId);
    this.podCasts
      .find((podCast) => podCast.id === +id)
      .episodes.push({
        id: +episodeId,
        ...podData,
      });
  }
  deleteEpisode(id: string, episodeId: string) {
    this.getOne(id);
    const episode = this.podCasts
      .find((podcast) => podcast.id === +id)
      .episodes.findIndex((item) => item.id === +episodeId);
    this.podCasts
      .find((podcast) => podcast.id === +id)
      .episodes.splice(episode, 1);
  }
  //
}
