<script>
    let activeBlock = $state(null);
    let selectedService = $state("");
    let contactInput = $state("");
    
    // Состояние для выпадающего списка контактов
    let messengerType = $state("Telegram");
    
    // Реактивный плейсхолдер в зависимости от типа связи
    let inputPlaceholder = $derived(
        messengerType === "Telegram" || messengerType === "Instagram" 
            ? "укажите логин" 
            : "укажите номер телефона"
    );

    // Интерактивный трекинг света за курсором/пальцем
    let mouseX = $state(50);
    let mouseY = $state(50);
    
    function handleMouseMove(e) {
        mouseX = (e.clientX / window.innerWidth) * 100;
        mouseY = (e.clientY / window.innerHeight) * 100;
    }

    function handleTouchMove(e) {
        if (e.touches && e.touches[0]) {
            mouseX = (e.touches[0].clientX / window.innerWidth) * 100;
            mouseY = (e.touches[0].clientY / window.innerHeight) * 100;
        }
    }

    // Логика Hyper Text анимации
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#$@*0123456789";
    let word0 = $state("Optimize");
    let word1 = $state("Automate");
    let word2 = $state("Outmaneuver");
    const targets = ["Optimize", "Automate", "Outmaneuver"];

    function triggerHyperText(index) {
        let iterations = 0;
        const targetWord = targets[index];
        const interval = setInterval(() => {
            const nextValue = targetWord.split("").map((letter, idx) => {
                if (idx < iterations) return targetWord[idx];
                return letters[Math.floor(Math.random() * letters.length)];
            }).join("");
            if (index === 0) word0 = nextValue;
            if (index === 1) word1 = nextValue;
            if (index === 2) word2 = nextValue;
            if (iterations >= targetWord.length) clearInterval(interval);
            iterations += 1 / 3;
        }, 30);
    }

    function scrollToForm(serviceName) {
        selectedService = serviceName;
        const el = document.getElementById("friction-form");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    const services = [
        {
            id: 1,
            tag: "01 / TRAFFIC & DATA",
            title: "Performance Audit",
            heading: "Performance & Architecture Leak Detection",
            body: "Deep analytical drill-down into your current business systems. I trace every lead, audit your ad pixel health, map your CRM pipelines, and isolate exactly where your marketing budget is leaking. You get a bulletproof blueprint for optimization.",
            terms: "Complimentary for Qualified Businesses",
            cta: "Apply for Audit →",
            service: "Performance Audit"
        },
        {
            id: 2,
            tag: "02 / INFRASTRUCTURE",
            title: "Advanced CRM Engineering",
            heading: "Advanced CRM & Pipeline Engineering",
            body: "Transforming manual operational chaos into an automated revenue machine. I architect seamless database structures, implement end-to-end event tracking, and build zero-friction lead routing workflows in your CRM. No lost leads, no human errors.",
            terms: "Pricing: Bespoke / Project-Based",
            cta: "Request Architecture Brief →",
            service: "CRM Engineering"
        },
        {
            id: 3,
            tag: "03 / AI CORE",
            title: "Autonomous Retention",
            heading: "Autonomous Core & Retention Loops",
            body: "Deploying production-grade AI agents and smart algorithms directly into your business ecosystem. Automated 24/7 lead qualification, intelligent conversational flows, and algorithmic behavioral triggers that extract maximum recurring revenue from your existing client base on autopilot.",
            terms: "Pricing: Bespoke / Project-Based",
            cta: "Integrate AI Core →",
            service: "AI Core Integration"
        }
    ];
</script>

<div 
    onmousemove={handleMouseMove} 
    ontouchmove={handleTouchMove}
    class="relative min-h-screen overflow-x-hidden font-sans bg-[#030303] text-[#f4f4f5] pb-16"
>
    
    <div class="fixed inset-0 z-0 pointer-events-none">
        <div class="absolute inset-0 transition-opacity duration-500"
             style="background: 
                radial-gradient(circle 450px at {mouseX}% {mouseY}%, rgba(0, 242, 254, 0.12), transparent 80%),
                radial-gradient(circle 650px at {100 - mouseX}% {100 - mouseY}%, rgba(121, 40, 202, 0.05), transparent 70%);">
        </div>
        <div class="absolute inset-0 opacity-[0.12]" 
             style="background-image: linear-gradient(to right, #2a2a35 1px, transparent 1px), linear-gradient(to bottom, #2a2a35 1px, transparent 1px); background-size: 50px 50px;">
        </div>
    </div>

    <div class="max-w-[1100px] mx-auto px-6 relative z-10">
        
        <header class="pt-20 pb-10 max-w-[900px]">
            <div class="flex items-center gap-3 mb-4">
                <div class="w-1.5 h-1.5 rounded-full bg-[#00f2fe] shadow-[0_0_10px_#00f2fe] animate-pulse"></div>
                <span class="text-[11px] font-mono text-[#00f2fe] tracking-[0.25em] uppercase">Growth Architecture</span>
            </div>

            <h1 class="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.92] bg-gradient-to-b from-white to-[#444444] bg-clip-text text-transparent select-none">
                <span role="button" tabindex="0" class="cursor-pointer inline-block transition-colors hover:text-[#00f2fe]" onmouseenter={() => triggerHyperText(0)} ontouchstart={() => triggerHyperText(0)}>{word0}</span><br>
                <span role="button" tabindex="0" class="cursor-pointer inline-block transition-colors hover:text-[#00f2fe]" onmouseenter={() => triggerHyperText(1)} ontouchstart={() => triggerHyperText(1)}>{word1}</span><br>
                <span role="button" tabindex="0" class="cursor-pointer inline-block text-[#00f2fe]" onmouseenter={() => triggerHyperText(2)} ontouchstart={() => triggerHyperText(2)}>{word2}</span>
            </h1>
            
            <p class="text-lg md:text-xl text-[#8e8e93] max-w-[650px] font-light leading-relaxed">
                Transform fragmented marketing data into autonomous intelligence systems that leave competitors chasing your tail.
            </p>
        </header>

        <section class="pb-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 transition-all duration-500 ease-out">
                
                {#each services as svc}
                    <button 
                        onclick={() => activeBlock = (activeBlock === svc.id ? null : svc.id)} 
                        class="text-left bg-[#09090b]/80 backdrop-blur-md border p-6 rounded-2xl transition-all duration-300 group outline-none
                               {activeBlock === svc.id ? 'border-[#00f2fe] bg-[#0c1013] shadow-[0_0_20px_rgba(0,242,254,0.1)]' : 'border-[#1e1e24] hover:border-zinc-700'} 
                               {activeBlock !== null && activeBlock !== svc.id ? 'opacity-30 scale-[0.97] blur-[1px]' : 'scale-100'}"
                    >
                        <div class="text-[10px] font-bold text-[#00f2fe] tracking-widest uppercase mb-3 transition-colors group-hover:text-white">{svc.tag}</div>
                        <h3 class="text-lg font-bold transition-all {activeBlock !== null && activeBlock !== svc.id ? 'text-base' : ''}">{svc.title}</h3>
                    </button>
                {/each}

            </div>

            <div class="relative bg-[#09090b]/90 backdrop-blur-md border rounded-2xl transition-all duration-500 overflow-hidden 
                        {activeBlock !== null ? 'p-8 md:p-10 border-zinc-700 max-h-[500px] opacity-100' : 'p-0 max-h-0 opacity-0 border-none pointer-events-none'}">
                
                {#each services as svc}
                    {#if activeBlock === svc.id}
                        <div class="animate-[blurFade_0.4s_cubic-bezier(0.16,1,0.3,1)]">
                            <h4 class="text-xl md:text-2xl font-bold mb-3 text-white">{svc.heading}</h4>
                            <p class="text-[#8e8e93] text-sm md:text-base leading-relaxed max-w-[800px] mb-6">
                                {svc.body}
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-5 border-t border-[#1e1e24]">
                                <span class="text-xs font-mono text-zinc-500">{svc.terms}</span>
                                <button onclick={() => scrollToForm(svc.service)} class="text-[#00f2fe] text-sm font-bold hover:text-white transition-colors">
                                    {svc.cta}
                                </button>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        </section>

        <section id="friction-form" class="pb-12 max-w-[650px] mx-auto">
            <div class="bg-[#09090b]/90 backdrop-blur-md border border-[#1e1e24] rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 hover:border-[#00f2fe]/20">
                <div class="absolute -top-20 -right-20 w-56 h-56 bg-[#00f2fe]/4 rounded-full blur-3xl pointer-events-none"></div>
                
                <h2 class="text-xl font-bold tracking-tight mb-1 text-white">Initialize Solution Architecture</h2>
                <p class="text-[#8e8e93] mb-6 text-xs md:text-sm">Leave your preferred channel below to anchor the bridge between chaos and system intelligence</p>

                <form onsubmit={(e) => e.preventDefault()} class="space-y-4">
                    {#if selectedService}
                        <div class="text-[10px] font-mono text-zinc-600 uppercase tracking-widest animate-[blurFade_0.2s_ease-out]">
                            Requested flow: <span class="text-[#00f2fe]">{selectedService}</span>
                        </div>
                    {/if}
                    
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div class="flex flex-col gap-1.5">
                            <label for="messenger" class="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Channel</label>
                            <select
                                id="messenger"
                                bind:value={messengerType}
                                class="w-full bg-black border border-[#1e1e24] rounded-xl p-3 text-white focus:outline-none focus:border-[#00f2fe] transition-all font-sans text-sm cursor-pointer appearance-none"
                                style="background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"292.4\" height=\"292.4\" fill=\"%238e8e93\"><path d=\"M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z\"/></svg>'); background-repeat: no-repeat; background-position: right 14px top 50%; background-size: 10px auto;"
                            >
                                <option value="Telegram">Telegram</option>
                                <option value="Instagram">Instagram</option>
                                <option value="WhatsApp">WhatsApp</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Line">Line</option>
                                <option value="Phone/SMS">Phone / SMS</option>
                            </select>
                        </div>

                        <div class="flex flex-col gap-1.5 sm:col-span-2">
                            <label for="contact" class="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Contact Details</label>
                            <input
                                id="contact"
                                type="text"
                                bind:value={contactInput}
                                placeholder={inputPlaceholder}
                                required
                                class="w-full bg-black border border-[#1e1e24] rounded-xl p-3 text-white focus:outline-none focus:border-[#00f2fe] transition-all font-mono text-sm placeholder-zinc-700"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        class="w-full bg-white text-black p-3.5 rounded-xl font-bold text-sm transition-all hover:bg-[#00f2fe] hover:shadow-[0_0_30px_rgba(0,242,254,0.2)] active:scale-[0.98] mt-2"
                    >
                        Request Architecture Brief
                    </button>
                </form>
            </div>
        </section>

        <footer class="border-t border-[#1e1e24] py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-xs text-[#333] font-mono">© 2026 tsvetkov.site · All systems operational</p>
            <div class="flex gap-6 text-sm text-[#8e8e93]">
                <a href="https://t.me/advertisment_th" target="_blank" class="hover:text-[#00f2fe] transition-colors">Telegram</a>
                <span role="link" tabindex="0" class="hover:text-[#00f2fe] transition-colors cursor-pointer">Instagram</span>
                <span role="link" tabindex="0" class="hover:text-[#00f2fe] transition-colors cursor-pointer">Threads</span>
                <span role="link" tabindex="0" class="hover:text-[#00f2fe] transition-colors cursor-pointer">TikTok</span>
            </div>
        </footer>
    </div>
</div>

<style>
    @keyframes blurFade {
        0%   { filter: blur(6px); opacity: 0; transform: translateY(8px); }
        100% { filter: blur(0);   opacity: 1; transform: translateY(0); }
    }
</style>
