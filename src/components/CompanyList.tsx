import Container from '@/components/Container';
import { companyData } from '@/const/companyData';

export default function CompanyList() {
  return (
    <Container>
      {companyData.map(company => (
        <div key={company.department.id}>
          <h3 className='my-5 border-l-8 border-blue-600 p-3 text-3xl'>
            {company.department.name}
          </h3>
          <div className='relative overflow-x-auto'>
            <table className='w-full text-left text-sm'>
              <thead className='bg-gray-50 uppercase'>
                <tr>
                  <th className='w-1/4 px-1 py-3 md:px-6 text-xl'>名称</th>
                  <th className='w-1/2 px-1 py-3 md:px-6 text-xl'>住所</th>
                  <th className='w-1/4 px-1 py-3 md:px-6 text-xl'>電話番号</th>
                </tr>
              </thead>
              {company.department.items.map(item => (
                <tbody key={item.id}>
                  <tr className='border-b hover:bg-white text-gray-600'>
                    <td className='px-1 py-4 md:px-6'>{item.name}</td>
                    <td className='px-1 py-4 md:px-6'>{item.address}</td>
                    <td className='px-1 py-4 md:px-6'>{item.tel}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      ))}
    </Container>
  );
}
