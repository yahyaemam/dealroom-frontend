import React from 'react';
import useFetchCompanies from '../../Hooks/CompaniesHook';
import IndustryCard from '../../Components/companies/IndustryCard';

const CompaniesDashboard: React.FC = () => {
  const { companies, isLoading } = useFetchCompanies();

  if (isLoading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="flex justify-center flex-wrap gap-4">
      {Object.keys(companies).map(industry => (
        <IndustryCard
          key={industry}
          industry={industry}
          companies={companies[industry]}
        />
      ))}
    </div>
  );
};

export default CompaniesDashboard;
