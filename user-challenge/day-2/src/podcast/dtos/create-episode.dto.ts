import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Episode } from '../entities/episode.entity';
import { Podcast } from '../entities/podcast.entity';
import { CreatePodcastDto } from './create-podcast.dto';

@InputType()
export class CreateEpisodeDto extends CreatePodcastDto {}

@ObjectType()
export class common {
  @Field(() => String, { nullable: true })
  err?: string;
}

@ObjectType()
export class GetOutput extends common {
  @Field(() => [Podcast])
  podcasts: Podcast[];
}

@ObjectType()
export class GetOutput1 extends common {
  @Field(() => Podcast, { nullable: true })
  podcast?: Podcast;
}

@ObjectType()
export class CreateOutput extends common {
  @Field(() => Number)
  id: number;
}

@ObjectType()
export class GetEpisodesOutput extends common {
  @Field(() => [Episode], { nullable: true })
  episodes?: Episode[];
}
