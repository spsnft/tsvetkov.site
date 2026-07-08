import cvData from './cv-data.json';

export default function CVPage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen py-8 print:py-0 print:bg-white subpixel-antialiased">
      {/* Контейнер А4 */}
      <main className="mx-auto w-[210mm] h-[297mm] bg-white text-[#1a1a1a] p-[12mm] relative shadow-lg print:shadow-none print:p-[10mm] flex flex-col justify-between select-none">
        
        {/* Основной двухколоночный грид */}
        <div className="grid grid-cols-12 gap-[8mm] items-start">
          
          {/* ЛЕВАЯ КОЛОНКА (Широкая): Фото, Имя, Опыт */}
          <div className="col-span-7 space-y-5">
            
            {/* Хедер: Фото + Имя + Саммари */}
            <div className="space-y-3">
              {/* Фото с закругленными углами как на макете */}
              <div className="w-[32mm] h-[38mm] relative overflow-hidden rounded-[4mm] border border-gray-200">
                {/* Укажи здесь правильный путь к своей фотке в папке public */}
                <img 
                  src="/avatar.png" 
                  alt="Fedor Tsvetkov" 
                  className="w-full h-full object-cover grayscale contrast-[1.05]"
                />
              </div>
              
              <div>
                <h1 className="text-2xl font-black tracking-tighter text-black uppercase leading-none">
                  {cvData.meta.name.split(' ')[0]}<br />
                  {cvData.meta.name.split(' ')[1]}
                </h1>
                <p className="text-[9.5px] text-gray-700 leading-relaxed font-normal mt-2 pr-2 text-justify">
                  {cvData.meta.summary}
                </p>
              </div>
            </div>

            {/* Секция: EXPERIENCE */}
            <div className="space-y-4">
              <h2 className="text-[11px] font-black tracking-widest text-black uppercase border-b-2 border-black pb-0.5">
                EXPERIENCE
              </h2>
              
              <div className="space-y-4">
                {cvData.experience_pool.map((job) => (
                  <div key={job.id} className="print:break-inside-avoid space-y-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-[10px] font-black text-black uppercase tracking-tight">
                        {job.role}
                      </h3>
                      <span className="text-[8.5px] font-bold text-gray-500 lowercase tracking-tighter">
                        {job.period}
                      </span>
                    </div>
                    <div className="text-[8.5px] font-extrabold text-gray-600 uppercase tracking-wide">
                      {job.company}, {job.location}
                    </div>
                    <ul className="space-y-1 mt-1">
                      {job.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-[8.5px] text-gray-800 leading-snug flex items-start">
                          <span className="text-black mr-1.5 select-none">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ПРАВАЯ КОЛОНКА (Узкая): Контакты, Скиллы, Образование */}
          <div className="col-span-5 space-y-5 pl-[2mm]">
            
            {/* Контакты сверху */}
            <div className="text-[9px] font-medium text-gray-800 space-y-0.5 pt-1">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-black">Email:</span>
                <a href={`mailto:${cvData.meta.contacts.email}`} className="hover:underline">{cvData.meta.contacts.email}</a>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-black">Phone:</span>
                <span>{cvData.meta.contacts.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-black">Web:</span>
                <a href={`https://${cvData.meta.contacts.site}`} target="_blank" className="hover:underline font-bold text-black">{cvData.meta.contacts.site}</a>
              </div>
            </div>

            {/* Секция: CORE SKILLS */}
            <div className="space-y-3">
              <h2 className="text-[11px] font-black tracking-widest text-black uppercase border-b-2 border-black pb-0.5">
                CORE SKILLS
              </h2>
              
              <div className="space-y-3">
                {cvData.skills_categories.map((cat, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-[9px] font-black text-black tracking-tight">
                      {cat.category}
                    </h4>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {cat.items.map((skill, sIdx) => (
                        <span key={sIdx} className="text-[8.5px] text-gray-700 font-medium leading-none">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Секция: EDUCATION */}
            <div className="space-y-3">
              <h2 className="text-[11px] font-black tracking-widest text-black uppercase border-b-2 border-black pb-0.5">
                EDUCATION
              </h2>
              
              <div className="space-y-2">
                {cvData.education_pool.map((edu, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <h4 className="text-[9px] font-black text-black uppercase leading-tight tracking-tight">
                      {edu.degree}
                    </h4>
                    <div className="text-[8.5px] font-bold text-gray-600">
                      {edu.school} <span className="text-gray-400 font-normal">| {edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Фирменный вертикально-горизонтальный футер в правом нижнем углу как на макете */}
        <div className="flex justify-between items-end border-t border-gray-200 pt-2 text-gray-400 text-[7.5px] font-bold tracking-widest uppercase">
          <div>{cvData.meta.name}</div>
          <div>CV | RESUME</div>
        </div>

      </main>
    </div>
  );
}
