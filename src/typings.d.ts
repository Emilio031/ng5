/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

export interface Member {
  Id: number;
  Name: string;
  Gender: string;
  Birthday: string;
  Email: string;
  Token: string;
  IsAdmin: boolean;
  CreatedDate: string;
  ModifyDate: string;
}

export interface Group {
  Id: number;
  Name: string;
  Description: string;
}

export interface Topic {
  Id: number;
  Name: string;
  Description: string;
  IsActive: boolean;
  GroupId: number;
  AllowItems: number;
  ExpireDate: Date;
  CanAddItems: boolean;
  CreatedMemberId: number;
}

export interface Item {
  Id: number;
  Name: string;
  TopicId: number;
  Description: string;
  CreatedMemberId: number;
}
