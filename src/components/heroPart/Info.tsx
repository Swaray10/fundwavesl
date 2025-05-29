import { IoShieldOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";

export default function Info() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Why FundWave?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <IoShieldOutline className="w-8 h-8 text-green-600"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Strict Vetting</h3>
            <p className="text-gray-600">
              We thoroughly verify all campaigns to ensure your donations go to legitimate causes
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <IoMdCheckmarkCircleOutline className="w-8 h-8 text-green-600"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Milestone-Based Funding</h3>
            <p className="text-gray-600">
              Funds are released in stages, ensuring projects stay on track and accountable
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <BsPeopleFill className="w-8 h-8 text-green-600"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Engagement</h3>
            <p className="text-gray-600">
              Connect directly with project creators and fellow donors to maximize impact
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}