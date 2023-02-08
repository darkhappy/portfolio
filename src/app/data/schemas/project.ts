import {Tag} from "@data/schemas/tag";

export interface Project {
  name: string;
  description: string;
  url: string;
  tags: Tag[];
}
