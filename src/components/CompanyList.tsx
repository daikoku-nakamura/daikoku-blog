import Container from '@/components/Container';
import { companyData } from '@/const/companyData';

export default function CompanyList() {
  return (
    <Container>
      {companyData.map(company => (
        <div key={company.department.id}>
          <h3 className='my-5 border-l-8 border-green-600 p-3 text-3xl'>
            {company.department.name}
          </h3>
          <div className='relative overflow-x-auto'>
            <table className='w-full text-left text-sm text-gray-500'>
              <thead className='bg-gray-50 text-lg uppercase'>
                <tr>
                  <th className='w-1/4 px-1 py-3 md:px-6'>名称</th>
                  <th className='w-1/2 px-1 py-3 md:px-6'>住所</th>
                  <th className='w-1/4 px-1 py-3 md:px-6'>電話番号</th>
                </tr>
              </thead>
              {company.department.meisai.map(dep => (
                <tbody key={dep.id}>
                  <tr className='border-b hover:bg-white'>
                    <td className='px-1 py-4 md:px-6'>{dep.name}</td>
                    <td className='px-1 py-4 md:px-6'>{dep.address}</td>
                    <td className='px-1 py-4 md:px-6'>{dep.tel}</td>
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
