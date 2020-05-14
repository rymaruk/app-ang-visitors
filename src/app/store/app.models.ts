export interface IdVisitor {
  id: number;
}

export interface Visitor extends IdVisitor {
  name: string;
  email: string;
}
