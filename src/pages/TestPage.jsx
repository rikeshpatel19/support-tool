import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import BottomNav from '../components/BottomNav';
import { getSubjects } from '../services/api';

const TestPage = () => {
  const navigate = useNavigate();

  const [subjects, setSubjects] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await getSubjects();
      setSubjects(data);
      setLoading(false);
    };
    loadData();
  }, []);
  
  if (loading) {
    return <div className="p-10 text-center font-bold">Loading exams...</div>;
  }

    return (
      <div className="min-h-screen bg-white font-sans pb-24">
        
        {/* Header (Simplified) */}
        <div className="p-4 border-b-2 border-black flex items-center justify-center sticky top-0 bg-white z-10">
          <h1 className="text-3xl font-black capitalize">Mock Exams</h1>
          <div className="w-10" /> {/* Spacer to center the title */}
        </div>
  
        <div className="max-w-4xl mx-auto p-6 space-y-8">
          {Object.keys(subjects).map((key) => {
            const subject = subjects[key];
            if (!subject.exams || subject.exams.length === 0) return null;

            return (
              <section key={key}>
                <h2 className="text-xl font-bold mb-4">GL Assessment {subject.title}</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {subject.exams.map((exam) => (
                    <Button  className='p-10!'
                      key={exam.id}
                      onClick={() => console.log(`Starting ${exam.name}`)} 
                    >{exam.name}</Button>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        {/* --- BOTTOM NAVIGATION --- */}
        <BottomNav activePage="test"/>
      </div>
    );
  };
  

export default TestPage;