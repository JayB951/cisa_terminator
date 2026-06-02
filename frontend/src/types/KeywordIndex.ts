export interface KeywordEntry {
  keyword: string;
  page: number;
}

export interface KeywordIndex {
  domainId: string;
  keywords: KeywordEntry[];
}
