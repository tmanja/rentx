import { v4 as uuidV4 } from "uuid";

export class Category {
  id: string;
  name: string;
  description: string;
  created_at: Date;

  constructor(name: string, description: string) {
    this.id = uuidV4();
    this.name = name;
    this.description = description;
    this.created_at = new Date();
  }
}
