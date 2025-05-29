import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GoPeople } from "react-icons/go";

export default function Impact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          FundWave Impact
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
              <GoPeople className="w-8 h-8 text-blue-600"/>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Projects Funded</h3>
            <p className="text-4xl font-bold text-blue-600">1,234+</p>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
              <FaRegMoneyBillAlt className="w-8 h-8 text-blue-600"/>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Total Amount Raised</h3>
            <p className="text-4xl font-bold text-blue-600">NLe500,000+</p>
          </div>
        </div>
      </div>
    </section>
  );
}