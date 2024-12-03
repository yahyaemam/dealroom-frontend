import CompanyCard from "./CompanyCard";

const IndustryCard: React.FC<{ industry: string; companies: Company[] }> = ({
    industry,
    companies,
  }) => (
    <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/2 lg:w-1/4 border-t">
      <div className="flex justify-between items-center pb-2 mb-2">
        <h2 className="text-m font-bold capitalize">{industry}</h2>
        <span className="text-sm font-medium text-gray-600">
          ({companies.length})
        </span>
      </div>
      <div className="flex justify-between items-center ">
        <h2 className="text-xs text-gray-400">Name</h2>
        <span className="text-xs text-gray-400">Total jobs available</span>
      </div>
      <div className="border-t pt-2 max-h-80 overflow-y-auto">
        {companies.map(company => (
          <CompanyCard key={company.uuid} company={company} />
        ))}
      </div>
    </div>
  );

  export default IndustryCard;