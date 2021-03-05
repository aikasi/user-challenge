import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePodcastDto {
  @Field(() => String)
  readonly title: string;
  @Field(() => String)
  readonly category: string;
}
