import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePodcastDto {
  @Field(() => String)
  title: string;
  @Field(() => String)
  category: string;
}
