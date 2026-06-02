export interface DomainTopic {
  title: string;
  page: number;
}

export interface Domain {
  id: string;
  name: string;
  topics: DomainTopic[];
}
