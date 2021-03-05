import { Field, InputType } from '@nestjs/graphql';
import { Episode } from '../entities/episode.entity';

@InputType()
export class UpdatePodcastDto {
  @Field(() => String)
  readonly title?: string;
  @Field(() => String)
  readonly category?: string;
  @Field(() => Number)
  readonly rating?: number;
  @Field(() => [Episode])
  readonly episodes?: Episode[];
}
