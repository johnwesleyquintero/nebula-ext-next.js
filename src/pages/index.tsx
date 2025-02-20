import Layout from '@/components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Amazon Analytics Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Business Reports</h2>
            <p className="text-gray-600 mb-4">
              Access and analyze your business performance data
            </p>
            <a
              href="/reports/business"
              className="text-blue-500 hover:text-blue-600"
            >
              View Reports →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Search Analytics</h2>
            <p className="text-gray-600 mb-4">
              Track search terms and performance metrics
            </p>
            <a
              href="/reports/search-query"
              className="text-blue-500 hover:text-blue-600"
            >
              View Analytics →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}