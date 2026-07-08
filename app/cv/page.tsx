import cvData from './cv-data.json';

export default function CVPage() {
  return (
    // Класс max-w-[210mm] и print:p-0 подгоняют контейнер под формат А4 для печати
    <main className="mx-auto max-w-[210mm] bg-white text-black p-8 print:p-0 min-h-screen">
      
      {/* Шапка резюме */}
      <section className="border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold uppercase tracking-wide">{cvData.meta.name}</h1>
        <p className="text-gray-600 font-medium">{cvData.meta.base_headline}</p>
        <div className="flex gap-4 text-sm text-gray-500 mt-2">
          <span>{cvData.meta.contacts.email}</span>
          <span>{cvData.meta.contacts.phone}</span>
          <span>{cvData.meta.contacts.site}</span>
        </div>
      </section>

      {/* Опыт работы */}
      <section>
        <h2 className="text-xl font-bold uppercase tracking-wider mb-4 text-gray-800">Experience</h2>
        <div className="space-y-6">
          {cvData.experience_pool.map((job) => (
            // print:break-inside-avoid запрещает разрывать карточку опыта пополам при печати
            <div key={job.id} className="print:break-inside-avoid">
              <div className="flex justify-between font-semibold">
                <h3>{job.role} — <span className="text-gray-700">{job.company}</span></h3>
                <span className="text-gray-500 text-sm">{job.period}</span>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 text-sm">
                {job.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
