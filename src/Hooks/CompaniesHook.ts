import { useState, useEffect } from 'react';

const useFetchCompanies = () => {
  const [companies, setCompanies] = useState<CategorizedCompanies>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://dealroom-backend-production.up.railway.app/companies'
        );
        const data: { items: Company[] } = await response.json();
        const categorized = categorizeByIndustry(data.items);
        sortCompaniesAlphabetically(categorized);
        setCompanies(categorized);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching companies data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { companies, isLoading };
};

const categorizeByIndustry = (companies: Company[]): CategorizedCompanies => {
  return companies.reduce((acc: CategorizedCompanies, company: Company) => {
    company.industries.forEach((industry) => {
      const industryName = industry.name;
      if (!acc[industryName]) {
        acc[industryName] = [];
      }

      const existingCompanyIndex = acc[industryName].findIndex(
        (c) => c.uuid === company.uuid
      );

      if (existingCompanyIndex !== -1) {
        acc[industryName][existingCompanyIndex].total_jobs_available += company.total_jobs_available;
      } else {
        acc[industryName].push({ ...company });
      }
    });

    return acc;
  }, {});
};

const sortCompaniesAlphabetically = (
  categories: CategorizedCompanies
): void => {
  for (const industry in categories) {
    categories[industry].sort((a, b) => a.name.localeCompare(b.name));
  }
};

export default useFetchCompanies;
