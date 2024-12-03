import { useState } from "react";

const CompanyCard: React.FC<{ company: Company }> = ({ company }) => {
  const [imageSrc, setImageSrc] = useState(company.images['74x74']);
  const handleImageError = () => {
    setImageSrc('https://via.placeholder.com/74');
  };

  return (
    <div className="flex items-center justify-between gap-4 px-4 py-1 pl-0 last:border-b-0">
      <div className="flex items-center gap-4">
        <img
          src={imageSrc}
          alt={`${company.name} logo`}
          className="w-12 h-12 rounded"
          onError={handleImageError}
        />
        <h3 className="text-lg font-semibold">{company.name}</h3>
      </div>
      <p className="text-sm font-medium text-gray-800">
        {company.total_jobs_available}
      </p>
    </div>
  );
};

export default CompanyCard;