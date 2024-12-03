interface ImageSizes {
  '32x32': string;
  '74x74': string;
  '100x100': string;
}

interface IncomeStream {
  id: number;
  name: string;
}

interface Industry {
  id: number;
  name: string;
}

interface Company {
  uuid: string;
  name: string;
  tagline: string;
  total_jobs_available: number;
  images: ImageSizes;
  income_streams: IncomeStream[];
  industries: Industry[];
}

interface CategorizedCompanies {
  [industry: string]: Company[];
}
