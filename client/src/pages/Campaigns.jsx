import  { useState, useEffect } from 'react';
import axios from 'axios';

const Campaigns = ()  =>  {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()  =>  {
    const fetchCampaigns  = async ()  =>  {
      try {
        const response  = await axios.get('/api/campaigns');
        setCampaigns(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Gagal mengambil data:',  error);
        setLoading(false);
      }
    };
    fetchCampaigns();
  },  []);

  if  (loading) {
    return  <div className="text-center text-xl mt-20 text-gray-600">
      Memuat data kampanye.....
    </div>;
  }

  return  (
    <div className="max-w-6xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8  text-center text-gray-800">Daftar Kampanye Kebaikan</h2>

      <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-6">
        {campaigns.map((campaign) =>  (
        <div key={campaign._id} className="bg-white p-6 rounded-xl  shadow-md border  border-gray-100 hover:shadow-lg transition  duration-300">
          <div className="flex  justify-between items-start mb-4">
              <h3 className="text-xl  font-bold text-gray-800 line-clamp-2">{campaign.title}</h3>  
          </div>

          <p className="text-gray-600 mb-4  line-clamp-3  text-sm">{campaign.description}</p>

          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2  py-1  rounded-full  font-semibold">
              {campaign.category}
            </span>
          </div>

          <div className="w-full  bg-gray-200 rounded-full  h-2 mb-2">
            <div 
              className="bg-blue-500 h-2 rounded-full"
              style={{  width:  `${Math.min((campaign.currentAmount / campaign.targetAmount)  * 100,  100)}%` }}> 
            </div>
          </div>

          <div className="flex  justify-between text-sm mb-6">
            <span className="text-gray-500">Terkumpul</span>
            <span className="font-bold  text-green-600">
              Rp  {campaign.currentAmount.toLocaleString('id-ID')}
              </span>
          </div>

          <button className="w-full bg-blue-600 text-white  font-bold py-2.5  px-4  rounded-lg  hover:bg-blue-700 transition  duration-300">
            Donasi Sekarang
            </button>
          </div>
        ))}
      </div>

      {campaigns.length === 0 &&  (
      <p className="text-center text-gray-500 mt-10 ">Belum ada kampanye yang tersedia saat ini.</p>
      )}
    </div>
  );
};

export default  Campaigns;
