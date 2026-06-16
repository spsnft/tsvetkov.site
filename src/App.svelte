<script>
    // Состояние Bento-коммутатора (по схеме image_3.png)
    let activeBlock = $state(null);

    // Данные для формы
    let selectedPain = $state("");
    let selectedService = $state("");
    let contactInput = $state("");

    // Интерактивный свет за курсором (Hero Highlight)
    let mouseX = $state(50);
    let mouseY = $state(50);
    
    function handleMouseMove(e) {
        mouseX = (e.clientX / window.innerWidth) * 100;
        mouseY = (e.clientY / window.innerHeight) * 100;
    }

    // Железобетонная логика для Hyper Text анимации заголовка (чистый Svelte 5)
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#$@*0123456789";
    
    let word0 = $state("Optimize.");
    let word1 = $state("Automate.");
    let word2 = $state("Outmaneuver.");

    const targets = ["Optimize.", "Automate.", "Outmaneuver."];

    function triggerHyperText(index) {
        let iterations = 0;
        const targetWord = targets[index];
        
        const interval = setInterval(() => {
            const nextValue = targetWord
                .split("")
                .map((letter, idx) => {
                    if (idx < iterations) return targetWord[idx];
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            // Прямое безопасное обновление плоского состояния
            if (index === 0) word0 = nextValue;
            if (index === 1) word1 = nextValue;
            if (index === 2) word2 = nextValue;

            if (iterations >= targetWord.length) {
                clearInterval(interval);
            }
            iterations += 1 / 3;
        }, 30);
    }

    // Плавный скролл к форме при клике на CTA внутри блоков
    function scrollToForm(serviceName) {
        selectedService = serviceName;
        const element = document.getElementById("friction-form");
        if (element) element.scrollIntoView({ behavior: "smooth" });
    }
</script>

<div onmousemove={handleMouseMove} class="relative min-h-screen overflow-hidden font-sans select-none pb-32 bg-[#030303] text-[#f4f4f5]">
    
    <div class="fixed inset-0 pointer-events-none z-0" 
         style="background: 
            radial-gradient(circle 550px at {mouseX}% {mouseY}%, rgba(0, 242, 254, 0.05), transparent 80%),
            radial-gradient(circle 700px at 10% 20%, rgba(121, 40, 202, 0.02), transparent 70%);">
        
        <div class="absolute inset-0 opacity-20 bg-grid-animate" 
             style="background-image: linear-gradient(to right, #1e1e24 1px, transparent 1px), linear-gradient(to bottom, #1e1e24 1px, transparent 1px); background-size: 60px 60px;">
        </div>
    </div>

    <div class="max-w-[1100px] mx-auto px-6 pt-36 relative z-10">
        
        <header class="max-w-[900px] mb-16">
            <h1 class="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-[0.95] bg-gradient-to-b from-white to-[#444444] bg-clip-text text-transparent select-none">
                <span class="cursor-pointer inline-block transition-colors hover:text-[#00f2fe]" onmouseenter={() => triggerHyperText(0)}>{word0}</span><br>
                <span class="cursor-pointer inline-block transition-colors hover:text-[#00f2fe]" onmouseenter={() => triggerHyperText(1)}>{word1}</span><br>
                <span class="cursor-pointer inline-block text-[#00f2fe]" onmouseenter={() => triggerHyperText(2)}>{word2}</span>
            </h1>
            <p class="text-xl md:text-2xl text-[#8e8e93] max-w-[700px] font-normal leading-relaxed">
                Stop running blind. I transform fragmented marketing data and CRM chaos into autonomous intelligence systems that leave competitors chasing your tail.
            </p>
        </header>

        <div class="flex flex-col sm:flex-row gap-6 mb-32">
            <button onclick={() => scrollToForm('Express Audit')} class="relative group overflow-hidden bg-black border border-[#1e1e24] text-white px-8 py-4 rounded-xl font-mono text-sm tracking-wide transition-all hover:border-[#00f2fe] hover:shadow-[0_0_30px_rgba(0,242,254,0.2)]">
                <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                [EXECUTE_EXPRESS_AUDIT]
            </button>

            <button onclick={() => scrollToForm('Full Transformation')} class="relative overflow-hidden bg-[#f4f4f5] text-black px-8 py-4 rounded-xl font-mono text-sm font-bold transition-all hover:bg-[#00f2fe] hover:shadow-[0_0_40px_rgba(0,242,254,0.3)] btn-ripple">
                FULL_SYSTEM_TRANSFORMATION →
            </button>
        </div>

        <section class="mb-32">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 transition-all duration-500 ease-out">
                
                <button onclick={() => activeBlock = (activeBlock === 1 ? null : 1)} 
                     class="text-left bg-[#09090b] border p-8 rounded-2xl transition-all duration-300 group outline-none 
                            {activeBlock === 1 ? 'border-[#00f2fe] bg-[#0c1013]' : 'border-[#1e1e24] hover:border-zinc-700'} 
                            {activeBlock !== null && activeBlock !== 1 ? 'opacity-40 scale-98' : ''}">
                    <div class="text-xs font-bold text-[#00f2fe] tracking-widest uppercase mb-4 transition-colors group-hover:text-white">01 / TRAFFIC & DATA</div>
                    <h3 class="text-xl font-bold transition-all {activeBlock !== null && activeBlock !== 1 ? 'text-sm' : ''}">Performance Audit</h3>
                </button>

                <button onclick={() => activeBlock = (activeBlock === 2 ? null : 2)} 
                     class="text-left bg-[#09090b] border p-8 rounded-2xl transition-all duration-300 group outline-none 
                            {activeBlock === 2 ? 'border-[#00f2fe] bg-[#0c1013]' : 'border-[#1e1e24] hover:border-zinc-700'} 
                            {activeBlock !== null && activeBlock !== 2 ? 'opacity-40 scale-98' : ''}">
                    <div class="text-xs font-bold text-[#00f2fe] tracking-widest uppercase mb-4 transition-colors group-hover:text-white">02 / INFRASTRUCTURE</div>
                    <h3 class="text-xl font-bold transition-all {activeBlock !== null && activeBlock !== 2 ? 'text-sm' : ''}">Advanced CRM Engineering</h3>
                </button>

                <button onclick={() => activeBlock = (activeBlock === 3 ? null : 3)} 
                     class="text-left bg-[#09090b] border p-8 rounded-2xl transition-all duration-300 group outline-none 
                            {activeBlock === 3 ? 'border-[#00f2fe] bg-[#0c1013]' : 'border-[#1e1e24] hover:border-zinc-700'} 
                            {activeBlock !== null && activeBlock !== 3 ? 'opacity-40 scale-98' : ''}">
                    <div class="text-xs font-bold text-[#00f2fe] tracking-widest uppercase mb-4 transition-colors group-hover:text-white">03 / AI CORE</div>
                    <h3 class="text-xl font-bold transition-all {activeBlock !== null && activeBlock !== 3 ? 'text-sm' : ''}">Autonomous Retention</h3>
                </button>
            </div>

            <div class="relative bg-[#09090b] border rounded-3xl transition-all duration-500 overflow-hidden 
                        {activeBlock !== null ? 'p-12 border-zinc-700 max-h-[600px] opacity-100 mt-4' : 'p-0 max-h-0 opacity-0 border-none pointer-events-none'}">
                
                {#if activeBlock === 1}
                    <div class="animate-[blurFade_0.4s_cubic-bezier(0.16,1,0.3,1)]">
                        <h4 class="text-2xl font-bold mb-4 text-white">Performance & Architecture Leak Detection</h4>
                        <p class="text-[#8e8e93] text-lg leading-relaxed max-w-[800px] mb-8">
                            Deep analytical drill-down into your current business systems. I trace every lead, audit your ad pixel health, map your CRM pipelines, and isolate exactly where your marketing budget is leaking. You get a bulletproof blueprint for optimization.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-6 border-t border-[#1e1e24]">
                            <span class="text-sm font-mono text-zinc-500">Terms: Complimentary for Qualified Businesses</span>
                            <button onclick={() => scrollToForm('Performance Audit')} class="text-[#00f2fe] font-bold hover:text-white transition-colors">Apply for Audit →</button>
                        </div>
                    </div>
                {/if}

                {#if activeBlock === 2}
                    <div class="animate-[blurFade_0.4s_cubic-bezier(0.16,1,0.3,1)]">
                        <h4 class="text-2xl font-bold mb-4 text-white">Advanced CRM & Pipeline Engineering</h4>
                        <p class="text-[#8e8e93] text-lg leading-relaxed max-w-[800px] mb-8">
                            Transforming manual operational chaos into an automated revenue machine. I architect seamless database structures, implement end-to-end event tracking, and build zero-friction lead routing workflows in your CRM. No lost leads, no human errors.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-6 border-t border-[#1e1e24]">
                            <span class="text-sm font-mono text-zinc-500">Pricing: Bespoke / Project-Based</span>
                            <button onclick={() => scrollToForm('CRM Engineering')} class="text-[#00f2fe] font-bold hover:text-white transition-colors">Request Architecture Brief →</button>
                        </div>
                    </div>
                {/if}

                {#if activeBlock === 3}
                    <div class="animate-[blurFade_0.4s_cubic-bezier(0.16,1,0.3,1)]">
                        <h4 class="text-2xl font-bold mb-4 text-white">Autonomous Core & Retention Loops</h4>
                        <p class="text-[#8e8e93] text-lg leading-relaxed max-w-[800px] mb-8">
                            Deploying production-grade AI agents and smart algorithms directly into your business ecosystem. Automated 24/7 lead qualification, intelligent conversational flows, and algorithmic behavioral triggers that extract maximum recurring revenue from your existing client base on autopilot.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-6 border-t border-[#1e1e24]">
                            <span class="text-sm font-mono text-zinc-500">Pricing: Bespoke / Project-Based</span>
                            <button onclick={() => scrollToForm('AI Core Integration')} class="text-[#00f2fe] font-bold hover:text-white transition-colors">Integrate AI Core →</button>
                        </div>
                    </div>
                {/if}
            </div>
        </section>

        <section id="friction-form" class="bg-[#09090b] border border-
